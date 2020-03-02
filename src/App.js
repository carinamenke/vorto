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
        vocabImageAltText="A door"
        vocabTitle="The door"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={WindowImage}
        vocabImageAltText="A window"
        vocabTitle="The window"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={ChairImage}
        vocabImageAltText="A chair"
        vocabTitle="The chair"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={DefaultImage}
        vocabImageAltText=""
        vocabTitle="to sit"
        partOfSpeechCategory="Verb"
      />
      <Card
        vocabImageSrc={DrinkImage}
        vocabImageAltText="to drink"
        vocabTitle="to drink"
        artOfSpeechCategory="Verb"
      />
      <Card
        vocabImageSrc={CosyImage}
        vocabImageAltText="cosy"
        vocabTitle="cosy"
        partOfSpeechCategory="Adjective"
      />
      <Card
        vocabImageSrc={PlateImage}
        vocabImageAltText="A plate"
        vocabTitle="The plate"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={GlassImage}
        vocabImageAltText="A glass"
        vocabTitle="The glass"
        partOfSpeechCategory="Noun"
      />
      <Card
        vocabImageSrc={SpaciousImage}
        vocabImageAltText="A spacious room"
        vocabTitle="spacious"
        partOfSpeechCategory="Adjective"
      />
      <Card
        vocabImageSrc={ForkImage}
        vocabImageAltText="A fork"
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
