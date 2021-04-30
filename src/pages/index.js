import React, { useState } from "react"
import Layout from "../components/layout"

import Contact from "../components/body/Contact"
import Header from "../components/body/Header"
import About from "../components/body/About"
import Project from "../components/body/Project"

const IndexPage = () => {
  return (
    <Layout>
      <Header />
      <About />
      <Project />
      <Contact />
    </Layout>
  )
}

export default IndexPage
