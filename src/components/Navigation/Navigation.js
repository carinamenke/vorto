import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import { AiOutlineHome } from 'react-icons/ai'
import { IoIosSearch } from 'react-icons/io'
import { FiPlus } from 'react-icons/fi'

export default function Navigation() {
  return (
    <NavigationStyled>
      <LinkStyled exact to="/">
        <AiOutlineHome className="home-icon" />
      </LinkStyled>
      <LinkStyled to="/create">
        <AddButtonStyled>
          <FiPlus className="add-icon" />
        </AddButtonStyled>
      </LinkStyled>
      <LinkStyled to="/search">
        <IoIosSearch className="search-icon" />
      </LinkStyled>
    </NavigationStyled>
  )
}

const NavigationStyled = styled.nav`
  grid-row: 3 / 4;
  display: flex;
  box-shadow: 0 -1px 18px 0 var(--grey-color-shadow-light);
`

const LinkStyled = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  color: var(--text-color-white);
  text-decoration: none;

  .home-icon,
  .add-icon,
  .search-icon {
    width: 25px;
    height: 25px;
  }

  .home-icon,
  .search-icon {
    color: var(--grey-color-mid1);
  }

  &.active {
    .home-icon,
    .search-icon {
      color: var(--primary-color);
    }
  }
`

const AddButtonStyled = styled.a`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: solid 8px var(--background-color);
  position: absolute;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--grey-color-mid1);

  :active {
    background: var(--primary-color);
  }
`
