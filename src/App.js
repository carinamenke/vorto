import React from 'react'
import styled from 'styled-components/macro'
import Vocab from './components/Vocab/Vocab'
import data from './vocabs.json'
import Modal from 'react-modal'
import PrimaryButton from './components/PrimaryButton/PrimaryButton'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const vocabs = data.vocabs

  return (
    <AppGrid>
      <VocabList>
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
      </VocabList>
      <Navigation>
        <PrimaryButton buttonLabel="Add new Vocabulary" />
      </Navigation>
    </AppGrid>
  )
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  height: 100vh;
`

const VocabList = styled.section`
  grid-row-start: 2;
  grid-row-end: 3;
  display: flex;
  flex-wrap: nowrap;
  overflow: scroll;
  padding: 0 30px 30px;
`
const Navigation = styled.section`
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
`
