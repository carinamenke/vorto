import React from 'react'
import Vocab from './Vocab'

export default {
  title: 'Components/Vocab',
  component: Vocab,
  decorators: [
    renderVocab => (
      <div style={{ padding: 20, width: 400 }}>{renderVocab()}</div>
    ),
  ],
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
