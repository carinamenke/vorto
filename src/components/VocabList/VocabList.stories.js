import React from 'react'
import VocabList from './VocabList'

export default {
  title: 'Components/VocabList',
  component: VocabList,
  decorators: [
    renderVocabList => (
      <div style={{ padding: 20, width: 400 }}>{renderVocabList()}</div>
    ),
  ],
}

export const Default_VocabList = () => (
  <VocabList
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle="The door"
    translation="La porte"
    partOfSpeechCategory="Noun"
  />
)
