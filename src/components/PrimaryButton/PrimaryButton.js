import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

PrimaryButton.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string.isRequired,
}

export default function PrimaryButton({ onClick, label, type, width }) {
  return (
    <PrimaryButtonStyled type={type} onClick={onClick} width={width}>
      {label}
    </PrimaryButtonStyled>
  )
}

const PrimaryButtonStyled = styled.button`
  background: var(--primary-color);
  color: var(--text-color-white);
  border: none;
  border-radius: 4px;
  margin: 15px auto;
  padding: 7px;
  height: 35px;
  width: ${props => props.width};
  box-shadow: 0 5px 4px -2px var(--primary-color-light);
  word-wrap: break-word;

  :hover {
    background: var(--primary-color-hover);
  }

  :active {
    background: var(--primary-color-active);
  }
`
