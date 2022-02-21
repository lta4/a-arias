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
    <div class="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
      <div className="header__intro">
        <h1>Hi, I'm Andrew Arias.</h1>
          <p>I'm a full-stack developer.</p>
          <button className="head__butt">View my work</button>
          {/* <About /> */}
      </div>
    </header>
    <section className="about">
      <div>
        <h1 className="about__title">About</h1>
      </div>
      <div className="about__card">
        {/* <div className="about__card__svg">
          <svg className="faClock"><FaClock size={100} className="clock"/></svg>
        </div> */}
        <div className="about__card__description">
          <img src="" alt="Fast" />
          <h2>Fast</h2>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <img src="" alt="Intuitive" />
          <h2>Intuitive</h2>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <img src=""  alt="Responsive" />
          <h2>Responsive</h2>
          <p>My layouts will work on any device big or small.</p>
        </div>
      </div>
      <div className="about__card">
        <div className="about__card__description">
          <img src="" alt="Dynamic" />
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
            <p>I'm a Front-End Developer in San Diego, CA.
            I have serious passion for developing, animations, and creating intuitive, dynamic user experiences.</p>
            <p>Let's make something special!</p>
          </div>
        </div>
      </div>
      <div className="profile__set">
        <div className="profile__set__description">
          <h1>Hello column 2</h1>
            <h2>I am the h2</h2>
            <p>Did you know I am using git hub lens</p>
        </div>
      </div>
    </section>
    <section className="projects">
      <div className="projects__header">
        <h1>Project Lord</h1>
      </div>
      <div className="projects__card">
        <div className="projects__card__description">
          <div className="projects__card__image">
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQH_tHwiR0hmCg/profile-treasury-image-shrink_800_800/0/1615884033329?e=1638129600&v=beta&t=qHrcgMfd7rsxPDsxyRyL5JSSP2nfgS-bNzIH0f0mbxc" alt="Anxiety App HomePage" max-width="100%"/>
            <h2>Anxiety App</h2>
            <p>My final Capstone Project for General Assembly. An app built to help anyone who has or suffers from anxiety.</p>
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
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQENzFepchaf-g/profile-treasury-image-shrink_1280_1280/0/1616004190270?e=1638259200&v=beta&t=HHgzluDlABmDZIxaLP6vrYff35RTOfEhMX6fCbQ8GIM" alt="First Porfolio" max-width="100%" />
            <h2>First Portfolio</h2>
            <p>My first Portfolio Project with General Assembly.</p>
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
            <img src="https://media-exp1.licdn.com/dms/image/C562DAQF441Zue8CM1A/profile-treasury-image-shrink_1280_1280/0/1616004568525?e=1638259200&v=beta&t=ovOfAcbYRiPZBrUQ04XXPsM5HziQBb4ua5y29Rup4MU" alt="PC Builder Project" max-width="100%" />
            <h2>PC Builder</h2>
            <p>A group project made to sort and compile your own personal computer.</p>
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
            <p>An app created to find any movie out there. Detailed descriptions included. The best way to find those movies!</p>
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
