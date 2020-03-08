import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Vocab from './Vocab'

export default {
  title: 'Components/Vocab',
  decorators: [withKnobs],
  component: Vocab,
}

export const Default_Vocab_Card = () => (
  <Vocab
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle="The door"
    translation="La porte"
    partOfSpeechCategory="Noun"
  />
)
