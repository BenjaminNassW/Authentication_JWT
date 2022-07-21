import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext } from "react";

export const Navbar = () => {
  const navigate = useNavigate();
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container">
        <Link to="/">
          <span className="navbar-brand mb-0 h1">React Boilerplate</span>
        </Link>
        <div className="ml-auto">
          <button
            onClick={() => {
              actions.logout(navigate);
            }}
            className="btn btn-primary"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};
