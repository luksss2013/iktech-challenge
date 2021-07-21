import React from "react";
import "./top-menu.css";
import { Link } from "react-router-dom";

const TopMenu: React.FC = () => (
  <div className="top-menu">
    <Link to="/search" className="link">
      <a>Search Hero</a>
    </Link>

    <Link to="/history" className="link">
      <a>History</a>
    </Link>
  </div>
);

export default TopMenu;
