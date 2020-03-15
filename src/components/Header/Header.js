import React from 'react'
import styled from 'styled-components/macro'

export default function Header() {
  return (
    <HeaderStyled>
      <img src="./images/vorto_logo.png" alt="vorto" className="brand-logo" />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.section`
  grid-row: 1 / 2;
  display: flex;
  align-items: center;

  .brand-logo {
    width: auto;
    height: 40px;
    margin-left: 15px;
  }
`
