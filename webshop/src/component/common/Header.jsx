import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="container row d-flex align-items-center mx-auto">
          <div className="col-1">
            <img src="" alt="logo" style={{ maxHeight: "40px" }} />
          </div>
          <div className="col-7"></div>
          <div className="col-4 row">
            <Link to="/cart" className="col d-flex align-items-center">
              <i class="fa-solid fa-cart-shopping"></i> Cart
            </Link>
            <Link to="/login" className="col d-flex align-items-center">
              <i class="fa-solid fa-lock"></i> Login
            </Link>
            <Link to="/register" className="col d-flex align-items-center">
              <i class="fa-solid fa-right-to-bracket"></i> Register
            </Link>
            <Link to="/profile" className="col d-flex align-items-center">
              <i class="fa-solid fa-lock"></i> Profile
            </Link>
            <Link to="/logout" className="col d-flex align-items-center">
              <i class="fa-solid fa-right-from-bracket"></i> Logout
            </Link>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                <li className="nav-item p-2">
                  <Link to="/">Home</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/product">Product</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/about">About us</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/policy">Policy</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/warranty">Warranty</Link>
                </li>
                <li className="nav-item p-2">
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
