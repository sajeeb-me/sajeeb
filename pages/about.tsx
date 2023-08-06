/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
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
                    <b>Client-Side : </b>React Native, NextJs, TypeScript, React, Redux, JavaScript, Sass, Shopify, Bootstrap, Tailwind CSS, CSS3, HTML5
                  </p>
                  <p>
                    <b>Server-Side : </b>NodeJs, ExpressJs, Python, Mongoose, MongoDB, MySQL, Strapi, Liquid
                  </p>
                  <p>
                    <b>Development & Operations : </b>Git, Chrome dev tool, Scrum, Agile
                  </p>
                  <p>
                    <b>Interpersonal skills : </b>User Experience, UI design, Graphic Design, Figma, PowerPoint
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
                  As a full stack web developer, I regularly share technical articles covering web development and programming topics. These pieces showcase my ability to clearly explain complex concepts, providing actionable insights based on hands-on experience. Article topics range from JavaScript frameworks and CSS techniques to security best practices and career advice in the tech industry. The goal is to synthesize what I learn through continued self-education into helpful tips for others. The articles published here reflect a sample of my writing.
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

        {/* <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Reads.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Human Centered Design 101"
                  href="https://www.plusacumen.org/courses/introduction-human-centered-design"
                >
                  Human Centered Design 101. <small>Acumen</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2017 - 2018</b>
                </a>
                <p>
                  This is an intensive, hands-on learning experience that will
                  challenge you to get out of your chair and out into the real
                  world to talk to people and test your ideas. You’ll leave this
                  experience equipped and energized to apply the human-centered
                  design process to challenges across industries, sectors, and
                  geographies to generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Data Structure And Algorithm"
                  href="https://www.udemy.com/course/master-the-coding-interview-data-structures-algorithms/"
                >
                  Data Structure And Algorithm. <small>Udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  Many developers who are &quot;self taught&quot;, feel that one
                  of the main disadvantages they face compared to college
                  educated graduates in computer science is the fact that they
                  don&apos;t have knowledge about algorithms, data structures
                  and the notorious Big-O Notation
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Adaptive Leadership"
                  href="https://www.edx.org/course/adaptive-leadership-in-development"
                >
                  Adaptive Leadership. <small>edX</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2019</b>
                </a>
                <p>
                  This introductory course helps you identify and make progress
                  on a leadership challenge in your own life, team, or
                  community. You’ll apply the tools and techniques of Adaptive
                  Leadership, a practical framework developed at Harvard Kennedy
                  School of Government for leading change, particularly during
                  times of uncertainty or when there are no easy answers.{' '}
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  id="cardHover"
                  aria-label="Open Link Learning to Learn [Efficient Learning] "
                  href="https://www.udemy.com/course/learning-to-learn-efficient-learning-zero-to-mastery/"
                >
                  Learning to Learn [Efficient Learning] <small>udemy</small>
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>2020</b>
                </a>
                <p>
                  Improve memory & productivity using the skills of the world's
                  top performers and learning strategies proven by research.
                </p>
              </li>
              <li>
                <Link
                  href="/articles"
                  aria-label="Check my articles and recent reads"
                  id="cardHover"
                >
                  Learning Something Great 😉
                </Link>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Currently</b>
                </a>
                <p>We continue learning everyday. </p>
              </li>
            </ul>
          </article>
        </PageWrapper> */}

        {/* <PageWrapper
          className="mb-5"
          aria-label="You are now in my musical playlist section"
        >
          <article>
            <h4>My Playlist.</h4>
            <ul className="timeline">
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Codewonders Spotify Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                >
                  Codewonders. <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  id="cardHover"
                  rel="noopener noreferrer"
                  aria-label="Open Lofii Playlist"
                  href="https://open.spotify.com/playlist/2EH5NURI9OzRsMOFOGL70V"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  This is an intensive, energizing songs list that helps me
                  through the day and inspires generate breakthrough ideas.
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                >
                  Chill Lofi Study Beats <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX8Uebhn9wzrS"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>
                  The perfect study beats, twenty four seven. with over 178
                  SONGS
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                >
                  Mellow Drive <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DWUACcBjzMiIY?si=KbZW7Cz1TpaABPXV_fH4-A"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Easy listening for pleasant drive</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                >
                  Rap UK <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX6PKX5dyBKeq?si=jRd8iiIER260sRzE6ZV44g"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>One of the finest rap in UK. Cover: Aitch</p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                >
                  Mood Booster 🎅🏽 <small>Spotify</small>
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open Link"
                  id="cardHover"
                  href="https://open.spotify.com/playlist/37i9dQZF1DX3rxVfibe1L0?si=wF0gpf3RRa-2oT1GYTBQ_w"
                  className="float-right"
                >
                  View Playlist
                </a>
                <p>Get happy with today's dose of feel-good songs!</p>
              </li>
            </ul>
          </article>
        </PageWrapper>

        <PageWrapper aria-label="You are now in lens section">
          <article>
            <h4>My Photochromic Lens.</h4>
            <ul className="timeline">
              <li>
                <Link href="/lens">
                  Adenekan's Collection. <small>©Adenekan</small>
                </Link>
                <Link href="/lens" className="float-right" id="cardHover">
                  Visit Page
                </Link>
                <p>
                  This is an intensive, curation of the photochromic lenses that
                  standout and the ones that i personally love, NOTE this is
                  just by preference actually.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper> */}
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
