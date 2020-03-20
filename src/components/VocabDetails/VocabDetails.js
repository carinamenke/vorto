import PropTypes from 'prop-types'
import React from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import AudioButton from '../AudioButton/AudioButton'
import Backlink from '../Backlink/Backlink'
import Badge from '../Badge/Badge'
import ClosingIcon from '../ClosingIcon/ClosingIcon'
import LearnStatusButton from '../LearnStatusButton/LearnStatusButton'
import PrimaryButton from '../PrimaryButton/PrimaryButton'

VocabDetails.propTypes = {
  imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  audioSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
}

VocabDetails.defaultProps = {
  imageSrc: './images/default.png',
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
}) {
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
            color="var(--text-color-white)"
          />
          <ClosingIcon onClick={onClick} color="var(--text-color-white)" />
        </div>
        <div className="content">
          <h2 className="content-title">{wordTitle}</h2>
          <Badge label={partOfSpeechCategory} />
        </div>
        <div className="translation">
          <h1 className="translation-title">{translation}</h1>
          {audioSrc && <AudioButton audioSrc={audioSrc} />}
        </div>
        <div className="actions">
          <LearnStatusButton
            onLearnStatusClick={onLearnStatusClick}
            learnStatus={learnStatus}
          />
          <PrimaryButton label={'Close'} onClick={onClick} width="50%" />
        </div>
      </VocabDetailsStyled>
    </Modal>
  )
}

const VocabDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: var(--background-color);
  height: 100%;
  width: 100%;
  font-family: Helvetica, sans-serif;

  .image-container {
    background: center url(${props => props.imageSrc});
    background-size: cover;
    margin: 0;
    height: 60%;
    width: 100%;
    border-bottom: solid 2px var(--grey-color-light);
  }

  .image-container-overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      var(--image-gradient-color-dark),
      var(--image-gradient-color-light)
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
    color: var(--grey-color-mid1);
    font-size: 24px;
  }

  .translation-title {
    color: var(--grey-color-dark);
    margin: 0;
  }

  .actions {
    display: flex;
    margin: 10px 15px;
  }
`
