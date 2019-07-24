import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const MarkerHeader = styled.p`
  display: inline;
`

const ReadingDateTime = styled.p`
  display: inline;
  color: #000;
  font-size: 11px;
`

// const ReadMore = styled.span`
//   color: #26A7FF;
// `

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Essays" />
      <Content>
        <h1>Essays</h1>
        <p>The importance of writing stems from the fact that it enhances  clarity and intellect. Writing allows me to express as a person and  promotes me to pose worthwhile questions. Writing ideas down helps me preserve them so that I can reflect upon them later. <i>Upwind</i> (chasing after hard topics) and <i>Primitives</i> (foundational basics) are a huge part of my writing.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <ol>
              <li>
                <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: #26A7FF;
                `}
                >
                  <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
                </Link>
                <ReadingDateTime>| {node.fields.readingTime.text} ({node.frontmatter.date})</ReadingDateTime>
              </li>
            </ol>
          </div>
        ))}
      </Content>
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
          fields {
            slug
            readingTime {
              text
            }
          }
          excerpt
        }
      }
    }
  }
`
