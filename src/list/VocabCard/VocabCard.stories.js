import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import VocabCard from './VocabCard'

export default {
  title: 'Components/VocabCard',
  component: VocabCard,
  decorators: [
    withKnobs,
    renderVocab => (
      <div style={{ padding: 20, width: 400 }}>{renderVocab()}</div>
    ),
  ],
}

export const Default_Vocab_Card = () => (
  <VocabCard
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle={text('Word Title', 'The door')}
    translation={text('Translation', 'La porte')}
    partOfSpeechCategory="Noun"
  />
)
