import React from "react"
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
      <h1>Explore</h1>
      <Description>The theme here is to explore by standing tall on the shoulder of giants. “If I have seen further it is by standing on the shoulders of giants.” - Isaac Newton. Sir Isaac Newton knew the trick when he was on a quest for finding gravity. Besides books, I follow these interesting people below. I widen my ears and illuminate my focal point when they have something to say. The only way to climb the hierarchy of rational thinking is to stand on giant shoulders.</Description>
        <h2>People</h2>
        <ol>
          <h3>Shareholder Letters</h3>
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
          <h3>Valuation & Investing</h3>
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
          <h3>Startups & Tech</h3>
          <li><a href="http://paulgraham.com/articles.html">Paul Graham</a></li>
          <li><a href="https://twitter.com/wolfejosh">Josh Wolfe</a></li>
          <li><a href="https://www.eugenewei.com/">Eugene Wei</a></li>
          <li><a href="http://reactionwheel.net/">Jerry Newmann</a></li>
          <li><a href="http://cdixon.org/">Chris Dixon</a></li>
          <li><a href="https://blog.codinghorror.com/">Jeff Atwood</a></li>
          <li><a href="https://patrickcollison.com/">Patrick Collison</a></li>
          <li><a href="https://www.gwern.net/">Gwern Branwen</a></li>
          <li><a href="https://meltingasphalt.com/">Kevin Simler</a></li>
          <li><a href="https://twitter.com/jasonfried">Jason Fried</a></li>
          <li><a href="https://twitter.com/dhh">DHH</a></li>
          <li><a href="https://www.kalzumeus.com/">Patrick McKenzie</a></li>
          <li><a href="https://www.perell.com/">David Perell</a></li>
          <h3>Code</h3>
          <li><a href="https://twitter.com/mbostock">Mike Bostock</a></li>
          <li><a href="https://twitter.com/NadiehBremer">Nadieh Bremer</a></li>
          <li><a href="https://twitter.com/chriscoyier">Chris Coyier</a></li>
          <li><a href="https://www.andrewng.org/">Andrew Ng</a></li>
          <li><a href="http://worrydream.com/">Bret Victr</a></li>
          <li><a href="http://gregbrockman.com/">Greg Brockman</a></li>          
          <h3>Product</h3>
          <li><a href="http://juliezhuo.com/">Julie Zhuo</a></li>
          <li><a href="https://eightshapes.com/nathan-curtis.html">Nathan Curtis</a></li>
          <li><a href="https://designcode.io">Meng To</a></li>
          <li><a href="https://www.indiehackers.com/">Courtland Allen</a></li>
          <li><a href="https://twitter.com/pablostanley">Pablo Stanley</a></li>          
          <h3>Humanities, Art & Literature</h3>
          <li><a href="https://slatestarcodex.com/about/">Scott Alexander</a></li>
          <li><a href="http://swiss-miss.com">Tina Roth Eisenberg</a></li>
          <li><a href="https://www.brainpickings.org/">Maria Popova</a></li>
          <li><a href="https://www.oliverjeffers.com/">Oliver Jeffers</a></li>
          <li><a href="https://boydvarty.com/">Boyd Varty</a></li>
          <li><a href="http://blas.com">Blas Moros</a></li>
          <li><a href="https://fs.blog/">Shane Parrish</a></li>
          <h3>Science</h3>
          <li><a href="http://siddharthamukherjee.com/">Siddhartha Mukherjee</a></li>
          <li><a href="https://www.microsoft.com/en-us/research/project/tuva-richard-feynman/">Richard Feynman</a></li>
        </ol>
        <h2>Long Forms</h2>
        <p>Below are also some of the most thought provoking long form articles that I go back to, time and time again.</p>
        <ol>
          <li><a href="https://www.vulture.com/2018/11/jerry-saltz-how-to-be-an-artist.html">How to be an artist?</a></li>
          <li><a href="http://blog.samaltman.com/productivity">Productivity</a></li>
          <li><a href="https://meaningness.com/geeks-mops-sociopaths">Geeks, mops and sociopaths</a></li>
          <li><a href="https://www.edge.org/conversation/yuval_noah_harari-daniel_kahneman-death-is-optional">Death is optional</a></li>
          <li><a href="https://jseliger.files.wordpress.com/2012/04/how-to-think-about-science-pdf.pdf">How to think about science?</a></li>
          <li><a href="https://www.newyorker.com/magazine/2009/06/01/the-cost-conundrum">The cost conundrum</a></li>
          <li><a href="https://kk.org/thetechnium/1000-true-fans/">1000 true fans</a></li>
          <li><a href="http://www.issendai.com/psychology/sick-systems.html">Sick systems</a></li>
          <li><a href="http://augmentingcognition.com/ltm.html">LTM</a></li>
          <li><a href="https://jamesclear.com/luck-vs-hard-work">Luck vs hard work</a></li>
          <li><a href="http://blakemasters.com/peter-thiels-cs183-startup">Peter Thiel cs183 essays</a></li>
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
