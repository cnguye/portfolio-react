import React, {  } from "react";
import Intro from "../intro/Intro";
import Testimonials from "../testimonials/Testimonials";
import Projects from "../projects/Projects";

export default function PortfolioMain({ setNavMenu }) {
    return (
        <React.Fragment>
            <Intro />
            <Projects />
            <Testimonials />
        </React.Fragment>
    );
}
