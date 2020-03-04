import React, { useState } from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import CardDetailsOverlay from './Card/CardDetailsOverlay'
import Modal from 'react-modal'
import data from './cards.json'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const cards = data.cards
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    const abc = document.getElementById('root')
    setIsOpen(true)
    abc.style.height = '100vh'
    abc.style.overflowY = 'hidden'
  }
  function closeModal() {
    setIsOpen(false)
  }

  return (
    <AppStyled>
      {cards.map(card => (
        <>
          <Card
            vocabImageSrc={card.vocabImageSrc}
            vocabTitle={card.vocabTitle}
            partOfSpeechCategory={card.partOfSpeechCategory}
            onClick={openModal}
            key={card.id}
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={{
              content: {
                height: '100vh',
                borderRadius: 0,
                position: 'relative',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                padding: 0,
                margin: '-1px',
              },
            }}
          >
            <CardDetailsOverlay
              vocabImageSrc={card.vocabImageSrc}
              vocabAudioSrc={card.vocabAudioSrc}
              vocabTitle={card.vocabTitle}
              partOfSpeechCategory={card.partOfSpeechCategory}
              vocabTranslation={card.vocabTranslation}
              key={card.id + 100}
              onClick={closeModal}
            />
          </Modal>
        </>
      ))}
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-row-gap: 35px;
  padding: 60px 0;
  /*height: 100vh;
  overflow: hidden;*/
`
