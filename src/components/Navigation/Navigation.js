import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        H
      </LinkStyled>
      <LinkStyled to="/create">C</LinkStyled>
      <LinkStyled to="/search">S</LinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  grid-row: 3 / 4;
  display: flex;
`

const LinkStyled = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: cyan;
  color: white;
  text-decoration: none;

  &.active {
    background: salmon;
  }
`
