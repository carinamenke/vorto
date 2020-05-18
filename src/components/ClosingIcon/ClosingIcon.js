import PropTypes from 'prop-types'
import React from 'react'
import { FiX } from 'react-icons/fi'
import styled from 'styled-components/macro'

ClosingIcon.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  color: PropTypes.string,
}

export default function ClosingIcon({ href, onClick, color }) {
  return (
    <ClosingIconStyled
      href={href}
      onClick={onClick}
      className="closing-icon"
      color={color}
    >
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
  cursor: default;
  color: ${props => props.color};

  :visited {
    color: var(--color-grey-dark);
  }
  :active {
    color: var(--color-primary);
  }
`
