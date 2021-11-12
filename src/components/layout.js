import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
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
      <footer
        style={{
          marginTop: `2rem`,
        }}
      >
        <Footer />
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
