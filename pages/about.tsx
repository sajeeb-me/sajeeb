/* eslint-disable jsx-a11y/accessible-emoji */


import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product, Article } from '../components/Icons';

const About = () => {
  return (
    <Layout title="About Me">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my educational background section"
        >
          <h1 className="intro__text">About Me.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  href={`https://drive.google.com/file/d/1Zo4-V2unrVVEsQFGKbyeT-wmRLca5ZH0/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to CV Page"
                >
                  Key Skills{' '}
                  <small>
                    <Date />
                  </small>
                </a>
                <a
                  href={`https://drive.google.com/file/d/1Zo4-V2unrVVEsQFGKbyeT-wmRLca5ZH0/view?usp=sharing`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to CV Page"
                  className="float-right"
                >
                  View my CV
                </a>
                <div>
                  <p>
                    <b>Language : </b>JavaScript, Python, C++, C
                  </p>
                  <p>
                    <b>Framework : </b>TypeScript, NextJs, NodeJs, ExpressJs, React, React Native, Shopify, Bootstrap, Tailwind CSS
                  </p>
                  <p>
                    <b>Database : </b>MongoDB, MySQL
                  </p>
                  <p>
                    <b>DevOps & Tools : </b>Docker, CI/CD, AWS, Git, Chrome Dev Tools, Scrum, Agile
                  </p>
                  <p>
                    <b>UX & Design : </b>User research, Information architecture, UI design, Graphic Design, Figma, InDesign
                  </p>
                </div>
              </li>

              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles"
                  id="cardHover"
                >
                  My Articles{' '}
                  <small>
                    <Article />
                  </small>
                </Link>
                <Link
                  href="/articles"
                  aria-label="Check my articles"
                  id="cardHover"
                  className="float-right"
                >
                  Read Articles
                </Link>
                <p>
                  As a full stack web engineer, I regularly share technical articles covering web development and programming topics. These pieces showcase my ability to clearly explain complex concepts, providing actionable insights based on hands-on experience. Article topics range from JavaScript frameworks and CSS techniques to security best practices and career advice in the tech industry. The goal is to synthesize what I learn through continued self-education into helpful tips for others. The articles published here reflect a sample of my writing.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  href="https://github.com/sdshuvo98"
                >
                  Engineering{' '}
                  <small>
                    <Github />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Github Link"
                  id="cardHover"
                  href="https://github.com/sdshuvo98"
                  className="float-right"
                >
                  View Github
                </a>
                <p>
                  The importance of making a good first impression cannot be overstated, and a well-designed website is the key to maximising it. An exceptional website goes beyond simple looks, expanding its influence to incorporate smooth functionality and user-friendly navigation. I have the rare ability to handle complex technological issues while creating websites that exude elegance and visual charm, drawing on my experience as an experienced programmer.
                  Furthermore, every element of your website will be flawlessly tuned thanks to my in-depth understanding of acknowledged technical standards and my competence in contemporary construction techniques.
                </p>
              </li>

              <li>
                <Link href="/projects" aria-label="Open Products Page">
                  Product{' '}
                  <small>
                    <Product />
                  </small>
                </Link>
                <Link
                  href="/projects"
                  aria-label="Open Products Page"
                  id="cardHover"
                  className="float-right"
                >
                  View Products
                </Link>
                <p>
                  Although I may not match the traditional definition of a product manager, I am equipped to drive a product's growth from its origin thanks to my wide skill set in research, product design, and product coordination. I have the aptitude to uphold the product's vision throughout its whole lifecycle because I am a superb analytical thinker who can successfully bridge the technical and product aspects. I can successfully travel the journey from 0 to 1, assuring the product's success at every level, by utilising my knowledge.
                </p>
              </li>

              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  href="https://dribbble.com/sdshuvo9898"
                >
                  Design{' '}
                  <small>
                    <Dribble />
                  </small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Design Link"
                  id="cardHover"
                  href="https://dribbble.com/sdshuvo9898"
                  className="float-right"
                >
                  View Dribbble
                </a>
                <p>
                  My great visual skills allow me to flourish as a presenter, effectively communicating design concepts to stakeholders and design teams, despite the fact that I don't fit the usual designer stereotype. I have an exceptional capacity for conceptualization, which enables me to imagine and produce beautiful masterpieces. Additionally, I have a lot of experience optimising stylesheets and creating user interfaces that flow naturally.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
          Lets Continue To Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
