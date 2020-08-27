import React from "react";
import { NavLink } from "react-router-dom";

const Navigation: React.FC = () => {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <NavLink className="navbar-brand" to="/">
        TodoList with TypeScript
      </NavLink>
      <ul className="navbar-nav navbar-expand">
        <li className="nav-item active mr-4">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/about">
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
