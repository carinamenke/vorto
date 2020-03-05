import React from 'react'
import styled from 'styled-components/macro'

export default function PrimaryButton({ onClick, buttonLabel }) {
  return (
    <PrimaryButtonStyled onClick={onClick}>{buttonLabel}</PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  background: #f08f8f;
  color: white;
  border: none;
  border-radius: 6px;
  max-width: 100%;
  margin: 20px 15px;
  padding: 5px 7px;
  box-shadow: 0 5px 4px -2px #ffdddd;
  word-wrap: break-word;

  :active {
    background: #b26565;
  }
`
