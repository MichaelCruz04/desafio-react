import { useFetch } from "../../hooks/useFetch";
import Repositories from "./types";
import { CommitsLink, List, Title } from "./style";

export interface IRepositoriesList {
  user: string;
}

const RepositoriesList: React.FC<IRepositoriesList> = ({ user }) => {
  //esse propiedade é preenchida na construção do objeto, dentro do componente user
  const userUrl = `users/${user}/repos`;
  const { data: repositories, isFetching } = useFetch<Repositories[]>(userUrl); //essa funcao é chamada quando carrega o componete

  return (
    <>
      <Title>Repositorios</Title>
      <ul>
        {isFetching && <p>Loading...</p>}
        {repositories?.map((repo) => {
          return (
            // toda tag li no react precisa de um valor unico p/ propriedade key
            <List key={repo.id}>
              <CommitsLink to={`/commits/${user}/${repo.name}`}>
                {repo.name}
              </CommitsLink>
            </List>
          );
        })}
      </ul>
    </>
  );
};

export default RepositoriesList;
