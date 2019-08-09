import React from "react"
import { graphql } from "gatsby"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Content = styled.div`
  margin: 0 auto;
  padding-bottom: 40px;
`

const Horizontal = styled.hr`
  border: 1px solid #2789e5;
  background-color: #3d9cdf;
`

const ReadingDateTime = styled.p`
  display: inline;
  color: #000;
  font-size: 11px;
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Explore" />
      <Content>
        <h1>Explore</h1>
        <p>My goal is to learn in bit size and document things for myself, and share with others. Unlike essays with deep analysis, this is a quick exploration and exit. The goal is to go on an adventure, follow a trail and exit. Below are the topics I have encountererd and documented. Topics include mostly code and design system for now.</p>
        <p>Last section is all about people I find interesting and some individual pieces I keep coming back to. “If I have seen further it is by standing on the shoulders of giants.” - Isaac Newton. The only way to climb the hierarchy of rational thinking is to stand on giant shoulders and learn from others. I widen my ears and illuminate my focal point when they have something to say.</p>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
          <Horizontal/>
          <h2>{node.frontmatter.title} </h2>
          <ReadingDateTime>({node.frontmatter.date})</ReadingDateTime>
          <Content dangerouslySetInnerHTML={{ __html: node.html }} />
          </div>
        ))}
        <Horizontal/>
        <h1>Interesting People, Blogs & Articles</h1>
        <ol>
          <h2>Shareholder Letters</h2>
          <li><a href="http://www.berkshirehathaway.com/">Warren Buffett</a></li>
          <li><a href="https://www.jpmorganchase.com/corporate/investor-relations/annual-report-proxy.htm">Jamie Dimon</a></li>
          <li><a href="https://www.oaktreecapital.com/insights/howard-marks-memos">Howard Marks</a></li>
          <li><a href="https://www.blackrock.com/corporate/investor-relations/larry-fink-chairmans-letter">Larry Fink</a></li>
          <li><a href="http://1icz9g2sdfe31jz0lglwdu48.wpengine.netdna-cdn.com/wp-content/uploads/2012/09/Seth-Klarman-Baupost-Group-Letters.pdf">Seth Klarman</a></li>
          <li><a href="https://ir.aboutamazon.com/annual-reports">Jeff Bezos</a></li>
          <li><a href="https://www.csisoftware.com/category/pres-letters/">Mark Leonard</a></li>
          <li><a href="https://papers.ssrn.com/sol3/cf_dev/AbsByAuth.cfm?per_id=77768">Clifford Asness</a></li>
          <li><a href="https://www.socialcapital.com/annual-letters/">Chamath Palihapitiya</a></li>
          <li><a href="https://www.adventur.es/annual-letters/">Brent Beshore</a></li>
          <h2>Valuation & Investing</h2>
          <li><a href="https://aswathdamodaran.blogspot.com/">Aswath Damodaran</a></li>
          <li><a href="http://michaelmauboussin.com/">Michael J. Mauboussin</a></li>
          <li><a href="https://www.collaborativefund.com/blog/authors/morgan/">Morgan Housel</a></li>
          <li><a href="http://jasonzweig.com/">Jason Zweig</a></li>
          <li><a href="https://25iq.com/">Tren Griffin</a></li>
          <li><a href="https://stratechery.com/">Ben Thompson</a></li>
          <li><a href="http://investorfieldguide.com/">Patrick O’Shaughnessy</a></li>
          <li><a href="http://abovethecrowd.com/">Bill Gurley</a></li>
          <li><a href="http://www.philosophicaleconomics.com/">Jessie Livermore (anonymous)</a></li>
          <li><a href="https://www.fooledbyrandomness.com/">Nassim Taleb</a></li>
          <li><a href="http://www.econtalk.org/">Russell Roberts</a></li>
          <h2>Broad Thinkers</h2>
          <li><a href="http://paulgraham.com/articles.html">Paul Graham</a></li>
          <li><a href="https://www.eugenewei.com/">Eugene Wei</a></li>
          <li><a href="http://reactionwheel.net/">Jerry Newmann</a></li>
          <li><a href="http://cdixon.org/">Chris Dixon</a></li>
          <li><a href="https://patrickcollison.com/">Patrick Collison</a></li>
          <li><a href="https://www.gwern.net/">Gwern Branwen</a></li>
          <li><a href="https://meltingasphalt.com/">Kevin Simler</a></li>
          <li><a href="https://www.kalzumeus.com/">Patrick McKenzie</a></li>
          <li><a href="https://www.perell.com/">David Perell</a></li>
          <h2>Code</h2>
          <li><a href="https://twitter.com/mbostock">Mike Bostock</a></li>
          <li><a href="https://twitter.com/NadiehBremer">Nadieh Bremer</a></li>
          <li><a href="https://twitter.com/chriscoyier">Chris Coyier</a></li>
          <li><a href="https://www.andrewng.org/">Andrew Ng</a></li>
          <li><a href="http://gregbrockman.com/">Greg Brockman</a></li>
          <li><a href="http://worrydream.com/">Bret Victr</a></li>
          <li><a href="https://blog.codinghorror.com/">Jeff Atwood</a></li>          
          <h2>Product</h2>
          <li><a href="http://juliezhuo.com/">Julie Zhuo</a></li>
          <li><a href="https://eightshapes.com/nathan-curtis.html">Nathan Curtis</a></li>
          <li><a href="https://designcode.io">Meng To</a></li>
          <li><a href="https://www.indiehackers.com/">Courtland Allen</a></li>
          <li><a href="https://twitter.com/pablostanley">Pablo Stanley</a></li>          
          <h2>Humanities, Art & Literature</h2>
          <li><a href="https://slatestarcodex.com/about/">Scott Alexander</a></li>
          <li><a href="http://swiss-miss.com">Tina Roth Eisenberg</a></li>
          <li><a href="https://www.brainpickings.org/">Maria Popova</a></li>
          <li><a href="https://www.oliverjeffers.com/">Oliver Jeffers</a></li>
          <li><a href="https://boydvarty.com/">Boyd Varty</a></li>
          <li><a href="http://blas.com">Blas Moros</a></li>
          <li><a href="https://fs.blog/">Shane Parrish</a></li>
          <h2>Science</h2>
          <li><a href="http://siddharthamukherjee.com/">Siddhartha Mukherjee</a></li>
          <li><a href="https://www.microsoft.com/en-us/research/project/tuva-richard-feynman/">Richard Feynman</a></li>
        </ol>
        <h2>Individual Pieces</h2>
        <ol>
          <li><a href="https://www.vulture.com/2018/11/jerry-saltz-how-to-be-an-artist.html">How to be an artist</a></li>
          <li><a href="http://blog.samaltman.com/productivity">Productivity</a></li>
          <li><a href="https://meaningness.com/geeks-mops-sociopaths">Geeks, mops and sociopaths</a></li>
          <li><a href="https://www.edge.org/conversation/yuval_noah_harari-daniel_kahneman-death-is-optional">Death is optional</a></li>
          <li><a href="https://jseliger.files.wordpress.com/2012/04/how-to-think-about-science-pdf.pdf">How to think about science</a></li>
          <li><a href="https://www.newyorker.com/magazine/2009/06/01/the-cost-conundrum">The cost conundrum</a></li>
          <li><a href="https://kk.org/thetechnium/1000-true-fans/">1000 true fans</a></li>
          <li><a href="http://www.issendai.com/psychology/sick-systems.html">Sick systems</a></li>
          <li><a href="http://augmentingcognition.com/ltm.html">LTM</a></li>
          <li><a href="https://jamesclear.com/luck-vs-hard-work">Luck vs hard work</a></li>
          <li><a href="http://blakemasters.com/peter-thiels-cs183-startup">Peter Thiel cs183 essays</a></li>
          <li><a href="https://theamericanscholar.org/solitude-and-leadership/#.XTSUg5NKifX">Solitude and leadership</a></li>
          <li><a href="https://www.albertbridgecapital.com/drew-views/2019/6/17/stay-in-the-game">Stay in the game</a></li>
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
      filter: { fileAbsolutePath: { regex: "/content/explore/" } }
      sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          html
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            path
          }
        }
      }
    }
  }
`
