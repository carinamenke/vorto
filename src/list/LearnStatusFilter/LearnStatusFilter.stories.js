import { action } from '@storybook/addon-actions'
import React from 'react'
import LearnStatusFilter from './LearnStatusFilter'

export default {
  title: 'Components/LearnStatusFilter',
  component: LearnStatusFilter,
  decorators: [
    renderLearnStatusFilter => (
      <div style={{ padding: 20, width: 400 }}>{renderLearnStatusFilter()}</div>
    ),
  ],
}

export const To_Be_Learned_Filter = () => (
  <LearnStatusFilter
    learnStatus={false}
    onClick={action('Switch to stack of vocab cards that are to be learned')}
    toBeLearnedVocabs={[
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
    ]}
    learnedVocabs={[
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
    ]}
  />
)
export const Learned_Filter = () => (
  <LearnStatusFilter
    learnStatus={true}
    onClick={action('Switch to stack of learned vocab cards')}
    toBeLearnedVocabs={[
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
    ]}
    learnedVocabs={[
      {
        imageSrc: './images/door.jpg',
        audioSrc: './audio/porte.mp3',
        wordTitle: 'The door',
        translation: 'La porte',
        partOfSpeechCategory: 'Noun',
        learned: 'false',
      },
    ]}
  />
)
