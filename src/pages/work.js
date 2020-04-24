import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

import humblepen from "../images/humble_pen.jpg"
import humblepen1 from "../images/hp_sketch.png"
import wisecharlie from "../images/wise_charlie.jpeg"
import wisecharlie1 from "../images/wise_charlie1.png"

const Content = styled.div`
  margin: 0 auto;
`

const WorkContainer = styled.div`
  display: block;
  background-color: #e7e7e7;
  padding: 15px 15px 5px 15px;
  margin-bottom: 20px;
  border-radius: 5px;
`

const Horizontal = styled.hr`
  border: 1px solid #0049fb;
  background-color: #0049fb;
`

const WorkContent = styled.div`
  text-align: left;
  border-radius: 3px;
`
const WorkImage = styled.div`
  max-width: 100%;
  border-radius: 3px;
  vertical-align: top;
`

const WorkTitle = styled.h2`
  padding-bottom: 2px;
  display: inline-block;
`

const Time = styled.p`
  font-weight: bold;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Work" />
      <Content>
      <h1>Work</h1>
      <p>My work has always consisted of some variation of building products. There is a pure joy in building and launching creative products. Building a product is like planting a seed while experimenting with new ideas and bringing chaos in order. Following the journey of building products has allowed me to learn about various topics— design, code, user experience, writing, ethics, marketing, sales, product prototyping, engineering, manufacturing, supply chain, financing and so much more. My work is still in pogress. Below you will find my past and present product stories.</p>
      <Horizontal/>
      <WorkContainer>
        <WorkTitle>Wise Charlie</WorkTitle>
        <WorkImage>
          <img src={wisecharlie} alt="wisecharlie"/>
          <img src={wisecharlie1} alt="wisecharlie"/>
        </WorkImage>
        <WorkContent>
          <Time>[ 2018 - Current ]</Time>
          <p><strong>Story</strong>: Charlie Munger has been a huge source of inspiration to me since I was a teenager. He is Warren Buffett's business partner at Berkshire Hathaway and famously known as one of the broadest thinkers. Munger coined the concept of mental models. Mental models are big ideas from big disciplines. When you collect models from lots of different fields, say psychology, literature, science, math, and so on— you will then be able to recognize lots of interesting connections. Models are reference points of understanding. Munger believes in collecting little packets of understanding for how things work, little models of the world. These mental models can help anyone ask the right questions by thinking critically. It is easy to pay homage to Charlie Munger’s latticework of mental models, but when you live it, you see why he is right. Knowing the key drivers and major ideas in a variety of fields is a huge source of leverage. It is difficult to study broadly and deeply, but the two aren't mutually exclusive. I wanted to create a central repository of these mental models which would explain them in a fun way.</p>
          <p><strong>Product</strong>: Wise Charlie is a collection of 100 mental model cards packaged in a beautiful and compact box. It is a pocket tool for independent thinking. Each model has fun artwork with a short definition followed by a funny example. I wanted the product to reflect humor because Charlie Munger in real life is hilarious.</p>
          <p><strong>Results</strong>: The project has been a challenge in many ways that I did not anticipate. Manufacturing a physical product is still harder than building a digital product. After successful prototyping and production, Wise Charlie is healthy and work in progress.</p>
          <p><strong>Instagram</strong>: <a href="https://www.instagram.com/heywisecharlie/"><strong>@heywisecharlie</strong></a></p>
          <p><strong>Website</strong>: <a href="https://wisecharlie.com/"><strong>www.wisecharlie.com</strong></a></p>
        </WorkContent>
      </WorkContainer>
      <Horizontal/>
      <WorkContainer>
        <WorkTitle>Morningstar Design System</WorkTitle>
        <WorkContent className="test">
          <Time>[ 2018 - Current ]</Time>
          <p><strong>Story</strong>: Morningstar is a financial services company with almost 60 plus, client facing,software products. This makes it hard to communicate design, code and user experience standards. Design system library help addresses the challenge of bringing design consistency across all client facing products. Another challenge we faced was to whether to support library for the newest and the brightest javascript frameworks. We build v1 with HTML and CSS and no support for javascript. Implementors would be responsible for the functionality. We introduced web components in v2 but the lack of support and knowledge around web components across the organization delayed the adoption. In v3, we rallied technology leaders to introduce Frontend Guild which would be responsible to guide and support javascript frameworks. This makes it easy for a design system team to solely focus on one framework as opposed to several. At Morningstar, we have products built on Angular, React, Backbone and Vue. v3 also introduced automated changelog, monorepo architecture using yarn, CI/CD and using Vue to build library components.</p>
          <p><strong>Website</strong>: <a href="http://designsystem.morningstar.com/"><strong>http://designsystem.morningstar.com/</strong></a></p>
        </WorkContent>
      </WorkContainer>
      <Horizontal/>
      <WorkContainer>
        <WorkTitle>Spend Out</WorkTitle>
        <WorkContent>
          <Time>[ 2013 ]</Time>
          <p><strong>Story</strong>: While working at a design and development shop, Doejo, I was asked to lead a team whose responsibility was to build and an expense tracking tool.</p>
          <p><strong>Product</strong>: An expense tracking tool for Uber, Airbnb and similar sharing economy platform contractors.</p>
          <p><strong>Results</strong>: We had a few hundred users and were close to signing a deal with Uber Chicago. I eventually left the product team to pursure a career as a developer shortly after.</p> 
          <p><strong>Media</strong>: <a href="http://www.chicagotribune.com/bluesky/originals/81828315-132.html">Chicago Tribune Coverage</a></p>
        </WorkContent>
      </WorkContainer>
      <Horizontal/>
      <WorkContainer>
        <WorkTitle>Humble Pen</WorkTitle>
        <WorkImage>
          <img src={humblepen1} alt="humblepen"/>
          <img src={humblepen} alt="humblepen"/>
        </WorkImage>
        <WorkContent>
          <Time>[ 2012 - 2015 ]</Time>
          <p><strong>Story</strong>: The project was inspired during my trip to Haiti in 2012. While searching for meaningful work, I stumbled upon a project which would support education for children in need and reignite one's love for writing. <i>One-for-One Giving</i> business model was fitting. During my trip to Haiti, I asked all the kids at the visiting school in Haiti to write a letter to me. As I read those inspiring letters, it was easy to conclude that kids all around the world are filled with joy, have creative passion and are curious thinkers. A 10-year-old kid wrote to me she aspires to become an astronaut when she grows up. Her letter reminded me there are no limits to dreaming bold, no matter where you are in the world. The project stalled several times during the journey. It was due to my lack of experience in building physical products, lack of knowledge in supply chain and interacting with industrial designers. Eventually, the product launched and it was a success but the project was not sustainable.</p>
          <p><strong>Product</strong>: Humble Pen was a hand-made designer pen made out of bamboo packaged in a beautiful box. Each pen also came with selected artist inspired postcards. For every sale, the product supported educational needs for children in Haiti, India and Cambodia.</p>
          <p><strong>Results</strong>: Project was shut down due to lack of focus, bad hiring and lack of fundamental economics in the supply chain of Humble Pen. Humble Pen also supported fair wages for artisans. This was naturally unsustainable in the long term. One-for-One Giving business model is not sustainable and I learned business and charity should be kept separate. Nonetheless, project was a success in its own right. Humble Pen supported education for almost 1000 kids.</p>
          <p><strong>Instagram</strong>: <a href="https://www.instagram.com/humblepen/"><strong>@humblepen</strong></a></p>
          <p><strong>Video</strong>: <a href="https://vimeo.com/humblepen"><strong>@vimeovideos</strong></a></p>
        </WorkContent>
      </WorkContainer>
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
