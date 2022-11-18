import React, { useState } from "react";
import { Link } from "react-router-dom";
import UserApi from "../apis/UserApi";

const Header = (props) => {

  return (
    <header>
      <h1 className="display-2">Ciphers Website<p style={{textAlign:'right',fontSize:26}}>{props.currUser}</p></h1>

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="/">
          Home <span class="sr-only">(current)</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">

              <Link class="nav-link" to='/cyphers'>
                Play Ciphers
              </Link>

            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/login">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/register">
                Register User
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/progress">
                View Progress
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/history">
                History
              </Link>
            </li>
          </ul>
          {/* <span class="navbar-text">Navbar text with an inline element</span> */}
        </div>
      </nav>

      <div style={{ height: "1.5rem" }}></div>
    </header>
  );
};

export default Header;
