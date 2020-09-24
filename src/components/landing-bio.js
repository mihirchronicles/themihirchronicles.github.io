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
  margin-bottom: 20px;
`

const Button = styled.button`
  color: #ffffff;
  background: #0049fb;
  -webkit-border-radius: 25;
  -moz-border-radius: 25;
  border-radius: 25px;
  padding: 10px 10px 10px 10px;
  border: solid #0049fb 2px;
  text-decoration: none;
  position: absolute;
  margin-top: 10px;
  font-weight: bolder;

  :hover {
    cursor: pointer;
    background: #000000;
    border: #0049fb;
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
            <Description>Product at <a href="http://www.morningstar.com/">Morningstar</a> and <a href="https://wisecharlie.com/">Wise Charlie</a>. Fond of reading, investing, art, hiking & telescopes. Process itself is the goal <FontAwesomeIcon icon="cogs"/>.</Description>
            <Description><strong>Scientia Potentia Est</strong></Description>
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
