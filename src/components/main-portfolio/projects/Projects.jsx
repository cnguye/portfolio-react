import React from "react";
import Calculator from "../../projects/calculator/Calculator";
// import ProjectsMain from "../../projects/ProjectsMain";
import { Link } from "react-router-dom";


import "./projects.scss";

export default function Projects() {
    // let projectsList = ['Calculator', 'Swipeable News', 'Home'];
    return (
        <div id="projects" className="Projects">
            hi projects
            <Link to="/projects">Projects</Link>
            <Calculator />
        </div>
    );
}
