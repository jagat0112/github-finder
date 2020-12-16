import React from "react";
import PropTypes from "prop-types";

function Repo({ repo }) {
  return (
    <div className="card">
      <ul>
        <li>
          <a href={repo.html_url}>{repo.name}</a>
        </li>
      </ul>
    </div>
  );
}

Repo.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default Repo;
