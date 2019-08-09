import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  padding-bottom: 40px;
  
`

const ReadingDateTime = styled.p`
  display: inline;
  color: #000;
  font-size: 11px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore" />
      <Content>
        <h1>Explore</h1>
        <p>My goal is to learn and document things for myself, and share with others. Unlike essays with deep analysis, this is a quick exploration and exit. The goal is to go on an adventure, follow a trail and exit. Below are topics I have encountererd and documented.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <h2>{node.frontmatter.title} </h2>
          <ReadingDateTime>({node.frontmatter.date})</ReadingDateTime>
          <Content dangerouslySetInnerHTML={{ __html: node.html }} />
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
      filter: { fileAbsolutePath: { regex: "/content/explore/" } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          html
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`
