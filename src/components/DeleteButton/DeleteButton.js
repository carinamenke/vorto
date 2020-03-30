import React from 'react'
import styled from 'styled-components/macro'
import { FiTrash2 } from 'react-icons/fi'

export default function DeleteButton() {
  return (
    <DeleteButtonStyled>
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
