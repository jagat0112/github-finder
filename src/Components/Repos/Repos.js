import React, { useContext } from "react";
import Repo from "./Repo";
import GithubContext from "../../context/github/githubContext";

function Repos() {
  const githubContext = useContext(GithubContext);
  return (
    <div>
      {githubContext.repos.map((repo) => (
        <Repo repo={repo} key={repo.id} />
      ))}
    </div>
  );
}

export default Repos;
