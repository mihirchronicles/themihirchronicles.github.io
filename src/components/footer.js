import styled from "@emotion/styled"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = styled.a`
  margin-left: 15px;
`

const FooterContainer = styled.footer`
  margin: auto 0;
  margin-top: 20px;
  height: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  justify-content: center;
`
const List = styled.ul`
  margin-left: -20px;
  text-align: center;

  li {
    float: left;
    list-style-type: none;
  }
`

const Footer = () => (
    <FooterContainer>
    <List>
        <li><FooterLink href="https://twitter.com/mihirchronicles"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" style={{color:"#0049fb"}} /></FooterLink></li>
        <li><FooterLink href="https://www.linkedin.com/in/mihirchronicles"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" style={{color:"#0049fb"}} /></FooterLink></li>
        <li><FooterLink href="mailto:mihirptl89@gmail.com"><FontAwesomeIcon icon="envelope" size="2x" style={{color:"#0049fb"}} /></FooterLink></li>
    </List>
    </FooterContainer>
)

export default Footer
