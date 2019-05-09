import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from "../../assets/images/wildlogo2.png"
import "./index.css";
const Header = (props) => (
    <div className="container-header">
        <div className="container-logo">
          <p><img className="logo" src={logo1} alt="logo1"></img></p>
          <p className="wanted">anted</p>
        </div>
        <div className="div-burger">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className="nav-desktop">
            <li><NavLink activeClassName="active" exact to="/">Home</NavLink></li>
            <li><NavLink activeClassName="active" to="">Student</NavLink></li>
            <li><NavLink activeClassName="active" to="">Management</NavLink></li>
            <li><NavLink activeClassName="active" to=""></NavLink></li>
        </ul>
    </div>
);
export default Header;
