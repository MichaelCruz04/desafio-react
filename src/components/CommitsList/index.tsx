import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import {
  BackLink,
  CommitContainer,
  CommitH1,
  HeaderPage,
  List,
  UserName,
} from "./style";
import Commits from "./types";

const CommitsList: React.FC = () => {
  const params = useParams();
  //poderia ter feito igual a pagina de repositories
  const { data: commits, isFetching } = useFetch<Commits[]>( //essa funcao quando apagina carrega
    `repos/${params.username}/${params.reponame}/commits`
  );

  return (
    <CommitContainer>
      <HeaderPage>Desafio React</HeaderPage>
      <UserName>{`${params.username}`}</UserName>
      <CommitH1>Commits</CommitH1>
      {/* limitar o numero de commites a ser mostrado com slice */}
      <ul>
        {isFetching && <p>Loading...</p>}
        {commits?.slice(0, 10)?.map((commit) => {
          return (
            <List key={commit.commit.message}>{commit.commit.message}</List>
          );
        })}
        {/* modificar a forma de retorno p/pagina anterior, esta carregando o meu usurio novamente */}
      </ul>
      <BackLink to={`/${params.username}`}>Voltar</BackLink>
    </CommitContainer>
  );
};

export default CommitsList;
