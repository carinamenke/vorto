import React from 'react'
import VocabDetails from './VocabDetails'
import { action } from '@storybook/addon-actions'

export default {
  title: 'Components/VocabDetails',
  component: VocabDetails,
  decorators: [
    renderVocabDetails => (
      <div style={{ padding: 20, width: 400 }}>{renderVocabDetails()}</div>
    ),
  ],
}

export const Default_Vocab_Details = () => (
  <VocabDetails
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle="The door"
    translation="La porte"
    partOfSpeechCategory="Noun"
    onClick={action('Closes vocab details')}
  />
)
