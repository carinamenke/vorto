import PropTypes from 'prop-types'
import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import AudioButton from '../AudioButton/AudioButton'
import Backlink from '../../common/Backlink'
import Badge from '../Badge/Badge'
import Button from '../../common/Button/Button'
import ClosingIcon from '../../common/ClosingIcon/ClosingIcon'
import DeleteButton from '../DeleteButton/DeleteButton'
import DeleteConfirmation from '../DeleteConfirmation/DeleteConfirmation'
import LearnStatusButton from '../LearnStatusButton/LearnStatusButton'

VocabDetails.propTypes = {
  imageSrc: PropTypes.string,
  audioSrc: PropTypes.string,
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
  deleteVocab: PropTypes.func.isRequired,
}

export default function VocabDetails({
  imageSrc,
  audioSrc,
  wordTitle,
  partOfSpeechCategory,
  translation,
  learnStatus,
  onLearnStatusClick,
  onClick,
  isOpen,
  onRequestClose,
  deleteVocab,
}) {
  const [deleteOverlayIsOpen, setDeleteOverlayIsOpen] = useState(false)
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
    <Modal style={modalStyle} isOpen={isOpen} onRequestClose={onRequestClose}>
      <VocabDetailsStyled imageSrc={imageSrc}>
        <div className="image-container">
          <div className="image-container-overlay"></div>
          <Backlink
            label="Back to collection"
            onClick={onClick}
            color="var(--color-text-white)"
          />
          <ClosingIcon onClick={onClick} color="var(--color-text-white)" />
        </div>
        <section className="content">
          <h2 className="content-title">{wordTitle}</h2>
          <Badge label={partOfSpeechCategory} />
        </section>
        <section className="translation">
          <h1 className="translation-title">{translation}</h1>
          {audioSrc && <AudioButton audioSrc={audioSrc} />}
        </section>
        <section className="primary-actions">
          <LearnStatusButton
            onLearnStatusClick={onLearnStatusClick}
            learnStatus={learnStatus}
          />
          <Button
            label={'Close'}
            onClick={onClick}
            width="50%"
            degree="primary"
          />
        </section>
        <section className="secondary-actions">
          <DeleteButton onClick={openDeleteOverlay} />
          <DeleteConfirmation
            isOpen={deleteOverlayIsOpen}
            onCancel={handleCancel}
            onDelete={deleteVocab}
          />
        </section>
      </VocabDetailsStyled>
    </Modal>
  )

  function openDeleteOverlay() {
    setDeleteOverlayIsOpen(true)
  }

  function handleCancel() {
    setDeleteOverlayIsOpen(false)
  }
}

const VocabDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  height: 100%;
  width: 100%;
  font-family: Helvetica, sans-serif;

  .image-container {
    background: center
      url(${props =>
        props.imageSrc ? props.imageSrc : './images/default.png'});
    background-size: cover;
    margin: 0;
    height: 60%;
    width: 100%;
    border-bottom: solid 2px var(--color-grey-light);
  }

  .image-container-overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      var(--color-image-gradient-dark),
      var(--color-image-gradient-light)
    );
  }

  .content,
  .translation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px 15px 0;
  }

  .content-title,
  .translation-title {
    margin: 0;
    word-wrap: break-word;
    max-width: 80%;
  }

  .content-title {
    color: var(--color-grey-mid1);
    font-size: 24px;
  }

  .translation-title {
    color: var(--color-grey-dark);
    margin: 0;
  }

  .primary-actions {
    display: flex;
    margin: 10px 15px;
  }

  .secondary-actions {
    display: flex;
    justify-content: center;
  }
`
