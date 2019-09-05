import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const PostContainter = styled.div`
  background-color: #e7e7e7;
  padding: 15px 15px 5px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
`

const Horizontal = styled.hr`
  border: 1px solid #2789e5;
  background-color: #3d9cdf;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore" />
      <Content>
        <h1>Explore</h1>
        <p>The goal is to learn in bit sizes, document things for myself, and share with others. This is a an exploration with others. The goal is to go on an adventure with people who have deep expertise in their subject matter. Below are the people and noteworthy articles I have explored.</p>
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
