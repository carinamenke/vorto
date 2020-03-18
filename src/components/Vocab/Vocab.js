import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Badge from '../Badge/Badge'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import VocabDetails from '../VocabDetails/VocabDetails'

Vocab.propTypes = {
  imageSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  audioSrc: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
}

Vocab.defaultProps = {
  imageSrc: './images/default.png',
}

export default function Vocab({
  imageSrc,
  audioSrc,
  wordTitle,
  translation,
  partOfSpeechCategory,
}) {
  const [detailsAreOpen, setDetailsAreOpen] = useState(false)
  const body = document.getElementById('root')

  return (
    <>
      <VocabStyled imageSrc={imageSrc}>
        <div className="image-container"></div>
        <div className="content">
          <h1 className="content-title">{wordTitle}</h1>
          <Badge label={partOfSpeechCategory} />
        </div>
        <PrimaryButton onClick={openDetails} label={'See Translation'} />
      </VocabStyled>
      <VocabDetails
        isOpen={detailsAreOpen}
        onRequestClose={closeDetails}
        imageSrc={imageSrc}
        audioSrc={audioSrc}
        wordTitle={wordTitle}
        partOfSpeechCategory={partOfSpeechCategory}
        translation={translation}
        onClick={closeDetails}
      />
    </>
  )

  function openDetails() {
    setDetailsAreOpen(true)
    body.style.height = '100vh'
    body.style.overflowY = 'hidden'
  }
  function closeDetails() {
    setDetailsAreOpen(false)
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
  scroll-snap-align: center;

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
    margin: 15px 15px 5px;
  }

  .content-title {
    color: var(--grey-color-dark);
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
