import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
const Navbar = ({ icon, title }) => {
  return (
    <Fragment>
      <nav className="navbar bg-dark">
        <Link to="/">
          {" "}
          <i className={icon} /> {title}
        </Link>
        <ul>
          <li>
            <Link to="/">Home </Link>
          </li>
          <li>
            <Link to="/about">About </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  title: "Github Finder",
  icon: "fab fa-github",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbar;
