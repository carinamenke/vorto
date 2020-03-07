import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Badge from './Badge'
import PrimaryButton from './PrimaryButton'
import AudioButton from './AudioButton'
import { FiChevronLeft, FiX } from 'react-icons/fi'

VocabDetailsOverlay.propTypes = {
  imageSrc: PropTypes.string,
  audioSrc: PropTypes.string,
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
}

export default function VocabDetailsOverlay({
  imageSrc,
  audioSrc,
  wordTitle,
  partOfSpeechCategory,
  translation,
  onClick,
}) {
  return (
    <VocabDetailsStyled imageSrc={imageSrc}>
      <div className="image-container">
        <div className="image-container-overlay"></div>
        <div onClick={onClick} className="backlink">
          <FiChevronLeft className="backlink-icon" />
          <span className="backlink-label">Back to Collection</span>
        </div>
        <FiX onClick={onClick} className="closing-icon" />
      </div>
      <div className="content">
        <h2 className="content-title">{wordTitle}</h2>
        <Badge label={partOfSpeechCategory} />
      </div>
      <div className="translation">
        <h1 className="translation-title">{translation}</h1>
        <AudioButton buttonLabel={'Listen to Audio'} audioSrc={audioSrc} />
      </div>
      <PrimaryButton buttonLabel={'Close'} onClick={onClick} />
    </VocabDetailsStyled>
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
    color: var(--text-color-white);
    font-size: 14px;
  }

  .image-container-overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient(
      var(--image-gradient-color-dark),
      var(--image-gradient-color-light)
    );
  }

  .backlink {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    cursor: default;
  }

  .backlink-icon {
    width: 20px;
    height: 20px;
  }

  .backlink-label {
    margin-top: 2px;
  }

  .closing-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
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
`
