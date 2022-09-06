import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../../hooks/useEffect";
import { Button } from "../HomeComponent/style";
import { CommitContainer, CommitH1 } from "./style";

function CommitsComponent() {
  const params = useParams();
  const navigate = useNavigate();
  
  const { data: commits, isFetching } = useFetch<Commits[]>(
    `repos/michaelcruz04/${params.reponame}/commits`
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
};

export default CommitsComponent;
