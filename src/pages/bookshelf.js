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
      <SEO title="Books" />
      <Content>
        <h1>Bookshelf</h1>
        <p>Reading is a fun way to experience life and go on an adventure! It is important to make time to read what's fairly academic and super profound. To maintain lifelong curiosity, I use multi-disciplinary approach to select and read wide array of books. Below are my notes on a few of the books I have read.</p>
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
            <ul>
            </ul>
          </div>
        ))}
        <ol>
          <li>It Doesn't Have to Be Crazy at Work</li>
          <li>The Last Lecture</li>
          <li>When Breath Becomes Air</li>
          <li>Bad Blood: Secrets and Lies in a Silicon Valley Startup</li>
          <li>Grit</li>
          <li>Being Logical: A Guide to Good Thinking</li>
          <li>Misbehaving: The Making of Behavioral Economics</li>
          <li>Poor Charlie's Almanack: The Wit and Wisdom of Charles T. Munger, Expanded Third Edition</li>
          <li>Cathedral of the Wild: An African Journey Home</li>
          <li>Man's Search for Meaning</li>
          <li>The $100 Startup: Reinvent the Way You Make a Living, Do What You Love, and Create a New Future</li>
          <li>Dark Matter</li>
          <li>The Subtle Art of Not Giving a F*ck: A Counterintuitive Approach to Living a Good Life</li>
          <li>The Power of Habit: Why We Do What We Do in Life and Business</li>
          <li>How Google Works</li>
          <li>The Everything Store: Jeff Bezos and the Age of Amazon</li>
          <li>The Great Gatsby</li>
          <li>	The Intelligent Investor</li>
          <li>The Creator's Code The Six Essential Skills of Extraordinary Entrepreneurs</li>
          <li>Start Something That Matters</li>
          <li>Zero to One: Notes on Startups, or How to Build the Future</li>
          <li>The Snowball: Warren Buffett and the Business of Life</li>
          <li>Steve Jobs</li>
          <li>Elon Musk: Tesla, SpaceX, and the Quest for a Fantastic Future</li>
          <li>The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers</li>
          <li>Becoming Steve Jobs: The Evolution of a Reckless Upstart into a Visionary Leader</li>
          <li>The Martian</li>
        </ol>
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
      filter: { fileAbsolutePath: { regex: "/content/bookshelf/" } }
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
