import "./navmenu.scss";

export default function NavMenu({ menuOpen, setMenuOpen }) {
    return (
        <div
            className={"nav__menu  " + (menuOpen && "active")}
            onClick={() => setMenuOpen(false)}
        >
            <ul className="nav__list">
                <li className="nav__item">
                    <a className="nav__link" href="#intro">
                        Intro
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#projects">
                        Projects
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#testimonials">
                        Testimonials
                    </a>
                </li>
                <li className="nav__item">
                    <a className="nav__link" href="#contact">
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
}
