import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/telescope.svg'

const Logo = styled.img`
  width: 38px;
  height: 32px;
`

const Content = styled.div`
	margin: 0 auto;
	text-align: justify;
	height: 10%;
	width: 95%;
  padding-top: 25px;
  font-size: 12px;
`

const NavLink = styled(Link)`
  margin-left: 15px;
  margin-top: 20px;
  display: inline-block;
  position: relative;
  font-family: "Source Code Pro", monospace;
  color: #70a2d1;
  border-bottom: 3px solid #fff;

  :last-child {
    border-bottom: 3px solid #2789e5;
  }
  
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
        <NavLink to="/essays">Essays</NavLink>
        <NavLink to="/explore">Explore</NavLink>
        <NavLink to="/bookshelf">Books</NavLink>
        <NavLink to="/product">Product</NavLink>
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
