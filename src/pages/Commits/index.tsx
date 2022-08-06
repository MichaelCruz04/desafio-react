import React from "react";
import CommitsUser from "../../components/Commits";

export interface ICommitsPageProps {}

const CommitsPage: React.FC<ICommitsPageProps> = (props) => {
  return <CommitsUser />;
};

export default CommitsPage;
