import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt="profile"
        className="round-img"
        style={{ width: "60px" }}
      />
      <h4>{login}</h4>
      <Link to={`/user/${login}`} className="btn btn-dark btn-sm">
        View Profile
      </Link>
    </div>
  );
};

export default UserItem;
