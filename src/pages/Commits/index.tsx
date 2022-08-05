import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "../../hooks/useEffect";

type Commits = {
  commit: {
    message: string;
  };
};

export interface ICommitsPageProps {}

const CommitsPage: React.FC<ICommitsPageProps> = (props) => {
  const params = useParams();
  useEffect(() => {}, [params]);
  const { data: commits, isFetching } = useFetch<Commits[]>(
    `repos/michaelcruz04/${params.reponame}/commits`
  );

  return (
    <ul>
      {isFetching && <p>Loading...</p>}
      {commits?.map((commit) => {
        return (
          <li key={commit.commit.message}>
            {" "}
            <br />
            <strong>{commit.commit.message}</strong>
          </li>
        );
      })}
    </ul>
  );
};
export default CommitsPage;
