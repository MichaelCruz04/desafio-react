import { useParams, Link } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import { CommitContainer, CommitH1 } from "./style";
import Commits from "./types";

function CommitsUser() {
  const params = useParams();

  const { data: commits, isFetching } = useFetch<Commits[]>(
    `repos/${params.username}/${params.reponame}/commits`
  );

  return (
    <>
      <Link to={`/${params.username}`}>Voltar</Link>
      <CommitH1>Commits</CommitH1>
      <ul>
        {isFetching && <p>Loading...</p>}
        {commits?.slice(0, 10)?.map((commit) => {
          return (
            <li key={commit.commit.message}>
              <CommitContainer>{commit.commit.message}</CommitContainer>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default CommitsUser;
