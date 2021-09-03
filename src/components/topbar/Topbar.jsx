import React from "react";
import "./topbar.scss";
import { Phone, Mail } from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#intro" className="logo">
                        christopher nguyen.
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
                <div className="right"></div>
            </div>
        </div>
    );
}
