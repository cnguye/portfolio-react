import "./navmenu.scss";

export default function NavMenu({ navMenu, menuOpen, setMenuOpen }) {
    return (
        <div
            className={"nav__menu  " + (menuOpen && "active")}
            onClick={() => setMenuOpen(false)}
        >
            <ul className="nav__list">
                {navMenu.map((navItem) => (
                    <li
                        className="nav__item"
                        key={"navItem__key--" + navItem.href}
                    >
                        <a className="nav__link" href={"#" + navItem.href}>
                            {navItem.title}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
}
