/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import { SidebarStyle } from '../Layout/style';
import Link from '../ActiveLink';
import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';


const Sidebar = () => {
    const { show, handleopen, setTheme, closeShow, theme } = useContext(
        AppContext
    );

    return (
        <SidebarStyle>
            <nav className="navbar navbar-expand-lg bg-light navbar-light">
                <div className="container">
                    <div
                        className={`collapse navbar-collapse  ${show && 'show'}`}
                        id="collapsibleNavbar"
                    >
                        <ul className="sidebar-ul">
                            {/* <li className="nav-item">
                                <Link
                                    href="#!"
                                    className="nav-link nav-svg"
                                    aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'
                                        } Mood`}
                                    onClick={setTheme}
                                >
                                    <Moon />
                                </Link>
                            </li> */}

                            <li className="nav-item hover__bottom">
                                <Link
                                    href="/"
                                    activeClassName="is-active"
                                    className="nav-link"
                                    id="cardHover"
                                    onClick={closeShow}
                                    aria-label="Go Home"
                                    title="Home"
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item hover__bottom">
                                <Link
                                    href="/about"
                                    activeClassName="is-active"
                                    className="nav-link"
                                    id="cardHover"
                                    onClick={closeShow}
                                    aria-label="Go To About Page"
                                    title="About"
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item hover__bottom">
                                <Link
                                    href="/projects"
                                    activeClassName="is-active"
                                    className="nav-link"
                                    id="cardHover"
                                    onClick={closeShow}
                                    aria-label="Go To Projects Page"
                                    title="Projects"
                                >
                                    Projects
                                </Link>
                            </li>
                            <li className="nav-item hover__bottom">
                                <Link
                                    href="/contact"
                                    activeClassName="is-active"
                                    className="nav-link"
                                    id="cardHover"
                                    onClick={closeShow}
                                    aria-label="Go To Contacts Page"
                                    title="Contact"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </SidebarStyle>
    );
};

export default Sidebar;