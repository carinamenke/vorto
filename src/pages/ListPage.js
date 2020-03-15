import React from 'react'
import styled from 'styled-components/macro'
import Vocab from '../components/Vocab/Vocab'
import { uid } from 'react-uid'
import Header from '../components/Header/Header'

export default function ListPage({ vocabs }) {
  return (
    <>
      <Header />
      <VocabList>
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
      </VocabList>
    </>
  )
}

const VocabList = styled.section`
  grid-row: 2 / 3;
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
