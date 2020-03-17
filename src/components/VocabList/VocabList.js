import React from 'react'
import styled from 'styled-components/macro'
import Vocab from '../Vocab/Vocab'
import { uid } from 'react-uid'

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
