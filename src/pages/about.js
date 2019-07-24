import React from "react"
import { graphql } from 'gatsby'
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore" />
      <Content>
      <h1>About</h1>
      <Description>My goal is to learn, share, and explore in public. Selfishly speaking, self-care is really important to me so I spend a lot of time thinking about ways to improve my health, soul, and spirit. However, this allows me to be unselfish with others due to the surplus of positive energy by working towards the good habits (nowhere close but always trying). The misssion is to keep building on this positive momentum. Below are some of the challenges I have taken on in the past few years, the questions I am pondering on, and the principles I try to live by.</Description>
        <h2>Challenges</h2>
        <ol>
          <li><strong>2010:</strong> visit Berkshire Hathaway shareholder meeting in Nebraska to listen to Warren Buffett and Charlie Munger.</li>
          <li><strong>2012:</strong> visit Haiti and learn about education and school systems. Recap <a href="https://vimeo.com/80200375">here</a>.</li>
          <li><strong>2013:</strong> travel with a one-way ticket for a backpacking trip in India. Recap <a href="https://www.youtube.com/watch?v=qUGvvCtpIaY">here</a>.</li>
          <li><strong>2014:</strong> launch and build a physical product. See the project <a href="https://www.instagram.com/humblepen/">here</a>.</li>
          <li><strong>2016:</strong> move somewhere where there is no family or friends to learn to write code and spend time in the mountains in solitude. Ended up in Utah for 9 months.</li>
          <li><strong>2018:</strong> learn to think independentally by using mental models. See the project <a href="https://www.wisecharlie.com">here</a>.</li>
          <li><strong>2019:</strong> learn and share in public. See the essay section <a href="/essays">here</a>. </li>
        </ol>
        <h2>Questions</h2>
        <ol>
          <li>How can one build surplus of positive energy, given we have the control over the energy production?</li>
          <li>How can telescopes drive curiosity and imagination for young kids?</li>
          <li>What are some of the ways coaches provide feedback loop to young kids? What if you scale this to every child?</li>
          <li>How can every human being help towards the cause of restoring art, history, culture and natural resources?</li>
        </ol>
        <h2>Principles</h2>
        <ol>
          <li><strong>Honesty:</strong> without honesty none of the values below matter. You not only have to be honest to others but to yourself, your subconscious and every decision you make. Honesty is the highest honor you will carry. It'll help you preserve your reputation and integrity. Be ruthless if integrity is ever being questioned. Protect your reputation. It takes years to build it and minutes to ruin it. If you don’t ask, you don’t get. If you don’t question you don’t know. Authenticity and originality is born when you are honest to yourself and others around you. Owning our actions can be incredibly difficult to do. We aren’t programmed to expose our egos or make ourselves vulnerable when we make mistakes or do something stupid. But one of the most powerful ways to make giant leaps forward in our lives is to not only accept that we’ll screw up, but to actively seek out correction when we do. When we refuse to accept ownership of our mistakes, we’ve warped the feedback loop we rely on to make better decisions in the future.</li>
          <li><strong>Respect and Be Kind:</strong> respect everything around you - people, tasks, time, money and relationships. If you can't respect them then don't be around them. Be empathetic! You can respect others by giving them 3 things: being reliable, giving them 100% attention and making them feel good about themselves. You never know what others are going through. Be compassionate, respectful and never forget to smile.</li>
          <li><strong>Intense Focus:</strong> focus is a force multiplier on work. Without intense focus everything else fails. And focusing on too many things is a recipe for a failure. Focus on only 1 thing until you finish it. Cultivate trust and attention. Protect your attention like you protect your friends, family, and money. Commit to your goal with everything you have — for a season. Direction over speed. If you’re pointed in the wrong direction, it doesn’t matter how fast you’re traveling. Inversely, if you’re locked on to your desired destination, all progress is positive, no matter how slow you’re going. You’ll reach your destination eventually with intense focus and ruthlessly prioritizing!</li>
          <li><strong>Hard Work and Hard Problems:</strong> skills will only take you far but work ethic will define your character. Wake up before the sunrise and work till the sunset. Also work on hard problems. When you solve hard problems, you are alive and relieved after solving. You can get to about the 90th percentile in your field by working either smart or hard, which is still a great accomplishment. But getting to the 99th percentile requires both—you will be competing with other very talented people who will have great ideas and be willing to work a lot. Working a lot comes with huge life trade-offs but momentum compounds, and hard work begets progress.</li>
          <li><strong>Long-Term:</strong> always think about your objectives with a long-term view. Compound Interest is the most underrated law. Extreme patience with extreme focus with extreme decisiveness with a long-term view will do magic and wonders. It’s amazing how much of a competitive advantage can be found by simply having the disposition to wait longer than your competitors.</li>
          <li><strong>Repition, Effort & Deliberate Practice:</strong> be so good that they can't ignore you. Key to becoming good to so good is to do boring tasks over and over again until you perfect it. Doing new and cool things is sexy but doing repetitive task is not. It will take many tries till you perfect your art. Use space repetition technique and focused/diffused mode. Consistency is the playground for perfection. Effort counts not passion; effort counts not talent. Deliberate practice is a key to repetition. Structured but flexible repetition is the best productivity tool. It doesn't matter what you are trying to become better at, if you only do the work when it’s convenient or exciting, then you’ll never be consistent enough to achieve remarkable results. The ability to show up everyday, stick to the schedule, and do the work — especially when you don't feel like it — is so valuable that it is literally all you need to become better 99% of the time.</li>
          <li><strong>Process Without Expectations:</strong> expectations lead to disappointments. Don't expect. Trust the process. The means and the end are the same. This is very important. When the process itself is the goal, magical things happen. Growth without goals is the ultimate goal. Take small steps in a sequence but with urgency. Smooth sailing is fast selling. Have a life don’t have a career! Goals have an endpoint. System (process) don’t. Growth or progress which is structured and habitual, but adaptable and not pre-determined through the setting of rigid long-term goals.</li>
          <li><strong>Generalist Polymath View:</strong> a generalist mindset can be a huge advantage. It is easy to pay homage to Charlie Munger’s latticework of mental models, but when you live it, you see why he is right. Knowing the key drivers and major ideas in variety of fields is a huge source of leverage. It is difficult to study broadly and deeply, but the two aren't mutually exclusive. You have to be radically open-minded.</li>
          <li><strong>First Principles Thinking:</strong> seek fundamental truth by always going to the source and always asking why! Rationalize from the first principles thinking. Ideas need to be mapped to objective reality to draw facts. The mindset of optimistic contrarian is when you think clearly from the ground up. Tactics provide the “what” and the “how.” But if you want results no matter how the landscape changes, you must also understand the “why.” By understanding the principles that shape your reality, your “why” will more accurately guide your thoughts and actions.</li>
          <li><strong>Life Long Learner and Teacher:</strong> be a life long learner. Be curious and explore. Be uneducated so you are always learning. Learn by doing. Be a life long teacher. Once you have mastered a topic teach a child in elementary-terms. Use space repetition technique to learn and Feynman's technique to teach. To become a learner you have to prevent two biggest barriers, ego and blind-spot barriers. Be radically open-minded. Your need to be right and having strong opinions will prevent you from learning less and falling short of your potential. Everyone perceives reality differently which puts a blind-spot barriers. Using multi-disciplinary approach and working with insightful and diverse people will narrow down your blind spot. Knowing too much is “the curse of knowledge” which is the inability to realize that other people with less experience than you have don’t see the world through the same lens you do. Hold thoughtful opinions loosely! Update your knowledge as you progress in life. Don't be married to an idea or be part of cult.</li>
          <li><strong>Contraraian View:</strong> challenge the status quo. It doesn't mean you want to do an inverse of everything. Be greedy when others are fearful and be fearful when others are greedy. Generally human behavior is taken far extreme so never follow the herd. Even self-criticize your own views by rejecting the hypothesis. Make sure to back up your contrarian hypothesis with data and research. This contradicts to being open-minded so be careful.  If you don’t believe in yourself, it’s hard to let yourself have contrarian ideas about the future. So believe in yourself but self-belief must be balanced with self-awareness. Truth-seeking is hard and often painful, but it is what separates self-belief from self-delusion.</li>
          <li><strong>Take Nothing Seriously & Suffering:</strong> don't take yourself seriously. Don't take life seriously. There is no such thing as being always happy. If you are sad, accept sadness. Accept every emotion to the fullest and ride it out with laughter and a sense of humor. Always reflect back and show gratitude. When the mind experiences something pleasant or unpleasant, it simply understand things as they are, then there is no suffering. Experience joy or sadness without giving into craving. Suffering comes from craving. You will maintain peace of mind with the attitude of accepting “as it is.”</li>
          <li><strong>Live Deliberately — Now:</strong> how many of us settle into habits and simply live the same year over and over again, waiting for some future event to occur before we start living? While we wait for that raise or career opportunity or ideal relationship, we tend to forget that life is happening *now*. Living deliberately is about awareness and purposeful action. If we take the necessary steps to craft each day deliberately, when our final day arrives we’ll be able to look back at a life brimming with joy, fulfillment and satisfaction. Today is all matters! Today, jettison the dead weight that’s holding you down.</li>
          <li><strong>Optimism & Positivity:</strong> be realist but optimistic and make wise choices. Your decisions will define your process and path, so choose wisely. Asking a question in a positive manner generates a better response. Example: "'Preacher, preacher can I smoke while I'm praying?' Answer: no. 'Preacher, preacher can I pray whilst I'm smoking?' Answer: Of course you can." Positive thinking is an incredibly powerful tool. Positive, proactive behavior spurs positive, proactive behavior. The pessimist sees the difficulty in every opportunity; an optimist sees the opportunity in every difficulty. Positive people don't just have a good day; they make it a good day. People who think positively usually see endless possibilities. Success doesn't create optimism but optimism leads to progress. Do not compare yourself with others and neither judge them. Cut negative people and negative energy out instantly.</li>
          <li><strong>Frugality:</strong> consume to meet the basic needs, waste nothing and be content with what you have. But don’t make mistake frugality with letting go of your youth and having fun. Both fun and frugality can co-exist. People who live far below their means enjoy a freedom that people busy upgrading their lifestyles can’t fathom.</li>
          <li><strong>Perseverance:</strong> stubbornness means being persistent. Don't give up or complain if something is not working out. Results are always on the opposite side of giving up. Being vulnerable is part of the process. In failing, there is humility. Accept any obstacles in your way and overcome it. While obstacles persist, don't lose your cool. Be calm and solve problems rationally to overcome them. When in an unproductive state, start with a small win. Momentum in everyday life is highly underrated. Its all about effort. Reflect back when you fail to analyze symptoms from the disease. Enduring pain will help you take larger challenges and help you grow. If you have big goals, you will also fall hard but that is okay! It is part of the process. Struggling to get them will help you evolve. Courage (risk-taking) is the highest virtue. The journey of discovery is often tedious, filled with dead ends, and above all random but persistence through randomness will always prevail. Grit comes from learning you can get back up after you get knocked down.</li>
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
