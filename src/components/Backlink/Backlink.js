import PropTypes from 'prop-types'
import React from 'react'
import { FiChevronLeft } from 'react-icons/fi'
import styled from 'styled-components/macro'

Backlink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
}

export default function Backlink({ href, label, onClick }) {
  return (
    <BacklinkStyled href={href} onClick={onClick} className="backlink">
      <FiChevronLeft className="backlink-icon" />
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

  :visited {
    color: var(--grey-color-dark);
  }
  :active {
    color: var(--primary-color);
  }

  .backlink-icon {
    width: 20px;
    height: 20px;
  }

  .backlink-label {
    margin-top: 2px;
  }
`
