import PropTypes from 'prop-types'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import styled from 'styled-components/macro'

Backlink.propTypes = {
  href: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default function Backlink({ href, label, onClick, color }) {
  return (
    <BacklinkStyled
      href={href}
      onClick={onClick}
      className="backlink"
      color={color}
    >
      <BacklinkIcon />
      <span className="backlink-label">{label}</span>
    </BacklinkStyled>
  )
}

const BacklinkStyled = styled.a`
  position: absolute;
  top: 15px;
  left: 12px;
  display: flex;
  align-items: center;
  font-size: 14px;
  text-decoration: none;
  cursor: default;
  color: ${props => props.color};

  :visited {
    color: var(--grey-color-dark);
  }
  :active {
    color: var(--primary-color);
  }

  .backlink-label {
    margin-top: 2px;
  }
`
const BacklinkIcon = styled(FiChevronLeft)`
  width: 20px;
  height: 20px;
`
