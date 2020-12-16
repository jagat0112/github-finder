import React, { Fragment, useEffect, useContext } from "react";
import Spinner from "../Layout/Spinner";
import Repos from "../Repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = ({ loading, match }) => {
  const githubContext = useContext(GithubContext);

  useEffect(() => {
    githubContext.getUser(match.params.login);
    githubContext.getRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    login,
    avatar_url,
    html_url,
    name,
    company,
    location,
    blog,
    hireable,
    bio,
    public_repos,
    public_gists,
    followers,
    following,
  } = githubContext.user;

  if (loading) return <Spinner />;

  return (
    <Fragment>
      <div>
        Hireable:{" "}
        {hireable ? (
          <i className="fa fa-check fa-success" />
        ) : (
          <i className="fa fa-times" />
        )}
      </div>
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            className="round-img"
            style={{ width: "150px" }}
            alt=""
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio && (
            <Fragment>
              <h3>Bio</h3>
              <p>{bio}</p>
            </Fragment>
          )}
          <a href={html_url} className="btn btn-dark btn-sm my-1">
            View Github Profile
          </a>
          <ul>
            <li>
              {" "}
              <strong>Username: </strong>
              {login}
            </li>
            {company && (
              <li>
                {" "}
                <strong>Company: </strong>
                {company}
              </li>
            )}
            {blog && (
              <li>
                {" "}
                <strong>Website: </strong>
                {blog}
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-light">Followers: {followers}</div>
        <div className="badge badge-primary">Following: {following}</div>
        <div className="badge badge-dark">Public Repos: {public_repos}</div>
        <div className="badge badge-success">Public Gists: {public_gists}</div>
      </div>
      <Repos />
    </Fragment>
  );
};

export default User;
