import React from 'react'
import VocabList from './VocabList'
import { withKnobs, array, object } from '@storybook/addon-knobs'

export default {
  title: 'Components/VocabList',
  component: VocabList,
  decorators: [
    withKnobs,
    renderVocabList => (
      <div style={{ padding: 20, width: 400 }}>{renderVocabList()}</div>
    ),
  ],
}

const cards = [
  object('Card1', {
    imageSrc: './images/door.jpg',
    audioSrc: './audio/porte.mp3',
    wordTitle: 'The door',
    translation: 'La porte',
    partOfSpeechCategory: 'Noun',
    learned: 'false',
  }),
  object('Card2', {
    imageSrc: './images/default.png',
    audioSrc: './audio/window.mp3',
    wordTitle: 'The window',
    translation: 'La fenêtre',
    partOfSpeechCategory: 'Noun',
    learned: 'false',
  }),
]

export const Default_VocabList = () => (
  <VocabList vocabs={array('Cards', cards)} />
)
