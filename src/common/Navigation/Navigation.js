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
  grid-row: 4 / 5;
  display: flex;
  box-shadow: 0 -1px 18px 0 var(--color-grey-shadow-light);
`

const AddButtonStyled = styled.button`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  border: solid 8px var(--color-background);
  position: relative;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-grey-mid1);
  color: var(--color-text-white);

  :active {
    background: var(--color-primary);
  }
`

const LinkStyled = styled(NavLink)`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  background: var(--color-background);
  color: var(--color-text-white);
  text-decoration: none;

  .home-icon,
  .add-icon,
  .search-icon {
    min-width: 25px;
    min-height: 25px;
  }

  .home-icon,
  .search-icon {
    color: var(--color-grey-mid1);
  }

  &.active {
    .home-icon,
    .search-icon {
      color: var(--color-primary);
    }
  }
`
