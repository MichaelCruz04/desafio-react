import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import CommitsPage from "../pages/Commits";

const SiteRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:user" element={<Home />} />
      <Route path="commits/:username/:reponame" element={<CommitsPage />} />
    </Routes>
  );
};
export default SiteRoutes;
