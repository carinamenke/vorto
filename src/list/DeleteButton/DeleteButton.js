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
      <FiTrash2 className="icon" />
      Delete
    </DeleteButtonStyled>
  )
}

const DeleteButtonStyled = styled.button`
  border: none;
  background: none;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-grey-mid2);
  width: 120px;

  .icon {
    margin-right: 2px;
  }

  :hover {
    color: var(--color-grey-mid1);
  }

  :active {
    color: var(--color-primary);
  }
`
