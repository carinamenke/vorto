import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

Button.propTypes = {
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  width: PropTypes.string.isRequired,
  degree: PropTypes.string.isRequired,
}

export default function Button({ onClick, label, type, width, degree }) {
  return (
    <ButtonStyled type={type} onClick={onClick} width={width} degree={degree}>
      {label}
    </ButtonStyled>
  )
}

const ButtonStyled = styled.button`
  background: ${props =>
    props.degree === 'primary'
      ? 'var(--primary-color)'
      : 'var(--primary-color-light)'};
  color: ${props =>
    props.degree === 'primary'
      ? 'var(--text-color-white)'
      : 'var(--primary-color-active)'};
  border: none;
  border-radius: 4px;
  margin: 15px auto;
  padding: 7px;
  height: 35px;
  width: ${props => props.width};
  box-shadow: 0 5px 4px -2px ${props => (props.degree === 'primary' ? 'var(--primary-color-light)' : 'var(--primary-color-shadow)')};
  word-wrap: break-word;

  :hover {
    background: ${props =>
      props.degree === 'primary'
        ? 'var(--primary-color-hover)'
        : 'var(--primary-color-mid)'};
  }

  :active {
    background: ${props =>
      props.degree === 'primary'
        ? 'var(--primary-color-active)'
        : 'var(--primary-color)'};
    color: var(--text-color-white);
  }
`
