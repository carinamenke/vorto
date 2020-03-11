import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Badge from '../Badge/Badge'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import VocabDetails from '../VocabDetails/VocabDetails'
import Modal from 'react-modal'

Vocab.propTypes = {
  imageSrc: PropTypes.string,
  audioSrc: PropTypes.string,
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
}

export default function Vocab({
  imageSrc,
  audioSrc,
  wordTitle,
  translation,
  partOfSpeechCategory,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
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
      <VocabStyled imageSrc={imageSrc}>
        <div className="image-container"></div>
        <div className="content">
          <h1 className="content-title">{wordTitle}</h1>
          <Badge label={partOfSpeechCategory} />
        </div>
        <PrimaryButton onClick={openModal} buttonLabel={'See Translation'} />
      </VocabStyled>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyle}
      >
        <VocabDetails
          imageSrc={imageSrc}
          audioSrc={audioSrc}
          wordTitle={wordTitle}
          partOfSpeechCategory={partOfSpeechCategory}
          translation={translation}
          onClick={closeModal}
        />
      </Modal>
    </>
  )

  function openModal() {
    setModalIsOpen(true)
    body.style.height = '100vh'
    body.style.overflowY = 'hidden'
  }
  function closeModal() {
    setModalIsOpen(false)
    body.style.overflowY = 'auto'
  }
}

const VocabStyled = styled.section`
  flex: 0 0 auto;
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  height: auto;
  border-radius: 11px;
  box-shadow: 0 9px 16px -5px var(--grey-color-shadow);
  font-family: Helvetica, sans-serif;

  .image-container {
    background: center url(${props => props.imageSrc});
    background-size: cover;
    height: 300px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 2px var(--grey-color-light);
  }

  .content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 15px 15px 20px;
  }

  .content-title {
    color: var(--grey-color-dark);
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
