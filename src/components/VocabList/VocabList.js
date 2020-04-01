import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import Vocab from '../Vocab/Vocab'

VocabList.propTypes = {
  vocabs: PropTypes.array.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  deleteVocab: PropTypes.func.isRequired,
}

export default function VocabList({ vocabs, onLearnStatusClick, deleteVocab }) {
  return (
    <VocabListStyled>
      {vocabs.map(vocab => (
        <Vocab
          imageSrc={vocab.imageSrc}
          audioSrc={vocab.audioSrc}
          wordTitle={vocab.wordTitle}
          translation={vocab.translation}
          partOfSpeechCategory={vocab.partOfSpeechCategory}
          learnStatus={vocab.learned}
          onLearnStatusClick={() => onLearnStatusClick(vocab.id)}
          deleteVocab={() => deleteVocab(vocab.id)}
          key={vocab.id}
        />
      ))}
    </VocabListStyled>
  )
}

const VocabListStyled = styled.main`
  grid-row: 3 / 4;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  padding: 0 30px 30px;
  scroll-snap-type: x mandatory;

  :after {
    content: '';
    flex: 0 0 10px;
  }
`
