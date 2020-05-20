import React from 'react'
import Header from './Header'

export default {
  title: 'Components/Header',
  component: Header,
  decorators: [
    renderHeader => (
      <div style={{ padding: 20, width: 400 }}>{renderHeader()}</div>
    ),
  ],
}

export const Default_Header = () => <Header />
