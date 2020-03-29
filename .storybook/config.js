import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/common/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'
import { addParameters } from '@storybook/react'

addDecorator(renderComponent => (
  <Router>
    <GlobalStyles />
    {renderComponent()}
  </Router>
))

addParameters({
  viewport: {
    defaultViewport: 'responsive',
  },
  backgrounds: [
    { name: 'white', value: '#fff', default: true },
    { name: 'primary colour', value: '#f08f8f' },
    { name: 'secondary colour', value: '#f19e20' },
    { name: 'grey', value: '#ababab' },
  ],
})
