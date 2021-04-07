import React, { Component } from "react";
import { FaTimes, FaBars, FaCartArrowDown } from "react-icons/fa";

import { Link } from "react-router-dom";
import { DataContext } from "./Context";
import "./css/header.css";
class Header extends Component {
  static contextType=DataContext;
  constructor() {
    super();
    this.state = {
      isToggleMenu: false
    };
    this.onToggle = this.onToggle.bind(this);
    this.hideMenu = this.hideMenu.bind(this);
  }
  onToggle() {
    this.setState(state => ({ isToggleMenu: !state.isToggleMenu }));
    console.log(this.state.isToggleMenu);
  }
  hideMenu() {
    this.setState({ isToggleMenu: false });
  }
  render() {
    const {cart}=this.context;
    return (
      <header>
        <div className="menu" onClick={this.onToggle}>
          <FaBars />
        </div>
        <div className="logo">
          <h1>
            <Link to="/">NIKE</Link>
          </h1>
        </div>
        <nav>
          <ul className={this.state.isToggleMenu === true ? "toggle" : ""}>
            <li>
              {" "}
              <Link to="/" exact>
                Home
              </Link>
            </li>
            <li>
              <Link to="/product">Products</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login / Register</Link>
            </li>
            <li className="close" onClick={this.hideMenu}>
              {" "}
              <FaTimes />
            </li>
          </ul>
        </nav>
        <nav className="nav-cart">
          <span className="nav-cart-quatity">{cart.length}</span>
          <Link to="/cart">
            {" "}
            <FaCartArrowDown />
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
