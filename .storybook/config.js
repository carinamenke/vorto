import { addDecorator } from '@storybook/react'
import React from 'react'
import GlobalStyles from '../src/common/GlobalStyles'
import { MemoryRouter as Router } from 'react-router-dom'
addDecorator(renderComponent => (
  <Router>
    <GlobalStyles />
    {renderComponent()}
  </Router>
))
