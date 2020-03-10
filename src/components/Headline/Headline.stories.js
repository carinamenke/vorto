import React from 'react'
import Headline from './Headline'

export default {
  title: 'Components/Headline',
  component: Headline,
  decorators: [
    renderHeadline => (
      <div style={{ padding: 20, width: 400 }}>{renderHeadline()}</div>
    ),
  ],
}

export const Default_Audio_Button = () => <Headline text="Add new Vocabulary" />
