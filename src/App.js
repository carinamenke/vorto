import React from 'react'
import styled from 'styled-components/macro'
import Vocab from './components/Vocab/Vocab'
import data from './vocabs.json'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const vocabs = data.vocabs

  return (
    <AppGrid>
      {vocabs.map(vocab => (
        <Vocab
          imageSrc={vocab.imageSrc}
          audioSrc={vocab.audioSrc}
          wordTitle={vocab.wordTitle}
          translation={vocab.translation}
          partOfSpeechCategory={vocab.partOfSpeechCategory}
          key={vocab.id}
        />
      ))}
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-row-gap: 35px;
  padding: 60px 0;
`
