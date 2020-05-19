import { action } from '@storybook/addon-actions'
import React from 'react'
import SearchBar from './SearchBar'

export default {
  title: 'Components/SearchBar',
  component: SearchBar,
  decorators: [
    renderSearch => (
      <div style={{ padding: 20, width: 400 }}>{renderSearch()}</div>
    ),
  ],
}

export const Empty_Search_Field = () => (
  <SearchBar
    handleSearch={action('Searches for search term')}
    handleReset={action('Clears search field')}
    searchInput={''}
    searchResult={[]}
  />
)
export const Filled_SearchBar_Field = () => (
  <SearchBar
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
