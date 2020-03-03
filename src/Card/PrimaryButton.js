import React from 'react'
import styled from 'styled-components/macro'

export default function PrimaryButton(props) {
  return <PrimaryButtonStyled>{props.buttonLabel}</PrimaryButtonStyled>
}

const PrimaryButtonStyled = styled.button`
  background: #f08f8f;
  color: white;
  border: none;
  border-radius: 6px;
  width: auto;
  margin: 0 auto 20px;
  padding: 5px 7px 5px;

  :active {
    background: #b26565;
  }
`
