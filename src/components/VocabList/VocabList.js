import PropTypes from 'prop-types'
import React from 'react'
import { uid } from 'react-uid'
import styled from 'styled-components/macro'
import Vocab from '../Vocab/Vocab'

VocabList.propTypes = {
  vocabs: PropTypes.array.isRequired,
}

export default function VocabList({ vocabs }) {
  return (
    <VocabListStyled>
      {vocabs.map(vocab => (
        <Vocab
          imageSrc={vocab.imageSrc}
          audioSrc={vocab.audioSrc}
          wordTitle={vocab.wordTitle}
          translation={vocab.translation}
          partOfSpeechCategory={vocab.partOfSpeechCategory}
          learned={vocab.learned}
          key={uid(vocab)}
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
