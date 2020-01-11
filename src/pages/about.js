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
  border: 1px solid #2789e5;
  background-color: #3d9cdf;
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
          <p></p>
          <p>Exploration has always been dear to my heart. I do not use the term "exploration" loosely. If you look at the milestones section below, I have always put a huge emphasis on exploring and following my own curiosity. And I hope that does not change as I get older. I am using this blog as a platform to learn openly in public and share those gems with others (mostly for my wife, future kids and friends) as I find them interesting. Learning is one thing, but teaching is another. The latter is much harder to strive for because we have to put our demons like ego and selfish acts to rest.</p>
          <p>The game of investing in markets is always fun. There is no better way to learn about the real world than throwing ourselves out there. I purchased my first stock at the age of 17, which also happend to be right before the 2008 recession. In a few months, I lost all of my savings that I accumulated from my summer jobs. This is when understanding the psychology of markets became fascinating to me. In the end, markets are people, corporations, government and everything else in between. If we understand markets, we understand people, and vice-versa.</p>
          <p>The game of creation is another one. There is something beautiful about bringing abstraction to life. If I wouldn't have studied finance and accounting, I would have gone to design or engineering school. I built my first product after graduating from college. By no means was it a rocket science — it was a simple pen, packaged beautifully. But the ability to bring the vision to life and sharing with others was fulfilling. Soon after that, I learned how to write code. Now I will jump onto anything that helps me create. My motto has become something like “don't complain, create.”</p>
          <p>Lastly, the game of finding harmony with our soul. I truly cherish immersing into different cultures, being out in the woods, hiking trails, climbing mountains, gazing at stars, reading in solitude, teaching kids about life and creating things. When I pursue these things, I am in my truest element. There is no pain and more importantly my soul is most alive! All these things help me build surplus of positive energy. All I am striving for is to keep building on this momentum. Ralph Waldo Emerson said it best about leadership and friendship:</p>
          <blockquote>He who should inspire and lead his race must be defended from travelling with the souls of other men, from living, breathing, reading, and writing in the daily, time-worn yoke of their opinions. The soul environs itself with friends, that it may enter into a grander self-acquaintance or solitude.</blockquote>
        </AboutContent>
      </About>
      <Horizontal/>
      <h2>Milestones</h2>
        <ol>
          <li><strong>2010:</strong> visited Berkshire Hathaway shareholder meeting in Nebraska to listen to Warren Buffett and Charlie Munger.</li>
          <li><strong>2011:</strong> graduated college with Accountancy and Finance degree.</li>
          <li><strong>2012:</strong> ran Royal Ace Investments with a school friend. Got a taste of trading and absolutely hated it. Visited Haiti to learn about education system. Recap <a href="https://vimeo.com/80200375">here</a>.</li>
          <li><strong>2013:</strong> traveled with a one-way ticket for a backpacking trip in India. Recap <a href="https://www.youtube.com/watch?v=qUGvvCtpIaY">here</a>.</li>
          <li><strong>2014:</strong> launched and built a physical product. See the project <a href="https://www.instagram.com/humblepen/">here</a>. Volunteered at the Adler Planetarium to teach kids how to use telescopes (nothing concrete to share but my friends and family can share a lot about my obsession).</li>
          <li><strong>2015:</strong> moved to Utah to learn to write code and spend time in the mountains.</li>
          <li><strong>2016:</strong> started as a developer at Morningstar.</li>
          <li><strong>2017:</strong> proposed to my future wife in <a href="https://www.youtube.com/watch?v=Wdt6DQ9c4_o">Yosemite</a>.</li>
          <li><strong>2018:</strong> learn to think independentally by using mental models. See the project <a href="https://www.wisecharlie.com">here</a>.</li>
          <li><strong>2019:</strong> got married and finally got <a href="https://www.instagram.com/twinkle_twinkle_leo_star/?hl=en">Leo</a> that I promised my wife during our proposal<a href="https://www.instagram.com/twinkle_twinkle_leo_star/"></a>.</li>
        </ol>
      <h2>Principles</h2>
        <ol>
          <li><strong>I. Honesty:</strong> without honesty none of the values below matter. We not only have to be honest to others but to ourselves, our subconscious and every decision we make. Honesty is the highest honor we will carry. It'll help us preserve our reputation and integrity. Be ruthless if integrity is ever being questioned. Always protect our reputation. It takes years to build it and minutes to ruin it. If we don’t ask, we don’t get. If we don’t question, we don’t know. Authenticity and originality is born when we are honest to ourselves and others around us. Owning our actions can be incredibly difficult to do. We aren’t programmed to expose our egos or make ourselves vulnerable when we make mistakes or do something stupid. But one of the most powerful ways to make giant leaps forward in our lives is to not only accept that we’ll screw up, but to actively seek out correction when we do. When we refuse to accept ownership of our mistakes, we have distorted the feedback loop we rely on to make better decisions in the future.</li>
          <li><strong>II. Respect and be kind:</strong> respect everything around us - people, tasks, time, money and relationships. If we can't respect them then don't be around them. Be empathetic! We can respect others by giving them 3 things — being reliable, giving everyone 100% attention and making them feel good about themselves. We never know what others are going through. Always be compassionate and respectful to others and never forget to smile.</li>
          <li><strong>III. Intense focus:</strong> focus is a force multiplier on work. Without intense focus everything else fails. And focusing on too many things is a recipe for a disaster. Focus on only one thing until we move on to the next step. Cultivate trust and attention. Protect our attention like we protect our friends, family, and money. Commit to our goal/s with everything we have. Direction over speed. If we are pointed in the wrong direction, it doesn’t matter how fast we are traveling. Inversely, if we are locked on to our desired destination, all progress is positive, no matter how slow we are going. We will reach our destination eventually with intense focus and ruthlessly prioritizing!</li>
          <li><strong>IV. Hard work and hard problems:</strong> skills can only take us far but work ethic will define our character. Wake up before the sunrise and work till the sunset. Also work on hard problems. When we solve hard problems, we are alive and relieved after solving. We can get to about the 90th percentile in our field by working either smart or hard, which is still a great accomplishment. But getting to the 99th percentile requires both — we will be competing with other very talented people who will have great ideas and be willing to work a lot harder and smarter. Working a lot comes with huge life trade-offs but momentum compounds, and hard work begets progress.</li>
          <li><strong>V. Long-term:</strong> always think about our objectives with a long-term view. Compound interest is the most underrated law. Extreme patience with extreme focus with extreme decisiveness with a long-term view will do magic and wonders. It’s amazing how much of a competitive advantage can be found by simply having the disposition to wait longer than the competitors.</li>
          <li><strong>VI. Repition, effort and deliberate practice:</strong> be so good that they can't ignore us. Key to becoming good to so good is to do boring tasks over and over again until we perfect it. Doing new and cool things is sexy but doing repetitive task is not. It will take many tries till we perfect our art. Use space repetition technique and focused/diffused mode. Consistency is the playground for perfection. Effort counts not passion. Effort counts not talent. Deliberate practice is a key to repetition. Structured but flexible repetition is the best productivity tool. It doesn't matter what we are trying to become better at, if we only do the work when it’s convenient or exciting, then we will never be consistent enough to achieve remarkable results. The ability to show up everyday, stick to the schedule, and do the work — especially when we don't feel like it is so valuable that it is literally all we need to become better.</li>
          <li><strong>VII. Process without expectations:</strong> expectations lead to disappointments. Don't expect. Trust the process. The means and the end are the same. This is very important. When the process itself is the goal, magical things happen. Growth without expectations is the ultimate goal. Take small steps in a sequence but with urgency. Smooth sailing is fast selling. Have a life don’t have a career! Goals have an endpoint. System (process) don’t. Growth or progress which is structured and habitual, but adaptable and not pre-determined through the setting of rigid long-term goals.</li>
          <li><strong>VIII. Generalist polymath view:</strong> a generalist mindset can be a huge advantage. It is easy to pay homage to Charlie Munger’s latticework of mental models, but when we live it, we see why he is right. Knowing the key drivers and major ideas in variety of fields is a huge source of leverage. It is difficult to study broadly and deeply, but the two aren't mutually exclusive. We have to be radically open-minded.</li>
          <li><strong>IX. First principles thinking:</strong> seek fundamental truth by always going to the source and always asking why! Rationalize from the first principles thinking. Ideas need to be mapped to objective reality to draw facts. The mindset of optimistic contrarian is when we think clearly from the ground up. Tactics provide the “what” and the “how.” But if we want results no matter how the landscape changes, we must also understand the “why.” By understanding the principles that shape our reality, our “why” will more accurately guide our thoughts and actions.</li>
          <li><strong>X. Life long learner and teacher:</strong> be curious and explore. Be uneducated so we are always learning. Learn by doing. Once we have mastered a topic teach a child in elementary-terms. Use space repetition technique to learn and Feynman's technique to teach. To become a learner we have to prevent two biggest barriers, ego and blind-spot. Be radically open-minded. Our need to be right and having strong opinions will prevent us from learning less and falling short of our potential. Everyone perceives reality differently which puts a blind-spot barriers. Using multi-disciplinary approach and working with insightful and diverse people will narrow down our blind spot. Knowing too much is “the curse of knowledge” which is the inability to realize that other people with less experience than us have don’t see the world through the same lens as we do. Hold thoughtful opinions loosely! Update our knowledge as we progress in life. Don't be married to an idea or be part of a cult.</li>
          <li><strong>XI. Contraraian view:</strong> challenge the status quo. It doesn't mean we want to do an inverse of everything. Be greedy when others are fearful and be fearful when others are greedy. Generally human behavior is taken far extreme so never follow the herd. Even self-criticize our own views by rejecting the hypothesis. Make sure to back up our contrarian hypothesis with data and research. This contradicts to being open-minded so be careful. If we don’t believe in ourselves, it’s hard to have contrarian ideas about the future. So believe in ourselves but self-belief must be balanced with self-awareness. Truth-seeking is hard and often painful, but it is what separates self-belief from self-delusion.</li>
          <li><strong>XII. Take nothing seriously and suffering:</strong> don't take life seriously. There is no such thing as being always happy. If we are sad, accept sadness. Accept every emotion to the fullest and ride it out with laughter and a sense of humor. Always reflect back and show gratitude. When the mind experiences something pleasant or unpleasant, simply treat things as they are, then there is no suffering. Experience joy or sadness without giving into craving. Suffering comes from craving. We will maintain peace of mind with the attitude of accepting “as is.”</li>
          <li><strong>XIII. Live deliberately and be present in now:</strong> how many of us settle into habits and simply live the same, year over and over again, waiting for some future event to occur before we start living? While we wait for that raise or career opportunity or ideal relationship, we tend to forget that life is happening now. Living deliberately is about awareness and purposeful action. If we take the necessary steps to craft each day deliberately, when our final day arrives we’ll be able to look back at a life brimming with joy, fulfillment and satisfaction. Today is all matters! Today, jettison the dead weight that’s holding us down.</li>
          <li><strong>XIV.Optimism:</strong> be realist but optimistic and make wise choices. Our decisions will define our process and path, so choose wisely. Asking a question in a positive manner generates a better response. Example: “'Preacher, can I smoke while I'm praying?' Answer: No. 'Preacher, can I pray whilst I'm smoking?' Answer: Of course you can.” Positive thinking is an incredibly powerful tool. Positive, proactive behavior spurs positive and proactive behavior. The pessimist sees the difficulty in every opportunity but an optimist sees the opportunity in every difficulty. Positive people don't just have a good day but they make it a good day. People who think positively usually see endless possibilities. Success doesn't create optimism but optimism leads to progress. Do not compare or judge others but cut negative negative energy out instantly.</li>
          <li><strong>XV. Frugality:</strong> consume to meet the basic needs, waste nothing and be content with what we have. But don’t make mistake frugality with letting go of our youth and having fun. Both fun and frugality can co-exist. People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.</li>
          <li><strong>XVI. Perseverance:</strong> stubbornness means being persistent. Don't give up or complain if something is not working out. Results are always on the opposite side of giving up. Being vulnerable is part of the process. In failing, there is humility. Accept any obstacles and overcome it. While obstacles persist, don't lose our cool. Be calm and solve problems rationally to overcome them. When in an unproductive state, start with a small win. Momentum in everyday life is highly underrated. It is all about effort. Reflect back when we fail to analyze symptoms from the disease. Enduring pain will help us take larger challenges and help us grow. If we have big goals, we will also fall hard but that is okay! It is part of the process. Struggling to get them will help us evolve. Courage (risk-taking) is the highest virtue. The journey of discovery is often tedious, filled with dead ends, and above all random but persistence through randomness will always prevail. Grit comes from learning we can get back up after we get knocked down.</li>
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
  }
`
