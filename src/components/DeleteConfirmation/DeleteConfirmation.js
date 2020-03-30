import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'

export default function DeleteConfirmation() {
  return (
    <BackgroundStyled>
      <ModalStyled>
        <p>Are you sure you want to delete this vocabulary card?</p>
        <div className="actions">
          <Button label="Cancel" width="40%" degree="secondary" type="button" />
          <Button label="Delete" width="40%" degree="primary" type="button" />
        </div>
      </ModalStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  display: none;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: var(--grey-color-mid1); /*fallback background color*/
  background-color: var(--image-gradient-color-dark);
`

const ModalStyled = styled.section`
  background-color: var(--background-color);
  margin: 15% auto;
  padding: 20px;
  width: 80%;

  .actions {
    display: flex;
    justify-content: space-around;
  }
`
