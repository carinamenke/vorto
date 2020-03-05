import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Badge from './Badge'
import PrimaryButton from './PrimaryButton'
import AudioButton from './AudioButton'
import { FiChevronLeft, FiX } from 'react-icons/fi'

CardDetailsOverlay.propTypes = {
  vocabImageSrc: PropTypes.string,
  vocabAudioSrc: PropTypes.string,
  vocabTitle: PropTypes.string.isRequired,
  vocabTranslation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
}

export default function CardDetailsOverlay({
  vocabImageSrc,
  vocabAudioSrc,
  vocabTitle,
  partOfSpeechCategory,
  vocabTranslation,
  onClick,
}) {
  return (
    <CardDetailsStyled vocabImageSrc={vocabImageSrc}>
      <div className="card-detail__image-container">
        <div className="card-detail__image-container--overlay"></div>
        <div onClick={onClick} className="card-detail__backlink">
          <FiChevronLeft className="card-detail__backlink--icon" />
          <span className="card-detail__backlink--label">
            Back to Collection
          </span>
        </div>
        <FiX onClick={onClick} className="card-detail__closing-icon" />
      </div>
      <div className="card-detail__content">
        <h2 className="card-detail__content--title">{vocabTitle}</h2>
        <Badge partOfSpeechCategory={partOfSpeechCategory} />
      </div>
      <div className="card-detail__translation">
        <h1 className="card-detail__translation--title">{vocabTranslation}</h1>
        <AudioButton
          buttonLabel={'Listen to Audio'}
          vocabAudioSrc={vocabAudioSrc}
        />
      </div>
      <PrimaryButton buttonLabel={'Close'} onClick={onClick} />
    </CardDetailsStyled>
  )
}

const CardDetailsStyled = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  height: 100%;
  width: 100%;
  font-family: Helvetica, sans-serif;

  .card-detail__image-container {
    background: center url(${props => props.vocabImageSrc});
    background-size: cover;
    margin: 0;
    height: 60%;
    width: 100%;
    border-bottom: solid #f6f6f6 2px;
    color: #fff;
    font-size: 14px;
  }

  .card-detail__image-container--overlay {
    height: 100%;
    width: 100%;
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  }

  .card-detail__backlink {
    position: absolute;
    top: 15px;
    left: 15px;
    display: flex;
    align-items: center;
    cursor: default;
  }

  .card-detail__backlink--icon {
    width: 20px;
    height: 20px;
  }

  .card-detail__backlink--label {
    margin-top: 2px;
  }

  .card-detail__closing-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;
  }

  .card-detail__content,
  .card-detail__translation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px 15px 0;
  }

  .card-detail__content--title,
  .card-detail__translation--title {
    margin: 0;
    word-wrap: break-word;
    max-width: 80%;
  }

  .card-detail__content--title {
    color: #ababab;
    font-size: 24px;
  }

  .card-detail__translation--title {
    color: #424242;
    margin: 0;
  }
`
