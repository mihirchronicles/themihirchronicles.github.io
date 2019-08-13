import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const Horizontal = styled.hr`
  border: 1px solid #2789e5;
  background-color: #3d9cdf;
`

const MarkerHeader = styled.p`
  display: inline;
`

const ReadingDateTime = styled.p`
  display: inline;
  color: #000;
  font-size: 11px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Essays" />
      <Content>
        <h1>Essays</h1>
        <p>The importance of writing stems from the fact that it enhances clarity and intellect. Writing allows me to express my thoughts and helps pose worthwhile questions. Writing is an ultimate reflection of thinking and rationalization of complex topics.</p>
        <Horizontal/>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <ol>
              <li>
                <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: #3d9cdf;
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
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/blog/" } }
      sort: { fields: [frontmatter___date], order: DESC }) {
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
