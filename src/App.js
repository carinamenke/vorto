import React from 'react'
import Card from './Card/Card'
import DoorImage from './images/door.jpg'
import WindowImage from './images/window.jpg'
import ChairImage from './images/chair.jpg'
import DefaultImage from './images/default.png'
import DrinkImage from './images/drink.jpg'
import CosyImage from './images/cosy.jpg'
import PlateImage from './images/plate.jpg'
import GlassImage from './images/glass.jpg'
import SpaciousImage from './images/spacious.jpg'
import ForkImage from './images/fork.jpg'

export default function App() {
  return (
    <>
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
    </>
  )
}
