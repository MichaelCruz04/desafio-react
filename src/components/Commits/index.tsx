import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import { Button } from "../User/style";
import { CommitContainer, CommitH1 } from "./style";
import Commits from "./types";

function CommitsUser() {
  const params = useParams();
  const navigate = useNavigate();

  const { data: commits, isFetching } = useFetch<Commits[]>(
    `repos/${params.username}/${params.reponame}/commits`
  );

  return (
    <>
      <Button onClick={() => navigate(-1)}>Voltar</Button>
      <CommitH1>Commits</CommitH1>
      <ul>
        {isFetching && <p>Loading...</p>}
        {commits?.slice(0, 9)?.map((commit) => {
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
