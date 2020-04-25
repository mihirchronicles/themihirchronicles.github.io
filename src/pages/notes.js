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
  border: 1px solid #0049fb;
  background-color: #0049fb;
`

const MarkerHeader = styled.p`
  display: inline;
`

const ReadingDateTime = styled.p`
  display: inline;
  color: #000;
  font-size: 12px;
  font-family: monospace;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Notes" />
      <Content>
        <h1>Notes</h1>
        <p>The importance of writing stems from the fact that it enhances clarity and intellect. Writing is organized thinking on behalf of persuasion. The true function of a writer and learner is to peel the onion of your own ignorance and pose questions. Below are few of the topics I have explored and dug deeper into.</p>
        <Horizontal/>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <ol>
              <li>
                <Link
                to={node.frontmatter.path}
                css={css`
                  text-decoration: none;
                  color: #0049fb;
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
