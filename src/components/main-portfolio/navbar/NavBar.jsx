import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import "./navbar.scss";
import { Phone, Mail } from "@material-ui/icons";

function NavBar({ menuOpen, setMenuOpen, history, setNavMenu, menuItems }) {
    const [logoText, setLogoText] = useState("christopher nguyen.");
    const logoTextHandler = () => {
        if (logoText === "christopher nguyen.") setLogoText("beam me up");
        else setLogoText("christopher nguyen.");
    };
    useEffect(() => {
        history.listen(() => {
            switch (window.location.pathname) {
                case "/":
                    setNavMenu(menuItems.home);
                    break;
                case "/projects":
                    setNavMenu(menuItems.projects);
                    break;
                default:
                    setNavMenu(menuItems.home);
            }
        });
    }, [history, menuItems, setNavMenu]);

    return (
        <div className={"nav " + (menuOpen && "active")}>
            <div className="nav__wrapper">
                <div className="nav__left">
                    <div className="logo--img">
                        <a href="#intro">
                            <img
                                src={
                                    process.env.PUBLIC_URL +
                                    "/img/ceen-square.png"
                                }
                                alt="ceen"
                            />
                        </a>
                    </div>
                    <a
                        href="#intro"
                        className="logo--text"
                        onMouseEnter={logoTextHandler}
                        onMouseOut={logoTextHandler}
                    >
                        {logoText}
                    </a>
                    <div className="itemContainer__body">
                        <div className="itemContainer__items">
                            <Phone className="itemContainer--item itemContainer--icon" />
                            <span className="itemContainer--item itemContainer--text">
                                626.863.5453
                            </span>
                        </div>
                        <div className="itemContainer__items">
                            <Mail className="itemContainer--item itemContainer--icon" />
                            <span className="itemContainer--item itemContainer--text">
                                ngyn.christopher@gmail.com
                            </span>
                        </div>
                    </div>
                </div>
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="nav__right "
                >
                    <span className="hamburger"></span>
                </button>
            </div>
            <div className="nav__slider"></div>
        </div>
    );
}

export default withRouter(NavBar);
