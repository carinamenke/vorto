import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import Badge from './Badge'
import PrimaryButton from './PrimaryButton'

CardDetailsOverlay.propTypes = {
  vocabImageSrc: PropTypes.string,
  // vocabAudioSrc: PropTypes.string,
  // vocabTitle: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
  vocabTranslation: PropTypes.string.isRequired,
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
        <h1 className="card__content--title">{vocabTitle}</h1>
        <Badge partOfSpeechCategory={partOfSpeechCategory} />
      </div>
      <PrimaryButton
        toggleBehaviour={() => console.log(`Button ${vocabTitle} was clicked.`)}
        buttonLabel={'Close'}
        onClick={onClick}
      />
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
    color: #424242;
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
