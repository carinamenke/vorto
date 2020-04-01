import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Button from '../Button/Button'
import ClosingIcon from '../ClosingIcon/ClosingIcon'

DeleteConfirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onCancel: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
}

export default function DeleteConfirmation({ isOpen, onCancel, onDelete }) {
  return (
    <BackgroundStyled isOpen={isOpen} data-cy="deletion-overlay">
      <ModalStyled>
        <ClosingIcon onClick={onCancel} color={'var(--grey-color-dark)'} />
        <p>Are you sure you want to delete this vocabulary card?</p>
        <div className="actions">
          <Button
            label="Cancel"
            width="40%"
            degree="secondary"
            type="button"
            onClick={onCancel}
          />
          <Button
            label="Delete"
            width="40%"
            degree="primary"
            type="button"
            onClick={onDelete}
          />
        </div>
      </ModalStyled>
    </BackgroundStyled>
  )
}

const BackgroundStyled = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
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
  position: relative;
  margin: 200px auto;
  padding: 20px;
  width: 80%;
  text-align: center;
  animation-name: animatemodal;
  animation-duration: 0.6s;

  .actions {
    display: flex;
    justify-content: space-around;
  }

  @keyframes animatemodal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`
