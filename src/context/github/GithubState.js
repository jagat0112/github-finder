import React, { useReducer } from "react";
import axios from "axios";
import GithubReducer from "./GithubReducer";
import githubContext from "./githubContext";
import {
  GET_REPOS,
  GET_USER,
  ON_SEARCH,
  CLEAR_ALL,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  let githubClientId;
  let githubSecret;

  if (process.env.NODE_ENV !== "prodcution") {
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
  } else {
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubSecret = process.env.GITHUB_CLIENT_SECRET;
  }

  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  //   Search Users
  const onSearch = async (user) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${user}&client_id=${githubClientId}&client_secret=${githubSecret}`
    );
    dispatch({ type: ON_SEARCH, payload: res.data.items });
  };

  //   Get User
  const getUser = async (username) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${username}?client_id=${githubClientId}&client_secret=${githubSecret}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  //   Get Repos
  const getRepos = async (username) => {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&&client_id=${githubClientId}&client_secret=${githubSecret}`
    );
    dispatch({ type: GET_REPOS, payload: res.data });
  };

  //   Set Loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  // Clear All
  const clearAll = () => {
    dispatch({ type: CLEAR_ALL, payload: [] });
  };

  return (
    <githubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        onSearch,
        getUser,
        getRepos,
        clearAll,
        setLoading,
      }}
    >
      {props.children}
    </githubContext.Provider>
  );
};

export default GithubState;
