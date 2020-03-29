import React from 'react'
import VocabDetails from './VocabDetails'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

export default {
  title: 'Components/VocabDetails',
  component: VocabDetails,
  decorators: [
    withKnobs,
    renderVocabDetails => (
      <div style={{ padding: 20, width: 300 }}>{renderVocabDetails()}</div>
    ),
  ],
}

export const To_be_learned_Vocab_Details = () => (
  <VocabDetails
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle={text('Word Title', 'The door')}
    translation={text('Translation', 'La porte')}
    partOfSpeechCategory="Noun"
    onClick={action('Closes vocab details')}
    learnStatus={boolean('Learn Status', false)}
    onLearnStatusClick={action('Move vocab card to stack of learned cards')}
    isOpen={true}
    onRequestClose={action('Closes vocab details')}
  />
)

export const Learned_Vocab_Details = () => (
  <VocabDetails
    imageSrc="./images/door.jpg"
    audioSrc="./audio/porte.mp3"
    wordTitle={text('Word Title', 'The door')}
    translation={text('Translation', 'La porte')}
    partOfSpeechCategory="Noun"
    onClick={action('Closes vocab details')}
    learnStatus={boolean('Learn Status', true)}
    onLearnStatusClick={action('Move vocab card to stack of learned cards')}
    isOpen={true}
    onRequestClose={action('Closes vocab details')}
  />
)

export const Without_image_and_audio_files = () => (
  <VocabDetails
    imageSrc="./images/default.png"
    audioSrc=""
    wordTitle={text('Word Title', 'The door')}
    translation={text('Translation', 'La porte')}
    partOfSpeechCategory="Noun"
    onClick={action('Closes vocab details')}
    learnStatus={boolean('Learn Status', false)}
    onLearnStatusClick={action('Move vocab card to stack of learned cards')}
    isOpen={true}
    onRequestClose={action('Closes vocab details')}
  />
)
