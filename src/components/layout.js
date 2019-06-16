/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

import Header from "./header"
import "./layout.css"

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faBook, faBrush, faEnvelope, faCogs } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

library.add(fab, faBook, faBrush, faEnvelope, faCogs)

const Content = styled.div`
  margin: 0 auto;
  max-width: 860px;
  padding: 0 1.0875rem 1rem;
  padding-top: 0;
`

const FooterLink = styled.a`
  margin-left: 15px;
`

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: right;
  width: 85%;
  height: 10%;
  bottom: 0;
  left: 0;
  right: 0;
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Content>
          <main>{children}</main>
          <Footer>
            <ul>
              <li><FooterLink href="https://twitter.com/mihirchronicles"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
              <li><FooterLink href="https://www.linkedin.com/in/mihirchronicles"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
              <li><FooterLink href="https://www.github.com/in/mihirchronicles"><FontAwesomeIcon icon={["fab", "github"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
              <li><FooterLink href="mailto:mihirptl89@gmail.com"><FontAwesomeIcon icon={"envelope"} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
            </ul>

          </Footer>
        </Content>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
