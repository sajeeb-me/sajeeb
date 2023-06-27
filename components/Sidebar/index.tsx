/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import { SidebarStyle } from '../Layout/style';
import { SidebarSocialMedia } from '../Layout/style';
import Link from '../ActiveLink';
import AppContext from '../Utils/context';

/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';
import {
    IconRight,
    Twitter,
    Facebook,
    Linkedin,
    Github,
    Instagram,
    Dribble,
} from '../Icons';
import styled from 'styled-components';


const Sidebar = () => {
    const { show, handleopen, setTheme, closeShow, theme } = useContext(
        AppContext
    );

    return (
        <SidebarComponent>
            <SidebarSocialMedia>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sdshuvo98"
                    aria-label="Go To Sajeeb Das Shuvo Github Page"
                    title="Github Page"
                >
                    <Github />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://linkedin.com/in/sdshuvo"
                    aria-label="Go To Sajeeb Das Shuvo Linkedin Page"
                    title="Linkedin Page"
                >
                    <Linkedin />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://twitter.com/sdshuvo98"
                    aria-label="Go To Sajeeb Das Shuvo Twitter Page"
                    title="Twitter Page"
                >
                    <Twitter />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/sdshuvo9898"
                    aria-label="Go To Sajeeb Das Shuvo Facebook Page"
                    title="Facebook Page"
                >
                    <Facebook />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://instagram.com/sdshuvo9898"
                    aria-label="Go To Sajeeb Das Shuvo Instagram Page"
                    title="Instagram Page"
                >
                    <Instagram />
                </a>
                {/* <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://dribbble.com/codewonders"
              aria-label="Go To Sajeeb Das Shuvo Dribble Page"
              title="Dribbble Page"
            >
              <Dribble />
            </a> */}
            </SidebarSocialMedia>
            <SidebarStyle>
                <nav className="navbar-expand-lg">
                    <div className="container sidebar-container">
                        <Link
                            href="/"
                            className="navbar-brand"
                            aria-label="Sajeeb Das Home"
                            tabIndex={show ? -1 : undefined}
                        >
                            <Logo />
                        </Link>

                        <div
                            className={`collapse navbar-collapse  ${show && 'show'}`}
                            id="collapsibleNavbar"
                        >
                            <ul className="sidebar-ul">
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
                                {/* <li className="nav-item hover__bottom">
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
                                </li> */}
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
                                <li className="nav-item hover__bottom">
                                    <Link
                                        href="/resume"
                                        activeClassName="is-active"
                                        className="nav-link"
                                        id="cardHover"
                                        onClick={closeShow}
                                        aria-label="Go To Contacts Page"
                                        title="Contact"
                                    >
                                        My CV
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <Link
                            href="#!"
                            className="nav-link nav-svg"
                            aria-label={`Turn On ${theme === false ? 'Light' : 'Dark'
                                } Mood`}
                            onClick={setTheme}
                        >
                            <Moon />
                        </Link>
                    </div>
                </nav>
            </SidebarStyle>
        </SidebarComponent>
    );
};

const SidebarComponent = styled.div`
display: flex;
position: sticky;
top: 0;

@media(max-width : 991px ) {
    display:none;
  }
`

export default Sidebar;