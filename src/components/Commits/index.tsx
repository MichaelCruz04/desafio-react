import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import {
  BackLink,
  CommitContainer,
  CommitH1,
  HeaderPage,
  List,
  UserName,
} from "./style";
import Commits from "./types";

function CommitsUser() {
  const params = useParams();

  const { data: commits, isFetching } = useFetch<Commits[]>(
    `repos/${params.username}/${params.reponame}/commits`
  );

  return (
    <CommitContainer>
      <HeaderPage>Desafio React</HeaderPage>
      <UserName>{`${params.username}`}</UserName>
      <CommitH1>Commits</CommitH1>
      <ul>
        {isFetching && <p>Loading...</p>}
        {commits?.slice(0, 10)?.map((commit) => {
          return (
            <List key={commit.commit.message}>{commit.commit.message}</List>
          );
        })}
      </ul>
      <BackLink to={`/${params.username}`}>Voltar</BackLink>
    </CommitContainer>
  );
}

export default CommitsUser;
