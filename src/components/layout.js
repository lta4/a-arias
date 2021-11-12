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
            <FaGithubAlt />
          </a>
          <a href="mailto:andrew4ld@gmail.com">
            <FaEnvelope />
          </a>
          <a href="https://linkedin.com/in/andrewarias4">
            <FaLinkedin />
          </a>
        </div>
        {/* <div className="footer__attributions">

        </div> */}
        © {new Date().getFullYear()}, Built with love by
        {` `}
        <a href="">Andrew Arias</a>
      </footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
