import PropTypes from 'prop-types'
import React, { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import Badge from '../Badge/Badge'
import Button from '../Button/Button'
import VocabDetails from '../VocabDetails/VocabDetails'

Vocab.propTypes = {
  imageSrc: PropTypes.string,
  audioSrc: PropTypes.string,
  wordTitle: PropTypes.string.isRequired,
  translation: PropTypes.string.isRequired,
  partOfSpeechCategory: PropTypes.string.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  deleteVocab: PropTypes.func.isRequired,
}

export default function Vocab({
  imageSrc,
  audioSrc,
  wordTitle,
  translation,
  partOfSpeechCategory,
  learnStatus,
  onLearnStatusClick,
  deleteVocab,
}) {
  const [detailsAreOpen, setDetailsAreOpen] = useState(false)
  const body = useRef(document.body)

  return (
    <>
      <VocabStyled imageSrc={imageSrc} data-cy="vocab">
        <div className="image-container"></div>
        <div className="content">
          <h2 className="content-title">{wordTitle}</h2>
          <Badge label={partOfSpeechCategory} />
        </div>
        <Button
          onClick={openDetails}
          label={'See Translation'}
          width="90%"
          degree="primary"
        />
      </VocabStyled>
      <VocabDetails
        isOpen={detailsAreOpen}
        onRequestClose={closeDetails}
        imageSrc={imageSrc}
        audioSrc={audioSrc}
        wordTitle={wordTitle}
        partOfSpeechCategory={partOfSpeechCategory}
        translation={translation}
        learnStatus={learnStatus}
        onLearnStatusClick={onLearnStatusClick}
        onClick={closeDetails}
        deleteVocab={deleteVocab}
      />
    </>
  )

  function openDetails() {
    setDetailsAreOpen(true)
    body.current.style.height = '100vh'
    body.current.style.overflowY = 'hidden'
  }
  function closeDetails() {
    setDetailsAreOpen(false)
    body.current.style.overflowY = 'auto'
  }
}

const VocabStyled = styled.section`
  flex: 0 0 auto;
  width: 280px;
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  background: var(--color-background);
  height: auto;
  border-radius: 11px;
  box-shadow: 0 9px 16px -5px var(--color-grey-shadow);
  font-family: Helvetica, sans-serif;
  scroll-snap-align: center;

  .image-container {
    background: center
      url(${props =>
        props.imageSrc ? props.imageSrc : './images/default.png'});
    background-size: cover;
    height: 300px;
    width: 100%;
    border-radius: 10px 10px 0 0;
    border-bottom: solid 2px var(--color-grey-light);
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
    color: var(--color-grey-dark);
    margin: 0;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }
`
