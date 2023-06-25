/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { arrayRandomItem } from 'codewonders-helpers';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

import { getTransitions } from '../components/Utils';

const Home = () => {
  const [color] = useState(arrayRandomItem(['#37609c', '#34c759', '#5856d6']));

  return (
    <Layout>
      <PageSection color={color}>
        <PageWrapper>
          <article>
            <motion.h1
              data-text="I'm Sajeeb Das Shuvo"
              className="intro__text"
              {...getTransitions(0.1)}
            >
              <mark className="mark">I&apos;m Sajeeb Das Shuvo</mark>
            </motion.h1>
            <motion.p {...getTransitions(0.3)}>
              I'm your friendly neighborhood <b>Full Stack Engineer</b>, armed with a keyboard and a passion for crafting awesome web experiences. From React Native to Next.js and TypeScript, I've got the skills to make your digital dreams come true.
            </motion.p>

            <motion.p {...getTransitions(0.5)}>
              I take a no-nonsense approach when it comes to building robust and scalable applications. But don't worry, my code is much funnier than my jokes - and that's saying something! I believe in bringing a touch of humor to my work while maintaining the utmost professionalism.
            </motion.p>

            <motion.p {...getTransitions(0.7)}>
              When I'm not knee-deep in code, you might catch me busting a move to the beat of pop music and jazz. It keeps my creative juices flowing and ensures I'm always in sync with the latest trends. Ready to bring your project to life? Let's join forces and create some tech magic that'll leave everyone grinning from ear to ear. Get in touch, and let the fun begin!
            </motion.p>
          </article>

          <br />

          <motion.div {...getTransitions(0.9)}>
            <FooterLink goto="/projects">See My Latest Project</FooterLink>
          </motion.div>

          {/* <motion.div {...getTransitions(0.9)}>
            <FooterLink goto="/about">See More About Me</FooterLink>
          </motion.div> */}

          <br />
        </PageWrapper>
      </PageSection>
    </Layout>
  );
};

const PageSection = styled.div`
  min-height: calc(100vh - 39vh);
  display: flex;
  align-items: center;
  justify-content: center;
  .intro__text {
    font-size: 2.275em;
    font-weight: 500;
    margin: 6rem 0rem 1.5rem;
    position: relative;
    text-transform: uppercase;
    letter-spacing: 9.9px;

    &::before,
    &::after {
      content: attr(data-text);
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 #00ffff;
      animation: noise-anim-2 15s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 3px 0 #ff69b4;
      animation: noise-anim 2s infinite linear alternate-reverse;
    }

    @keyframes noise-anim {
      0% {
        clip-path: inset(29% 0 25% 0);
      }
      5% {
        clip-path: inset(9% 0 38% 0);
      }
      10% {
        clip-path: inset(96% 0 1% 0);
      }
      15% {
        clip-path: inset(75% 0 23% 0);
      }
      20% {
        clip-path: inset(46% 0 50% 0);
      }
      25% {
        clip-path: inset(3% 0 46% 0);
      }
      30% {
        clip-path: inset(82% 0 2% 0);
      }
      35% {
        clip-path: inset(88% 0 1% 0);
      }
      40% {
        clip-path: inset(91% 0 8% 0);
      }
      45% {
        clip-path: inset(96% 0 2% 0);
      }
      50% {
        clip-path: inset(59% 0 38% 0);
      }
      55% {
        clip-path: inset(41% 0 53% 0);
      }
      60% {
        clip-path: inset(21% 0 47% 0);
      }
      65% {
        clip-path: inset(89% 0 4% 0);
      }
      70% {
        clip-path: inset(1% 0 95% 0);
      }
      75% {
        clip-path: inset(86% 0 4% 0);
      }
      80% {
        clip-path: inset(95% 0 5% 0);
      }
      85% {
        clip-path: inset(54% 0 36% 0);
      }
      90% {
        clip-path: inset(70% 0 27% 0);
      }
      95% {
        clip-path: inset(6% 0 16% 0);
      }
      100% {
        clip-path: inset(95% 0 2% 0);
      }
    }
    @keyframes noise-anim-2 {
      0% {
        clip-path: inset(76% 0 21% 0);
      }
      5% {
        clip-path: inset(54% 0 7% 0);
      }
      10% {
        clip-path: inset(55% 0 29% 0);
      }
      15% {
        clip-path: inset(89% 0 3% 0);
      }
      20% {
        clip-path: inset(33% 0 40% 0);
      }
      25% {
        clip-path: inset(17% 0 56% 0);
      }
      30% {
        clip-path: inset(37% 0 51% 0);
      }
      35% {
        clip-path: inset(38% 0 19% 0);
      }
      40% {
        clip-path: inset(93% 0 4% 0);
      }
      45% {
        clip-path: inset(44% 0 14% 0);
      }
      50% {
        clip-path: inset(53% 0 26% 0);
      }
      55% {
        clip-path: inset(67% 0 11% 0);
      }
      60% {
        clip-path: inset(85% 0 13% 0);
      }
      65% {
        clip-path: inset(27% 0 37% 0);
      }
      70% {
        clip-path: inset(87% 0 4% 0);
      }
      75% {
        clip-path: inset(10% 0 8% 0);
      }
      80% {
        clip-path: inset(51% 0 27% 0);
      }
      85% {
        clip-path: inset(10% 0 60% 0);
      }
      90% {
        clip-path: inset(83% 0 3% 0);
      }
      95% {
        clip-path: inset(23% 0 55% 0);
      }
      100% {
        clip-path: inset(1% 0 81% 0);
      }
    }
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    line-height: 2.3;
    font-weight: 400;
    color: var(--article-color) !important;

    a,button {
      font-size: calc(var(--font-sm) + 0.9px);
      line-height: 20px;
      position: relative;
      border: none;
      font-weight: 800;
      background: transparent;
      text-transform: uppercase;
    }
  }
  /* button {
    font-size: var(--font-sm);
    background: var(--button-index);
    border: none;
    border-radius: 5px;
    transition: all 0.4s ease;
    padding: 1px 12px;
    &:hover {
      background: ${(props) => props.color};
      color: #fff;
    }
  } */
  @media (max-width: 585px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (max-width: 989px) {
    margin: 3rem 0;
    display: block;
  }
  @media (max-width: 220px) {
    margin: 3rem 0;
    display: block;
    min-height: 100%;
  }
  @media (prefers-reduced-motion: reduce) {
    /* Stop the animation */

    .intro__text {
      animation: none;

      &::before,
      &::after {
        content: none;
      }
    }
  }
`;
export default Home;
