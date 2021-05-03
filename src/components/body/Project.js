import React, { Component } from "react"
import { Transition, animated } from "react-spring/renderprops"

import {
  FaExclamationTriangle,
  FaArrowRight,
  FaArrowLeft,
} from "react-icons/fa"
import { TiArrowForwardOutline } from "react-icons/ti"

export default class Project extends Component {
  state = { show: false }
  toggle = e => this.setState(state => ({ show: !state.show }))
  render() {
    return (
      <div id="project">
        <div id="project1">
          <div className="info">
            <p>
              In this project will build an in depth full stack social network
              application using Node.js, Express, React, Redux and MongoDB along
              with ES6+.
            </p>
            <button
              onClick={this.toggle}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgb(3, 141, 255)",
              }}
            >
              <TiArrowForwardOutline
                size="3rem"
                value={{ className: "icon" }}
              />
            </button>
          </div>
        </div>
        <Transition
          items={this.state.show}
          from={{ position: "absolute", overflow: "hidden", opacity: 0 }}
          to={{ position: "absolute", overflow: "hidden", opacity: 1 }}
          enter={[{ opacity: 1 }]}
          leave={{ opacity: 0 }}
        >
          {show =>
            show &&
            (props => (
              <animated.div style={props}>
                <div id="warning">
                  <FaExclamationTriangle id="warning-icon" />
                  <h1>warning</h1>
                  <p>
                    The site is on a free domain, it will take time to open it.
                  </p>
                  <div>
                    <button onClick={this.toggle} id="war-button">
                      <FaArrowLeft style={{ marginBottom: "-5px" }} /> back
                    </button>
                    <a
                      id="war-button"
                      target="_blank"
                      href="https://quiet-hollows-55212.herokuapp.com/"
                    >
                      continue <FaArrowRight style={{ marginBottom: "-5px" }} />
                    </a>
                  </div>
                </div>
              </animated.div>
            ))
          }
        </Transition>

        <div id="project3">
          <div className="info">
            <p>
              A practical example of how to build an application with ASP.NET
              Core WebAPI v2.2 and Angular v8
            </p>
            <a
              target="_blank"
              href="https://github.com/mcmicko/DatingApp"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgb(3, 141, 255)",
              }}
            >
              <TiArrowForwardOutline
                size="3rem"
                value={{ className: "icon" }}
              />
            </a>
          </div>
        </div>

        <div id="project2">
          <div className="info2">
            <p>
              Build website application with NEXT.JS with headless CMS called
              Contentful
            </p>
            <a
              target="_blank"
              href="https://nextjs-contentful-anphqm1lp-mcmicko.vercel.app/"
            >
              <TiArrowForwardOutline
                size="3rem"
                value={{ className: "icon" }}
              />
            </a>
          </div>
        </div>

        <div id="project4">
          <div className="info">
            <p>A fullstack project NextJS Express GraphQL PostgresSQL.</p>
            <a
              target="_blank"
              href="https://github.com/mcmicko/nextJS-graphQL-express-postgres"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgb(3, 141, 255)",
              }}
            >
              <TiArrowForwardOutline
                size="3rem"
                value={{ className: "icon" }}
              />
            </a>
          </div>
        </div>

        <div id="project5">
          <div className="info">
            <p>
              Build a business intelligence Dashboard application from scratch
              using ASP .NET Core 3.1 MVC with PostgreSQL and Angular.
            </p>
            <a
              target="_blank"
              href="https://github.com/mcmicko/charts-angular-netcore-postgreSQL"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                color: "rgb(3, 141, 255)",
              }}
            >
              <TiArrowForwardOutline
                size="3rem"
                value={{ className: "icon" }}
              />
            </a>
          </div>
        </div>
      </div>
    )
  }
}
