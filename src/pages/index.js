import * as React from "react"
// import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className="container">
      <div className="statementContainer">
        <h1>Hello, I'm Andrew Arias.</h1>
          <p>Welcome to Andrew's Portfolio.</p>
          <p>Now go build something great.</p>
          <button>View my work</button>
          {/* <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["auto", "webp", "avif"]}
            alt="A Gatsby astronaut"
            style={{ marginBottom: `1.45rem` }}
          /> */}
          {/* <p>
            <Link to="/page-2/">Go to page 2</Link> <br />
            <Link to="/using-typescript/">Go to "Using TypeScript"</Link> <br />
            <Link to="/using-ssr">Go to "Using SSR"</Link> <br />
            <Link to="/using-dsg">Go to "Using DSG"</Link>
          </p> */}
      </div>
    </div>
  </Layout>
)

export default IndexPage
