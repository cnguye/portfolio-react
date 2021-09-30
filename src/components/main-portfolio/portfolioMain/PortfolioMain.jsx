import React from "react";
import Intro from "../intro/Intro";
import AboutMe from "../aboutme/AboutMe";
import Projects from "../projects/Projects";
import Background from "../background/Background";

export default function PortfolioMain({
    setNavMenu,
    activeProject,
    setActiveProject,
    projectDescHovered,
    setProjectDescHovered,
    projectClicked,
    setProjectClicked,
    setMenuOpen,
    menuOpen,
}) {
    return (
        <React.Fragment>
            {/* <Intro />
            <AboutMe />
            <Background /> */}
            <Projects
                activeProject={activeProject}
                setActiveProject={setActiveProject}
                projectDescHovered={projectDescHovered}
                setProjectDescHovered={setProjectDescHovered}
                projectClicked={projectClicked}
                setProjectClicked={setProjectClicked}
                setMenuOpen={setMenuOpen}
                menuOpen={menuOpen}
            />
        </React.Fragment>
    );
}
