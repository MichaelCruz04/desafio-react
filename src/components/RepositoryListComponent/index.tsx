import { Link } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";

type Repositories = {
  name: string;
  description: string;
};

function RepositoriesComponent() {
  const { data: repositories, isFetching } = useFetch<Repositories[]>(
    "users/michaelcruz04/repos"
  );
  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {repositories?.map((repo) => {
        return (
          <Link to={`/commits/${repo.name}`}>
            <li key={repo.name}>
              <strong>{repo.name}</strong>
              <p>{repo.description}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}
export default RepositoriesComponent;
