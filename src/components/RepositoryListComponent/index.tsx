import { Link, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";

function RepositoriesComponent() {
  const params = useParams();
  const userUrl = params.user ? `users/${params.user}/repos` : "users/michaelcruz04/repos";
  const { data: repositories, isFetching } = useFetch<Repositories[]>(userUrl);
  
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
