import PropTypes from 'prop-types'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'
import styled from 'styled-components/macro'

DeleteButton.propTypes = {
  onClick: PropTypes.func,
}

export default function DeleteButton({ onClick }) {
  return (
    <DeleteButtonStyled onClick={onClick}>
      <FiTrash2 />
      Delete
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  color: var(--grey-color-mid2);
  width: 90px;

  :hover {
    color: var(--grey-color-mid1);
  }

  :active {
    color: var(--primary-color);
  }
`
