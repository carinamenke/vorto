import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Badge from './Badge'
import PrimaryButton from './PrimaryButton'
import CardDetailsOverlay from './CardDetailsOverlay'
import Modal from 'react-modal'

Card.propTypes = {
  vocabImageSrc: PropTypes.string,
  vocabAudioSrc: PropTypes.string,
  vocabTitle: PropTypes.string.isRequired,
  vocabTranslation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
}

export default function Card({
  vocabImageSrc,
  vocabAudioSrc,
  vocabTitle,
  vocabTranslation,
  partOfSpeechCategory,
}) {
  const [modalIsOpen, setIsOpen] = useState(false)
  const body = document.getElementById('root')
  const modalStyle = {
    content: {
      height: '100vh',
      borderRadius: 0,
      position: 'relative',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      padding: 0,
      margin: '-1px',
    },
  }

  return (
    <>
      <CardStyled vocabImageSrc={vocabImageSrc}>
        <div className="card__image-container"></div>
        <div className="card__content">
          <h1 className="card__content--title">{vocabTitle}</h1>
          <Badge partOfSpeechCategory={partOfSpeechCategory} />
        </div>
        <PrimaryButton onClick={openModal} buttonLabel={'See Translation'} />
      </CardStyled>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <CardDetailsOverlay
          vocabImageSrc={vocabImageSrc}
          vocabAudioSrc={vocabAudioSrc}
          vocabTitle={vocabTitle}
          partOfSpeechCategory={partOfSpeechCategory}
          vocabTranslation={vocabTranslation}
          onClick={closeModal}
        />
      </Modal>
    </>
  )

  function openModal() {
    setIsOpen(true)
    body.style.height = '100vh'
    body.style.overflowY = 'hidden'
  }
  function closeModal() {
    setIsOpen(false)
    body.style.overflowY = 'auto'
  }
}

const CardStyled = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: auto;
  border-radius: 11px;
  box-shadow: 0 9px 16px -5px rgba(163, 163, 163, 50);
  font-family: Helvetica, sans-serif;

  .card__image-container {
    background: center url(${props => props.vocabImageSrc});
    background-size: cover;
    height: 350px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid #f6f6f6 2px;
  }

  .card__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 15px 15px 20px;
  }

  .card__content--title {
    color: #424242;
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
