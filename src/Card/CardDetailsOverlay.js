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
      </div>
      <div className="card__translation">
        <h1 className="card__translation--title">{vocabTranslation}</h1>
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

  .card__image-container {
    background: center url(${props => props.vocabImageSrc});
    background-size: cover;
    margin: 0;
    height: 60%;
    width: 100%;
    border-bottom: solid #f6f6f6 2px;
  }

  .card__content,
  .card__translation {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin: 15px 15px 0;
  }

  .card__content--title {
    color: #ababab;
    font-size: 24px;
  }

  .card__translation--title {
    color: #424242;
    margin: 0;
  }

  .card__content--title,
  .card__translation--title {
    margin: 0;
    word-wrap: break-word;
    max-width: 80%;
  }
`
