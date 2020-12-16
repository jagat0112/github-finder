import React, { useState, useContext } from "react";
import GithubContext from "../../context/github/githubContext";
import AlertContext from "../../context/alert/alertContext";

const Search = () => {
  const [text, setText] = useState("");
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      alertContext.showAlert("Please enter the username", "danger");
    }
    githubContext.onSearch(text);
    setText("");
  };

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input
          name="text"
          placeholder="Search User..."
          type="text"
          value={text}
          onChange={onChange}
        ></input>
        <input type="submit" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-block btn-light"
          onClick={githubContext.clearAll}
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default Search;
