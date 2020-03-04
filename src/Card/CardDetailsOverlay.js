import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Badge from './Badge'
import PrimaryButton from './PrimaryButton'
import AudioButton from './AudioButton'

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
      <div className="card__image-container"></div>
      <div className="card__content">
        <h2 className="card__content--title">{vocabTitle}</h2>
        <Badge partOfSpeechCategory={partOfSpeechCategory} />
        <h1 className="card__content--translation">{vocabTranslation}</h1>
        <div className="card__content--buttons">
          <AudioButton
            buttonLabel={'Listen to Audio'}
            vocabAudioSrc={vocabAudioSrc}
          />
          <PrimaryButton buttonLabel={'Close'} onClick={onClick} />
        </div>
      </div>
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

  .card__image-container {
    background: center url(${props => props.vocabImageSrc});
    background-size: cover;
    margin: 0;
    height: 60%;
    width: 100%;
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
    color: #ababab;
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }

  .card__content--translation {
    color: #424242;
  }

  .card__content--buttons {
  }
`
