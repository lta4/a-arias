import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
// import About from "../components/about"
import { FaClock } from "react-icons/fa"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <header className="header">
      <div className="header__intro">
        <h1>Hi, I'm Andrew Arias.</h1>
          <p>I'm a full-stack developer.</p>
          <button className="head__butt">View my work</button>
          {/* <About /> */}
      </div>
    </header>
    <section className="about">
      <div className="about__card">
        {/* <div className="about__card__svg">
          <svg className="faClock"><FaClock size={100} className="clock"/></svg>
        </div> */}
        <div className="about__card__description">
          <h2>Fast</h2>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <h2>Intuitive</h2>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <h2>Responsive</h2>
          <p>My layouts will work on any device big or small.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <h2>Dynamic</h2>
          <p>Websites don't have to be static. I love making pages come to life.</p>
        </div>
      </div>
    </section>
    <section className="profile">
      <div className="profile__set">
        <div className="profile__set__image">
          <img src="https://res.cloudinary.com/dfltkqotn/image/upload/v1636925630/Profile-Image.jpg" alt="profile of one's self" height="350px" />
          <div className="profile__set__description">
            <h2>I am Andrew Arias</h2>
            <p>I'm a Front-End Developer for ChowNow in Los Angeles, CA.
            I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences.
            Let's make something special.</p>
          </div>
        </div>
      </div>
      <div className="profile__set">
        <div className="profile__set__description">
          <div>
            <h1>Hello column 2</h1>
          </div>
        </div>
      </div>
    </section>
    <section className="projects">
      {/* <div className="projects__header">PROJECT LORD</div> */}
      <div className="projects__card">
        <div className="projects__card__description">
          <div className="projects__card__image">
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQH_tHwiR0hmCg/profile-treasury-image-shrink_800_800/0/1615884033329?e=1638129600&v=beta&t=qHrcgMfd7rsxPDsxyRyL5JSSP2nfgS-bNzIH0f0mbxc" height="200px" width="300px"  />
            <h2>Anxiety App</h2>
            <p>My final Capstone Project. An app built to help anyone who has anxiety.</p>
          </div>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/lta4/capstone-anxiety-app.git">Repo</a>
          <a href="https://capstone-anxiety-app.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <div className="projects__card__image">
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQENzFepchaf-g/profile-treasury-image-shrink_1280_1280/0/1616004190270?e=1638259200&v=beta&t=HHgzluDlABmDZIxaLP6vrYff35RTOfEhMX6fCbQ8GIM" height="200px" width="300px" className="projects__card__image" />
            <h2>First Portfolio</h2>
            <p>My first Portfolio Project</p>
          </div>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/lta4/lta4.github.io.git">Repo</a>
          <a href="https://andrewarias-portfolio.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <div className="projects__card__image">
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQF441Zue8CM1A/profile-treasury-image-shrink_1280_1280/0/1616004568525?e=1638259200&v=beta&t=ovOfAcbYRiPZBrUQ04XXPsM5HziQBb4ua5y29Rup4MU" height="200px" width="300px" className="projects__card__image"/>
            <h2>PC Builder</h2>
            <p>A group project made to sort and compile your personal computer.</p>
          </div>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/MrChaco007/PC-Builder-Front.git">Repo</a>
          <a href="https://pc-builder.netlify.app">Project</a>
        </div>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <div className="projects__card__image">
            <h2>moviFi</h2>
            <p>An app created to find any movie out there. Descriptions included.</p>
          </div>
        </div>
        <div className="projects__card__links">
          <a href="https://github.com/lta4/moviFi.git">Repo</a>
          <a href="https://movifi.netlify.app">Project</a>
        </div>
      </div>
    </section>
    <section className="contact">
      <form method="post" action="#" className="contact__form">
        <h2 className="contact__form__header">Contact</h2>
        <input 
          type="text" 
          name="first name" 
          id="name" 
          placeholder="First Name" 
        />
        <input 
          type="text"
          name="last name"
          id="name"
          placeholder="Last Name"
        />
        <input 
          type="email" 
          name="email" 
          id="email" 
          placeholder="Email" 
        />
        <textarea 
          name="message" 
          id="message" 
          rows="5" 
          placeholder="Message" 
        />
        <button type="submit">Send</button>
        {/* <input type="reset" value="Clear" /> */}
      </form>
    </section>
  </Layout>
)

export default IndexPage
