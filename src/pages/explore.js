import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const PostContainter = styled.div`
  background-color: #ffffff;
  padding: 15px 15px 5px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
`

const Horizontal = styled.hr`
  border: 1px solid #0049fb;
  background-color: #0049fb;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore" />
      <Content>
        <h1>Explore</h1>
        <p>Below are some of the gems that are worth exploring which are not in a long-form reading (books).</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Horizontal/>
          <PostContainter>
            <h2>{node.frontmatter.title}</h2>
            <Content dangerouslySetInnerHTML={{ __html: node.html }} />
          </PostContainter>
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
      filter: { fileAbsolutePath: { regex: "/content/explore/" } }) {
      totalCount
      edges {
        node {
          html
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`
