import React from "react"
import { graphql } from 'gatsby'
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import mehere from '../images/mehere.png'

const About = styled.div`
  width: 100%;
  :after {
    content: "";
    display: table;
    clear: both;
  }
`

const AboutContent = styled.div`
  width: 100%;

  @media screen and (max-width: 600px) {
    {
      width: 100%;
    }
  }
`

const Logo = styled.img`
  float: left;
  width: 230px;
  height: 300px;
  margin-bottom: 5px;
  background-color: #e7e7e7;
  padding: 15px 15px 15px 15px;
  border-radius: 5px;
  margin-right: 30px;

  @media screen and (max-width: 600px) {
    {
      width: 100%;
      height: 400px;
    }
  }
`

const Content = styled.div`
  margin: 0 auto;
`

// const Horizontal = styled.hr`
//   border: 1px solid #0049fb;
//   background-color: #0049fb;
// `

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
      <h1>About</h1>
      <About>
        <Logo src={mehere} alt="MihirChronicles"/>
        <AboutContent>
          <p>Exploration has always been dear to my heart. Learning as a currency is more valuable to me than anything else. Fancy titles and achievements are traps. My soul wide opens when I am interested, not when I am interesting. I hope learning does not change as I get older. Learning is one thing, but teaching is another. The latter is much harder to strive for because we have to put our demons like ego and selfish acts to rest. I hope to share what I learn with others via this website.</p>
          <p><strong>The game of investing</strong> in markets is always fun. There is no better way to learn about the real world than throwing ourselves out there. I purchased my first stock at the age of 17, which also happened to be right before the 2008 recession. In a few months, I lost all my savings that I accumulated from my summer jobs. The pain from losing was tough to swallow, but I learned many important lessons at an early age. This is when understanding the psychology of markets became fascinating to me. In the end, markets are people. If we understand markets, we understand people, and vice-versa.</p>
          <p><strong>The game of creation</strong> is another one. There is something beautiful about bringing abstraction to life. If I wouldn't have studied finance and accounting, I would have gone to design or engineering school. I built my first product after graduating from college. It wasn't rocket science — a bamboo pen with postcards packaged beautifully. The ability to bring the vision to life and sharing with others was fulfilling. Soon after that, I learned how to write code. Now I will jump onto anything that helps me create. My motto has become something like “don't complain, create.”</p>
          <p>Lastly, <strong>the game of finding harmony with our soul</strong>. I truly cherish immersing into different cultures, being out in the woods, hiking trails, climbing mountains, gazing at stars, reading in solitude, teaching kids about life and creating beautiful things. When I pursue these things, I am in my truest element. There is no pain, and more importantly my soul is most alive. All these things help me build surplus of positive energy. All I am striving for is to keep building on this momentum.</p>
          <p><strong>My guiding principle</strong>: the opposite of play is not work, but depression. Life is a game then. Ready, Set, Go! Play the game of inches by taking small, incremental and repetitive steps instead of giant leaps. The way to stay in the game for a long time is to work on hard problems which provides motivation and energy.</p>
          <p><strong>On habits:</strong></p><blockquote>We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle</blockquote>
          <p><strong>On choices:</strong></p><blockquote>We all can be masters at our craft, but you have to make a choice. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be. — Kobe Bryant</blockquote>
          <blockquote>Between stimulus and response there is space. In that space is our power to choose our response. In our response lies our growth and our freedom. — Viktor E. Frankl</blockquote>
          <p><strong>On repetition:</strong></p><blockquote>A genius is born in the midst of boring and repetitive tasks. — Anonymous</blockquote>
        </AboutContent>
      </About>
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
