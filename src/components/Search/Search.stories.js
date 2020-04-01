import { action } from '@storybook/addon-actions'
import React from 'react'
import Search from './Search'

export default {
  title: 'Components/Search',
  component: Search,
  decorators: [
    renderSearch => (
      <div style={{ padding: 20, width: 400 }}>{renderSearch()}</div>
    ),
  ],
}

export const Empty_Search_Field = () => (
  <Search
    handleSearch={action('Searches for search term')}
    handleReset={action('Clears search field')}
    searchInput={''}
    searchResult={[]}
  />
)
export const Filled_Search_Field = () => (
  <Search
    handleSearch={action('Searches for search term')}
    handleReset={action('Clears search field')}
    searchInput={'The door'}
    searchResult={[
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
  />
)
