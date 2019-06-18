import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"

import logo from '../images/telescope.svg'

const Logo = styled.div`
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
    <Logo>
      <img src={logo} alt="MihirChronicles"/>
    </Logo>
      <p>
        <HomeLink to="/">Home</HomeLink>
        <NavLink to="/writing">Writing </NavLink>
        <NavLink to="/bookshelf">Bookshelf</NavLink>
        <NavLink to="/product">Product</NavLink>
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
