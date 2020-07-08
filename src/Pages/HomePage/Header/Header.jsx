import React from "react";

import logo from "../../../images/logo.png";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
    return (
        <div className="header-home">
            <nav
                className="navbar navbar-expand-lg"
                style={{ background: "transparent" }}
            >
                <div className="container">
                    <a className="navbar-brand" href="/">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <i
                            style={{
                                color: "#e8bb77",
                                fontSize: "40px",
                            }}
                            className="fa fa-bars"
                            aria-hidden="true"
                        ></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    About Us
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    Products
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    The Garden
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    Blogs
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link yes-hover"
                                    activeClassName="selected"
                                >
                                    Contact Us
                                </NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink
                                    to="/"
                                    className="nav-link no-hover"
                                    activeClassName="selected"
                                >
                                    <i
                                        style={{
                                            color: "#e8bb77",
                                            fontSize: "25px",
                                        }}
                                        className="fa fa-bars hide-icon"
                                        aria-hidden="true"
                                    ></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
