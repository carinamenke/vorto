import React from 'react'
import Navigation from './Navigation'

export default {
  title: 'Components/Navigation',
  component: Navigation,
  decorators: [
    renderNavigation => (
      <div style={{ padding: 20, width: 400 }}>{renderNavigation()}</div>
    ),
  ],
}

export const Default_Navigation = () => <Navigation />
