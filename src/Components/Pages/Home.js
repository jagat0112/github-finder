import React, { Fragment } from "react";
import Search from "../Users/Search";
import Users from "../Users/Users";

function Home() {
  return (
    <Fragment>
      <Search />
      <Users />
    </Fragment>
  );
}

export default Home;
