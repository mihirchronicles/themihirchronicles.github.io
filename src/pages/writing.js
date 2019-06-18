import React from "react"
import { Link, graphql } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const MarkerHeader = styled.h2`
  display: inline;
  margin-bottom: 10px;
`

const ReadingDateTime = styled.h5`
  display: inline;
  color: #70a2d1;
  margin-bottom: 10px;
`

const ReadMore = styled.span`
  color: #70a2d1;
  font-weight: bold;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
        <h1>Writing</h1>
        <p>The importance of writing stems from the fact that it enhances  clarity and intellect. Writing allows me to express as a person and  promotes me to pose worthwhile questions. Writing ideas down helps me preserve them so that I can reflect upon them later. <i>Upwind</i> (chasing after hard topics) and <i>Primitives</i> (foundational basics) are a huge part of my writing.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
              to={node.frontmatter.path}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
            <ol>
              <li>
              <MarkerHeader>{node.frontmatter.title} </MarkerHeader>
              <div>
                <ReadingDateTime>{node.frontmatter.date}</ReadingDateTime>
                <ReadingDateTime> - {node.fields.readingTime.text}</ReadingDateTime>
              </div>
              <p>{node.excerpt} <ReadMore>Read more!</ReadMore></p>
              </li>
            </ol>
            </Link>
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
