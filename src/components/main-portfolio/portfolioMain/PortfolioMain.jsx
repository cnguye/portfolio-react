import React, {  } from "react";
import Intro from "../intro/Intro";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";

export default function PortfolioMain({ setNavMenu }) {
    return (
        <React.Fragment>
            <Intro />
            <AboutMe />
            <Projects />
        </React.Fragment>
    );
}
