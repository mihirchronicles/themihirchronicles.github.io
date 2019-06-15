import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  padding: 1.45rem 1.0875rem;
  margin: auto;
	text-align: left;
  font-size: 14px;
  overflow-x:hidden;
  overflow-y:auto;
  left: 0;
  right: 0;
  -ms-overflow-style: none;  /*  IE 10+ */ 
  overflow: -moz-scrollbars-none;  /*  Firefox */
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <Content>
      <h1>Product</h1>
      <Description>There is a pure joy in building and launching creative products. Building a product is like planting a seed while experimenting with new ideas. Visual language is a huge part of my product story telling. Following the journey of product building has allowed me to learn about various topics—design, code, user experience, writing, ethics, marketing, sales, product prototyping, engineering, manufacturing, supply chain, financing and so much more. My work is still in pogress. Below you will find my past and present product stories.</Description>
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
  }
`
