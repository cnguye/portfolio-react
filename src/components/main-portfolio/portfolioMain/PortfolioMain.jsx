import React, {  } from "react";
import Intro from "../intro/Intro";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";
import Background from "../background/Background";

export default function PortfolioMain({ setNavMenu }) {
    return (
        <React.Fragment>
            <Intro />
            <AboutMe />
            <Background />
            <Projects />
        </React.Fragment>
    );
}
