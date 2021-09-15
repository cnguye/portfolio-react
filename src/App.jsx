import NavBar from "./components/main-portfolio/navbar/NavBar";
import NavMenu from "./components/main-portfolio/navmenu/NavMenu";
import Contact from "./components/main-portfolio/contact/Contact";
import ScrollToTop from "./components/ScrollToTop";

import PortfolioMain from "./components/main-portfolio/portfolioMain/PortfolioMain";
import ProjectsMain from "./components/projects/ProjectsMain";

import { useState, useEffect } from "react";

import "./app.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    // This is probably bad practice...?
    const menuItems = {
        home: [
            {
                title: "Home",
                href: "intro",
            },
            {
                title: "About Me",
                href: "about-me",
            },
            {
                title: "Background",
                href: "background",
            },
            {
                title: "Projects",
                href: "projects",
            },
            {
                title: "Contact me",
                href: "contact-me",
            },
        ],
        projects: [
            {
                title: "Todo",
                href: "todo",
            },
            {
                title: "Calculator",
                href: "caculator",
            },
            {
                title: "Contact me",
                href: "contact-me",
            },
        ],
    };
    const [menuOpen, setMenuOpen] = useState(false);

    // is this bad practice...?
    const [navMenu, setNavMenu] = useState(() => {
        switch (window.location.pathname) {
            case "/":
                return menuItems.home;
            case "/projects":
                return menuItems.projects;
            default:
                return menuItems.home;
        }
    });
    return (
        <Router>
            <div className="app">
                <NavBar
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                    navMenu={navMenu}
                    setNavMenu={setNavMenu}
                    menuItems={menuItems}
                />
                <NavMenu
                    navMenu={navMenu}
                    menuOpen={menuOpen}
                    setMenuOpen={setMenuOpen}
                />
                <div
                    id="sections"
                    className={"sections " + (!menuOpen && "offsetNavBar")}
                    onClick={() => setMenuOpen(false)}
                >
                    <ScrollToTop />
                    <Route exact path="/">
                        <PortfolioMain setNavMenu={setNavMenu} />
                    </Route>

                    <Route exact path="/projects">
                        <ProjectsMain setNavMenu={setNavMenu} />
                    </Route>
                    <Contact />
                </div>
            </div>
        </Router>
    );
}

export default App;
