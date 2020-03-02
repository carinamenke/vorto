import React from 'react'
import styled from 'styled-components'
import Card from './Card/Card'
import ChairImage from './images/chair.jpg'
import CosyImage from './images/cosy.jpg'
import DefaultImage from './images/default.png'
import DoorImage from './images/door.jpg'
import DrinkImage from './images/drink.jpg'
import ForkImage from './images/fork.jpg'
import GlassImage from './images/glass.jpg'
import PlateImage from './images/plate.jpg'
import SpaciousImage from './images/spacious.jpg'
import WindowImage from './images/window.jpg'

export default function App() {
  return (
    <AppStyled>
      <Card
        vocabImageSrc={DoorImage}
        vocabTitle="The door"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={WindowImage}
        vocabTitle="The window"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={ChairImage}
        vocabTitle="The chair"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={DefaultImage}
        vocabTitle="to sit"
        partOfSpeechCategory="Verb"
      />
      <Card
        vocabImageSrc={DrinkImage}
        vocabTitle="to drink"
        partOfSpeechCategory="Verb"
      />
      <Card
        vocabImageSrc={CosyImage}
        vocabTitle="cosy"
        partOfSpeechCategory="Adjective"
      />
      <Card
        vocabImageSrc={PlateImage}
        vocabTitle="The plate"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={GlassImage}
        vocabTitle="The glass"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={SpaciousImage}
        vocabTitle="spacious"
        partOfSpeechCategory="Adjective"
      />
      <Card
        vocabImageSrc={ForkImage}
        vocabTitle="The fork"
        partOfSpeechCategory="Noun"
      />
    </AppStyled>
  )
}

const AppStyled = styled.div`
  display: grid;
  grid-template-columns: 10% 80% 10%;
  grid-row-gap: 35px;
  padding: 60px 0px;
`
