import PropTypes from 'prop-types'
import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components/macro'

ClosingIcon.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
}

export default function ClosingIcon({ href, onClick }) {
  return (
    <ClosingIconStyled href={href} onClick={onClick} className="closing-icon">
      <FiX />
    </ClosingIconStyled>
  )
}

const ClosingIconStyled = styled.a`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 20px;
  height: 20px;

  :visited {
    color: var(--grey-color-dark);
  }
  :active {
    color: var(--primary-color);
  }
`
