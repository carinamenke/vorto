import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import VocabDetailsOverlay from './VocabDetailsOverlay'

export default {
  title: 'Components/VocabDetailsOverlay',
  decorators: [withKnobs],
  component: VocabDetailsOverlay,
}

export const Default_Vocab_Details = () => (
  <VocabDetailsOverlay
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle="The door"
    translation="La porte"
    partOfSpeechCategory="Noun"
  />
)
