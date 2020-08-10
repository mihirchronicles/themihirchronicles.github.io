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
          <p>This website is an open exploration with others. Exploration has always been dear to my heart. I do not use the term “exploration” loosely. I have always put a huge emphasis on exploring and following my own curiosity. Learning as a currency is more valuable to me than cash. Fancy titles and achievements are traps. The soul wide opens when I am interested, not interesting. I hope learning does not change as I get older. Learning is one thing, but teaching is another. The latter is much harder to strive for because we have to put our demons like ego and selfish acts to rest.</p>
          <p><strong>The game of investing</strong> in markets is always fun. There is no better way to learn about the real world than throwing ourselves out there. I purchased my first stock at the age of 17, which also happened to be right before the 2008 recession. In a few months, I lost all my savings that I accumulated from my summer jobs. The pain from losing was tough to swallow, but I learned many important lessons at an early age. This is when understanding the psychology of markets became fascinating to me. In the end, markets are people. If we understand markets, we understand people, and vice-versa.</p>
          <p><strong>The game of creation</strong> is another one. There is something beautiful about bringing abstraction to life. If I wouldn't have studied finance and accounting, I would have gone to design or engineering school. I built my first product after graduating from college. It wasn't a rocket science, but a simple pen packaged beautifully. The ability to bring the vision to life and sharing with others was fulfilling. Soon after that, I learned how to write code. Now I will jump onto anything that helps me create. My motto has become something like “don't complain, create.”</p>
          <p>Lastly, <strong>the game of finding harmony with our soul</strong>. I truly cherish immersing into different cultures, being out in the woods, hiking trails, climbing mountains, gazing at stars, reading in solitude, teaching kids about life and creating things. When I pursue these things, I am in my truest element. There is no pain, and more importantly my soul is most alive. All these things help me build surplus of positive energy. All I am striving for is to keep building on this momentum. Below are some of my favorite quotes that also reflect my belief system.</p>
          <p><strong>On habits:</strong></p><blockquote>We are what we repeatedly do. Excellence, then, is not an act, but a habit. — Aristotle</blockquote>
          <p><strong>On choices:</strong></p><blockquote>We all can be masters at our craft, but you have to make a choice. What I mean by that is, there are inherent sacrifices that come along with that. Family time, hanging out with friends, being a great friend, being a great son, nephew, whatever the case may be. — Kobe Bryant</blockquote>
          <p><strong>On storytelling:</strong></p><blockquote>The most powerful person in the world is the story teller. The storyteller sets the vision, values and agenda. — Steve Jobs</blockquote>
          <p><strong>On living the best life:</strong></p><blockquote>A man who dares to waste one hour of time has not discovered the value of life. — Charles Darwin</blockquote>
          <p><strong>On awareness:</strong></p><blockquote>Between stimulus and response there is space. In that space is our power to choose our response. In our response lies our growth and our freedom. — Viktor E. Frankl</blockquote>
          <p><strong>On repetition:</strong></p><blockquote>A genius is born in the midst of boring and repetitive tasks. — Anonymous</blockquote>
          <p><strong>On problem solving:</strong></p><blockquote>If you bring forth a problem then also propose a solution. — Anonymous</blockquote>
          <p><strong>On writing:</strong></p><blockquote>Writing means clear thinking. — Paul Graham</blockquote>
          <p><strong>On teaching:</strong></p><blockquote>The best way to compound knowledge is to share and teach. — Anonymous</blockquote>
          <p><strong>On effortless mastery:</strong></p><blockquote> Effortless mastery in all that you seek–another paradox where trying to force a skill or habit tends to backfire. Find ways to enjoy every step, making it effortless and sustainable. — Kenny Werner</blockquote>
          <p><strong>On hard work upfront:</strong></p><blockquote>A key lesson I learned from my dad and an interesting life paradox. Oftentimes, simply doing the hard work upfront is actually less work than trying to find ways around it. — Blas</blockquote>
          <p><strong>On important problems:</strong></p><blockquote>What are the most important problems in your field? Are you working on them? If not, why not? — Richard Hamming</blockquote>
          <p><strong>On humility:</strong></p><blockquote>Everything in this world is better in moderation, except one: humility. — Moses Maimonides</blockquote>
          <p><strong>On forcing:</strong></p><blockquote>Anything achieved through brute force never lasts. You must change the structure of the system if you want to have any sort of long-term impact. — Robert Fritz</blockquote>
          <p><strong>On long-term:</strong></p><blockquote>Seek long-term games with long-term people. — Naval Ravikant</blockquote>
          <p><strong>On simplistic approach:</strong></p><blockquote>When I’m working on a problem, I never think about beauty. I think only how to solve the problem. But when I have finished, if the solution is not beautiful, I know it is wrong. — Buckminster Fuller</blockquote>
          <p><strong>On abundance vs scarcity:</strong></p><blockquote>Abundance is better than scarcity. In every aspect and facet of life, give more to get more. Timing, magnitude, place, and certainty are all unknown, but this mindset is worth it even if you never get anything in return (which you inevitably will). — Blas</blockquote>
          <p><strong>On inifinite curiosity:</strong></p><blockquote>Trust that everything you learn and do will someday be helpful. This fuels infinite and effortless curiosity and motivation.</blockquote>
          <p><strong>On preparation:</strong></p><blockquote>There is a reason George Marshall named his horse “Preparation.” Sometimes magic is just someone spending more time on something than anyone else might reasonably expect. — Raymond Joseph Teller</blockquote>
          <p><strong>On people:</strong></p><blockquote>Assume ignorance, not malice — give people the benefit of the doubt. Envy, hatred, jealousy, anger are simply acids that eat away at the container they’re kept in. — Blas</blockquote>
          <p><strong>On taking care of yourself:</strong></p><blockquote>My mom always told me to first fill my own cup (to have enough selflove, self-acceptance, self-compassion, and self-confidence) before I could “fill” others. Those whose cups are empty are black holes who can never be satisfied — be sure not to be this person yourself and beware of those in your life who are. Perhaps the most counter-intuitive truth of the universe is that the more you give to others, the more you’ll get. Understanding this is the beginning of wisdom. — Kevin Kelly</blockquote>
          <p><strong>On being an outlier:</strong></p><blockquote>Finding contrast in anything you do is the master key – “Don’t be the best. Be the only.” — Kevin Kelly</blockquote>
          <p><strong>On systems vs goals:</strong></p><blockquote>Systems are better than goals. Habits, routines, defaults, and incentives are superpowers (or supervillains). Systems help structure your life for long-term benefit whereas goals can be gamedand tend towards shorter-term mindsets. — Blas</blockquote>
          <p><strong>On being interesting:</strong></p><blockquote>To be interesting, be interested. — John Gardner</blockquote>
          <p><strong>On life:</strong></p><blockquote>I’ve found that the 7 life dimensions — health, family, friends, work, community service, spiritual development, personal development — is a great framework in which to think about the important pillars in my life, finding balance that is appropriate given your priorities. Be very aware of who/what brings or detracts energy. — Blas</blockquote>
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
