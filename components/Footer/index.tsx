
import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

/* -------------------------- Image Dependecy -------------------------- */

import {
  IconRight,
  Twitter,
  Facebook,
  Linkedin,
  Github,
  Instagram,
  Dribble,
} from '../Icons';

/* ---------------------------- Style Dependency ---------------------------- */
import { SocialMedia } from '../Layout/style';

interface IFooterLink {
  children: string | React.ReactNode;
  goto?: string;
}

const FooterLink: React.FC<IFooterLink &
  React.AnchorHTMLAttributes<HTMLParagraphElement>> = ({
    children,
    goto,
    ...rest
  }) => {
    return (
      <>
        <FooterStyle>
          <Link href={`${goto}`}>
            <p {...rest}>
              {children}
              <IconRight />
            </p>
          </Link>
        </FooterStyle>
        <SocialMedia>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/sajeeb-me"
            aria-label="Go To Sajeeb Das Shuvo Github Page"
            title="Github Page"
          >
            <Github />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/sajeeb-me"
            aria-label="Go To Sajeeb Das Shuvo Linkedin Page"
            title="Linkedin Page"
          >
            <Linkedin />
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://x.com/me_sajeeb"
            aria-label="Go To Sajeeb Das Shuvo Twitter Page"
            title="Twitter Page"
          >
            <Twitter />
          </a>
          {/* <a
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
            href="https://instagram.com/sajeeb_me"
            aria-label="Go To Sajeeb Das Shuvo Instagram Page"
            title="Instagram Page"
          >
            <Instagram />
          </a> */}
        </SocialMedia>
      </>
    );
  };

const FooterStyle = styled.footer`
  p {
    font-size: var(--font-sm);
    transition: all 1s ease;

    svg {
      margin-left: 1rem;
      animation-name: forward;
      animation-duration: 0.5s;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }

    &:hover {
      @keyframes forward {
        from {
          margin-left: 1rem;
        }
        to {
          margin-left: 2rem;
        }
      }
    }
  }
`;

export default FooterLink;
