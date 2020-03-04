import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"

const Container = styled.div`
  margin: 0 auto;
	text-align: left;
	height: 60%;
	width: 95%;
  font-size: 14px;
  overflow-x:hidden;
  overflow-y:auto;
  position: absolute;
  padding-left: 15px;
  left: 0;
  right: 0;
  -ms-overflow-style: none;  /*  IE 10+ */ 
  overflow: -moz-scrollbars-none;  /*  Firefox */

  @media screen and (max-width: 600px) {
    {
      height: 65%;
    }
  }
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
  line-height: 30px;
`

const NameHeader = styled.h1`
  margin-bottom: 10px;
`

const Cheers = styled.h3`
  margin-bottom: 10px;
  font-family: Reenie Beanie,Arial,Helvetica,sans-serif,cursive;
  font-size: 1.50rem;
`

const Button = styled.button`
  color: #ffffff;
  background: #2789e5;
  -webkit-border-radius: 25;
  -moz-border-radius: 25;
  border-radius: 25px;
  font-family: Reenie Beanie;
  font-size: 17px;
  padding: 10px 10px 10px 10px;
  border: solid #2789e5 2px;
  text-decoration: none;
  position: absolute;
  left: 20px;
  margin-top: 10px;

  :hover {
    cursor: pointer;
    background: #373737;
    border: #3d9cdf;
  }

  @media screen and (max-width: 600px) {
    {
      display: none;
    }
  }

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
            <Description>Building products at <a href="http://www.morningstar.com/">Morningstar </a>and <a href="https://wisecharlie.com/">Wise Charlie</a>. Fond of art, design, hiking & telescopes. Book nerd <FontAwesomeIcon icon="book"/>. Enjoy building things <FontAwesomeIcon icon="brush"/>. Process itself is the goal <FontAwesomeIcon icon="cogs"/>.</Description>
            <Cheers>- To Adventures & Fellowship!</Cheers>
            <ButtonLink href="/notes"><Button type="text">Notes</Button></ButtonLink> 
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
