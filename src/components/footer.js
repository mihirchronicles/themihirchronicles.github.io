import styled from "@emotion/styled"
import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const FooterLink = styled.a`
  margin-left: 15px;
`

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  text-align: right;
  width: 85%;
  height: 10%;
  bottom: 0;
  left: 0;
  right: 0;
`

const Footer = () => (
    <FooterContainer>
    <ul>
        <li><FooterLink href="https://twitter.com/mihirchronicles"><FontAwesomeIcon icon={["fab", "twitter"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
        <li><FooterLink href="https://www.linkedin.com/in/mihirchronicles"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
        <li><FooterLink href="https://github.com/mihirchronicles"><FontAwesomeIcon icon={["fab", "github"]} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
        <li><FooterLink href="mailto:mihirptl89@gmail.com"><FontAwesomeIcon icon={"envelope"} size="2x" style={{color:"#70a2d1"}} /></FooterLink></li>
    </ul>
    </FooterContainer>
)

export default Footer
