import * as React from "react"
import { Link } from "gatsby"
import { Spring } from "react-spring/renderprops"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <div id="thanks">
      <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
        {props => {
          return (
            <div style={props} id="thanks-content">
              <h1>Thanks for sanding email</h1>
              <Link to="/">Go back to portfolio</Link>
            </div>
          )
        }}
      </Spring>
    </div>
  </Layout>
)

export default SecondPage
