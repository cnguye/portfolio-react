import React from "react";

import { ExpandMore } from "@material-ui/icons";
import "./background.scss";
import WhoIAm from "./WhoIAm";
import MoreAboutMe from "./MoreAboutMe";

export default function Background() {
    return (
        <div id="background" className="section section__background">
            <div className="section__half section__whoIAm">
                <WhoIAm />
            </div>
            <div className="section__half section__moreAboutMe">
                <MoreAboutMe />
            </div>

            <div className="wrapper__link--container">
                <a href="#projects" className="right__wrapper--link">
                    <ExpandMore className="wrapper--arrow" fontSize={"large"} />
                </a>
            </div>
        </div>
    );
}
