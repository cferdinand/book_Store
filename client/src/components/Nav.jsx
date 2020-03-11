import React from "react";
import Menu from "@material-ui/icons/Menu";
import Arrow from "@material-ui/icons/ExpandMore";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-bar">
        <div className="nav-browse">
          <span>Browse Category</span>
          <Arrow />
          <hr className="nav-rule" />
        </div>
        <div className="nav-logo-name">
          <p className="page-name">
            read<strong>books</strong>
          </p>
        </div>
        <div className="nav-users-menu">
          <div className="nav-user">
            <img src="./images/GitHub.jpeg" className="user-image small-icon" />
            <div className="user-notification"></div>
          </div>
          <hr className="nav-rule" />
          <div className="nav-menu">
            <Menu />
            <span>Menu</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
