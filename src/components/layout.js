import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
// import Footer from "./footer"
import { FaGithubAlt, FaEnvelope, FaLinkedin } from "react-icons/fa"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="flexThisBox">
      <main>{children}</main>
      <footer className="footer">
        <div className="footer__socials">
          <a href="https://github.com/lta4">
            <FaGithubAlt size={40}/>
          </a>
          <a href="mailto:andrew4ld@gmail.com">
            <FaEnvelope size={40}/>
          </a>
          <a href="https://linkedin.com/in/andrewarias4">
            <FaLinkedin size={40}/>
          </a>
        </div>
        {/* <div className="footer__attributions">

        </div> */}
        <div className="footer__caption">
          © {new Date().getFullYear()}, Built with love by
          {` Andrew Arias`}
        </div>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
