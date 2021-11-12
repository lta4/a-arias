import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import About from "../components/about"
// import { SiFastly } from "react-icons/fa"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="header">
      <div className="header__intro">
        <h1>Hi, I'm Andrew Arias.</h1>
          <p>I'm a full-stack developer.</p>
          <button>View my work</button>
          {/* <About /> */}
      </div>
    </header>
    <section className="about">
      <div className="about__feature">
        {/* <img><SiFastly /></img> */}
        <h2>Fast</h2>
        <p>Fast load times and lag free interaction, my highest priority.</p>
      </div>
      <div className="about__feature">
        <h2>Intuitive</h2>
        <p>Strong preference for easy to use, intuitive UX/UI.</p>
      </div>
      <div className="about__feature">
        <h2>Responsive</h2>
        <p>My layouts will work on any device big or small.</p>
      </div>
      <div className="about__feature">
        <h2>Dynamic</h2>
        <p>Websites don't have to be static. I love making pages come to life.</p>
      </div>
    </section>
    <section className="projects">
      <div className="projects__card">
        <div className="projects__card__description">
          <h2>Anxiety App</h2>
          <p>My final Capstone Project. An app built to help anyone who has anxiety.</p>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/lta4/capstone-anxiety-app.git">Repo</a>
          <a href="https://capstone-anxiety-app.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <h2>First Portfolio</h2>
          <p>My first Portfolio Project</p>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/lta4/lta4.github.io.git">Repo</a>
          <a href="https://andrewarias-portfolio.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <h2>PC Builder</h2>
          <p>A group project made to sort and compile your personal computer.</p>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/MrChaco007/PC-Builder-Front.git">Repo</a>
          <a href="https://pc-builder.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <h2>moviFi</h2>
          <p>An app created to find any movie out there. Descriptions included.</p>
        </div>
        <div className="projects__card__links">
          <a href="https://movifi.netlify.app">Repo</a>
          <a href="https://github.com/lta4/moviFi.git">Project</a>
        </div>
      </div>
    </section>
  </Layout>
)

export default IndexPage
