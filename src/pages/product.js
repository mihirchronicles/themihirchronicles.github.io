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

const Product = styled.div`
  padding: 10px 0 0 0;t
`

const ProductTitle = styled.h2`
  margin: 0 auto;
`

const Time = styled.p`
  display: inline;
  color: #000;
  margin-bottom: 5px;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Product" />
      <Content>
      <h1>Product</h1>
      <Description>There is a pure joy in building and launching creative products. Building a product is like planting a seed while experimenting with new ideas. Visual language is a huge part of my product story telling. Following the journey of product building has allowed me to learn about various topics—design, code, user experience, writing, ethics, marketing, sales, product prototyping, engineering, manufacturing, supply chain, financing and so much more. My work is still in pogress. Below you will find my past and present product stories.</Description>
      <ol>
      <li>
      <Product>
        <ProductTitle>Wise Charlie</ProductTitle>
        <Time>2018-Current</Time>
        <p><strong>Story: </strong>Charlie Munger has been a huge source of inspiration to me since I was a teenager. He is Warren Buffett's business partner at Berkshire Hathaway and famously known as one of the broadest thinkers. Munger coined the concept of mental models. Mental models are big ideas from big disciplines. When you collect models from lots of different fields — say psychology, literature, science, math, and so on–you will then be able to recognize lots of interesting connections. Models are reference points of understanding. Munger believes in collecting little packets of understanding for how things work, little models of the world. These mental models can help anyone ask the right questions by thinking critically. It is easy to pay homage to Charlie Munger’s latticework of mental models, but when you live it, you see why he is right. Knowing the key drivers and major ideas in a variety of fields is a huge source of leverage. It is difficult to study broadly and deeply, but the two aren't mutually exclusive. I wanted to create a central repository of these mental models which would explain them in a fun way.</p>
        <p><strong>Product: </strong>Wise Charlie is a collection of 100 mental model cards packaged in a beautiful and compact box. It is a pocket tool for a mind. Each model has fun artwork with a short definition followed by a funny example. I wanted the product to reflect humor because Charlie Munger in real life is hilarious.</p>
        <img src={wisecharlie} alt="wisecharlie"/>
        <img src={wisecharlie1} alt="wisecharlie"/>
        <p><strong>Results: </strong>The project has been a challenge in many ways that I did not anticipate. Manufacturing a physical product is still harder than building a digital product. After successful prototyping and production, Wise Charlie is healthy and work in progress.</p>
        <p><strong>Instagram: </strong><a href="https://www.instagram.com/heywisecharlie/"><strong>@heywisecharlie</strong></a></p>
        <p><strong>Website: </strong><a href="https://wisecharlie.com/"><strong>www.wisecharlie.com</strong></a></p>
      </Product>
      </li>
      <li>
      <Product>
        <ProductTitle>Morningstar Design System</ProductTitle>
        <Time>2018-Current</Time>
        <p><strong>In-Progress: </strong>This is an on-going project to standardize and speed up the process of building digital products at Morningstar.</p>
        <p><strong>Website: </strong><a href="http://designsystem.morningstar.com/"><strong>http://designsystem.morningstar.com/</strong></a></p>
      </Product>
      </li>
      <li>
      <Product>
        <ProductTitle>Spend Out</ProductTitle>
        <Time>2013</Time>
        <p><strong>Story: </strong>While working at a design and development shop, Doejo, I was asked to lead a team whose responsibility was to build and an expense tracking tool.</p>
        <p><strong>Product: </strong>An expense tracking tool for users of Uber, Airbnb and similar sharing economy platforms.</p>
        <p><strong>Results: </strong>We had a few hundred users and were close to signing a deal with Uber Chicago. I eventually left the product team to pursure a career as a developer shortly after. </p> 
        <p><strong>Media: </strong> <a href="http://www.chicagotribune.com/bluesky/originals/81828315-132.html">Chicago Tribune Coverage</a></p>
      </Product>
      </li>
      <li>
      <Product>
        <ProductTitle>Humble Pen</ProductTitle>
        <Time>2102-2015</Time>
        <p><strong>Story: </strong>The project was inspired during my trip to Haiti in 2012. While searching for meaningful work, I stumbled upon a project which would support education for children in need and reignite one's love for writing. <i>One-for-One Giving</i> business model was fitting. During my trip to Haiti, I asked all the kids at the visiting school in Haiti to write a letter to me. As I read those inspiring letters, it was easy to conclude that kids all around the world are filled with joy, have creative passion and are curious thinkers. A 10-year-old kid wrote to me she aspires to become an astronaut when she grows up. Her letter reminded me there are no limits to dreaming bold, no matter where you are in the world. The project stalled several times during the journey. It was due to my lack of experience in building physical products, lack of knowledge in supply chain and interacting with industrial designers. Eventually, the product launched and it was a success but the project was not sustainable.</p>
        <p><strong>Product: </strong>Humble Pen was a hand-made designer pen made out of bamboo packaged in a beautiful box. Each pen also came with selected artist inspired postcards. For every sale, the product supported educational needs for children in Haiti, India and Cambodia.</p>
        <img src={humblepen1} alt="humblepen"/>
        <img src={humblepen} alt="humblepen"/>
        <p><strong>Results: </strong>Project was shut down due to lack of focus, bad hiring and lack of fundamental economics in the supply chain of Humble Pen. Humble Pen also supported fair wages for artisans. This was naturally unsustainable in the long term. One-for-One Giving business model is not sustainable and I learned business and charity should be kept separate. Nonetheless, project was a success in its own right. Humble Pen supported education for almost 1000 kids.</p>
        <p><strong>Instagram: </strong><a href="https://www.instagram.com/humblepen/"><strong>@humblepen</strong></a></p>
        <p><strong>Video: </strong><a href="https://vimeo.com/humblepen"><strong>@vimeovideos</strong></a></p>
      </Product>
      </li>
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
