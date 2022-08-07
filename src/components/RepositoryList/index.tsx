import { useFetch } from "../../hooks/useEffect";
import Repositories from "./types";
import { CommitsLink, List, Title } from "./style";

export interface IRepositoriesList {
  user: string;
}

const RepositoriesList: React.FC<IRepositoriesList> = ({ user }) => {
  const userUrl = `users/${user}/repos`;
  const { data: repositories, isFetching } = useFetch<Repositories[]>(userUrl);

  return (
    <>
      <Title>Repositorios</Title>
      <ul>
        {isFetching && <p>Loading...</p>}
        {repositories?.map((repo) => {
          return (
            <List key={repo.id}>
              <CommitsLink to={`/commits/${user}/${repo.name}`}>
                <Title>{repo.name}</Title>
              </CommitsLink>
            </List>
          );
        })}
      </ul>
    </>
  );
};

export default RepositoriesList;
