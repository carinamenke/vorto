import React from 'react'
import Vocab from './Vocab'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Vocab',
  component: Vocab,
  decorators: [
    withKnobs,
    renderVocab => (
      <div style={{ padding: 20, width: 400 }}>{renderVocab()}</div>
    ),
  ],
}

export const Default_Vocab_Card = () => (
  <Vocab
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle={text('Word Title', 'The door')}
    translation={text('Translation', 'La porte')}
    partOfSpeechCategory="Noun"
  />
)
