import React from 'react'
import styled from 'styled-components/macro'

export default function PrimaryButton({ onClick, buttonLabel }) {
  return (
    <PrimaryButtonStyled onClick={onClick}>{buttonLabel}</PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  background: var(--primary-color);
  color: var(--text-color-white);
  border: none;
  border-radius: 6px;
  max-width: 100%;
  margin: 20px 15px;
  padding: 5px 7px;
  box-shadow: 0 5px 4px -2px var(--primary-color-light);
  word-wrap: break-word;

  :hover {
    background: var(--primary-color-hover);
  }

  :active {
    background: var(--primary-color-active);
  }
`
