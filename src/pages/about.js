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

const Horizontal = styled.hr`
  border: 1px solid #0049fb;
  background-color: #0049fb;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="About" />
      <Content>
      <h1>About</h1>
      <About>
        <Logo src={mehere} alt="MihirChronicles"/>
        <AboutContent>
          <p>This website is an open exploration with others. Exploration has always been dear to my heart. I do not use the term “exploration” loosely. I have always put a huge emphasis on exploring and following my own curiosity. Learning as a currency is more valuable to me than cash. Fancy titles and achievments are traps. My soul is wide open when I am interested, not interesting. And, I hope learning does not change as I get older. Learning is one thing, but teaching is another. The latter is much harder to strive for because we have to put our demons like ego and selfish acts to rest.</p>
          <p><strong>The game of investing</strong> in markets is always fun. There is no better way to learn about the real world than throwing ourselves out there. I purchased my first stock at the age of 17, which also happend to be right before the 2008 recession. In a few months, I lost all my savings that I accumulated from my summer jobs. The pain from losing was tough to swallow, but I learned many important lessons at an early age. This is when understanding the psychology of markets became fascinating to me. In the end, markets are people. If we understand markets, we understand people, and vice-versa.</p>
          <p><strong>The game of creation</strong> is another one. There is something beautiful about bringing abstraction to life. If I wouldn't have studied finance and accounting, I would have gone to design or engineering school. I built my first product after graduating from college. It wasn't a rocket science, but a simple pen packaged beautifully. The ability to bring the vision to life and sharing with others was fulfilling. Soon after that, I learned how to write code. Now I will jump onto anything that helps me create. My motto has become something like “don't complain, create.”</p>
          <p>Lastly, <strong>the game of finding harmony with our soul</strong>. I truly cherish immersing into different cultures, being out in the woods, hiking trails, climbing mountains, gazing at stars, reading in solitude, teaching kids about life and creating things. When I pursue these things, I am in my truest element. There is no pain, and more importantly my soul is most alive. All these things help me build surplus of positive energy. All I am striving for is to keep building on this momentum. Below are some of my favorite quotes.</p>
          <p><strong>On habits:</strong></p><blockquote>We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle</blockquote>
          <p><strong>On choices:</strong></p><blockquote>We all can be masters at our craft, but you have to make a choice. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be. — Kobe Bryant</blockquote>
          <p><strong>On storytelling:</strong></p><blockquote>The most powerful person in the world is the story teller. The storyteller sets the vision, values and agenda. — Steve Jobs</blockquote>
          <p><strong>On living the best life:</strong></p><blockquote>A man who dares to waste one hour of time has not discovered the value of life. — Charles Darwin</blockquote>
          <p><strong>On awareness:</strong></p><blockquote>Between stimulus and response there is space. In that space is our power to choose our response. In our response lies our growth and our freedom. — Viktor E. Frankl</blockquote>
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
