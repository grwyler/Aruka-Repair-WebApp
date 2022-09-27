import React from "react";
import { Link, NavLink } from "react-router-dom";
import logoJpg from "./images/logo.jpg";

const activeStye = {
  color: "#8b324d",
};

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/Aruka-Repair-WebApp">
              <img alt="Aruka Repair" src={logoJpg} />
            </Link>
          </li>
          <li>
            <NavLink activeStyle={activeStye} to="/about">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
