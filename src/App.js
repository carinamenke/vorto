import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import data from './cards.json'
import Modal from 'react-modal'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const cards = data.cards

  return (
    <AppStyled>
      {cards.map(card => (
        <Card
          vocabImageSrc={card.vocabImageSrc}
          vocabAudioSrc={card.vocabAudioSrc}
          vocabTitle={card.vocabTitle}
          vocabTranslation={card.vocabTranslation}
          partOfSpeechCategory={card.partOfSpeechCategory}
          key={card.id}
        />
      ))}
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-row-gap: 35px;
  padding: 60px 0;
`
