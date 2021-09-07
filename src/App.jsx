import NavBar from "./components/main-portfolio/navbar/NavBar";
import NavMenu from "./components/main-portfolio/navmenu/NavMenu";
import Contact from "./components/main-portfolio/contact/Contact";

import PortfolioMain from "./components/main-portfolio/portfolioMain/PortfolioMain";
import ProjectsMain from "./components/projects/ProjectsMain";

import { useState } from "react";
import "./app.scss";

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <Router>
            <div className="app">
                <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <NavMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                <div className="sections" onClick={()=>setMenuOpen(false)}>
                    <Route exact path="/" component={PortfolioMain} />
                    <Route exact path="/projects" component={ProjectsMain} />
                    <Contact />
                </div>
            </div>
        </Router>
    );
}

export default App;
