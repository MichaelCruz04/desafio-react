import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/Home";
import CommitsPage from "../pages/Commits";

export interface IApplicationProps {}

const SiteRoutes: React.FC<IApplicationProps> = (props) => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:user" element={<HomePage />} />
      <Route path="commits/:username/:reponame" element={<CommitsPage />} />
    </Routes>
  );
};
export default SiteRoutes;
