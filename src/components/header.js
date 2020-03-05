import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/telescope.svg'

const Logo = styled.img`
  width: 38px;
  height: 32px;
  margin-bottom: 5px;
  margin-left: 10px;
`

const Content = styled.div`
	text-align: justify;
	height: 10%;
  width: 96%;
  padding-top: 25px;
  font-size: 12px;

  @media screen and (max-width: 600px) {
    {
      padding-top: 5px;
    }
  }
`

const NavLink = styled(Link)`
  margin-left: 12px;
  margin-top: 5px;
  display: inline-block;
  position: relative;
  font-family: "Source Code Pro", monospace;
  color: #3d9cdf;
  border-bottom: 3px solid #fff;
  
  :hover {
    border-bottom: 3px solid #2789e5;
  }
`

const HomeLink = styled(NavLink)`
  margin-left: 0;
`

const SiteHeader = styled.header`
  background: transparent;
  display: flex;
  align-content: center;
  justify-content: center;
`

const Header = ({ siteTitle }) => (
  <SiteHeader>
    <Content>
    <HomeLink to="/">
      <Logo src={logo} alt="MihirChronicles"/>
    </HomeLink>
      <p>
        <NavLink to="/notes">Notes</NavLink>
        <NavLink to="/bookshelf">Books</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/about">Me</NavLink>
      </p>
    </Content>
  </SiteHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
