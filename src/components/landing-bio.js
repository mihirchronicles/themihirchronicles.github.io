import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: auto;
	text-align: left;
	height: 60%;
	width: 85%;
  font-size: 14px;
  overflow-x:hidden;
  overflow-y:auto;
  position: absolute;
  left: 0;
  right: 0;
  -ms-overflow-style: none;  /*  IE 10+ */ 
  overflow: -moz-scrollbars-none;  /*  Firefox */
`

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 68vh;
`

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
`

const NameHeader = styled.h1`
  margin-bottom: 10px;
`

const Cheers = styled.h3`
  margin-bottom: 10px;
`
const Button = styled.button`
  background: #2789e5;
  background-image: -webkit-linear-gradient(top, #2789e5, #2789e5);
  background-image: -moz-linear-gradient(top, #2789e5, #2789e5);
  background-image: -ms-linear-gradient(top, #2789e5, #2789e5);
  background-image: -o-linear-gradient(top, #2789e5, #2789e5);
  background-image: linear-gradient(to bottom, #2789e5, #2789e5);
  -webkit-border-radius: 25;
  -moz-border-radius: 25;
  border-radius: 25px;
  font-family: Reenie Beanie;
  font-size: 17px;
  padding: 10px 10px 10px 10px;
  border: solid #8cb4da 2px;
  text-decoration: none;
  position: absolute;
  left: 4px;
`

const ButtonLink = styled.a`
  color: #ffffff; 
`

const LandingBio = () => (
  <StaticQuery
    query={graphql`
      query LandingSiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <OuterContainer>
        <Container>
          <NameHeader>{data.site.siteMetadata.title}</NameHeader>
            <Description>Me here, here!</Description>
            <Description>Building products at <a href="http://www.morningstar.com/">Morningstar </a>and <a href="https://wisecharlie.com/">Wise Charlie</a>. Curious about investment analysis. Fond of art, history, hiking & telescopes.</Description>
            <Description>Book nerd. Enjoy building things. Process itself is the goal.</Description>
            <Cheers>- To Adventures & Fellowship!</Cheers>
            <Button type="text"><ButtonLink href="/writing">Essays!</ButtonLink></Button>
        </Container>
      </OuterContainer>
    )}
  />
)

NameHeader.propTypes = {
  siteTitle: PropTypes.string,
}

NameHeader.defaultProps = {
  siteTitle: ``,
}

export default LandingBio
