import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import Repositories from "./types";
import { CommitsLink, List, Title } from "./style";

function RepositoriesList() {
  const params = useParams();
  const usr = params.user ? params.user : "michaelcruz04";
  const userUrl = params.user
    ? `users/${params.user}/repos`
    : "users/michaelcruz04/repos";
  const { data: repositories, isFetching } = useFetch<Repositories[]>(userUrl);

  return (
    <>
      <Title>Repositorios</Title>
      <ul>
        {isFetching && <p>Loading...</p>}
        {repositories?.map((repo) => {
          return (
            <CommitsLink to={`/commits/${usr}/${repo.name}`}>
              <List key={repo.name}>
                <Title>{repo.name}</Title>
              </List>
            </CommitsLink>
          );
        })}
      </ul>
    </>
  );
}

export default RepositoriesList;
