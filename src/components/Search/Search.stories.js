import React from 'react'
import { action } from '@storybook/addon-actions'
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

export const Default_Search = () => (
  <Search
    handleSearch={action('Searches for search term')}
    handleReset={action('Clears search field')}
  />
)
