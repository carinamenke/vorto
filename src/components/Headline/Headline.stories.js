import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Headline from './Headline'

export default {
  title: 'Components/Headline',
  component: Headline,
  decorators: [
    withKnobs,
    renderHeadline => (
      <div style={{ padding: 20, width: 400 }}>{renderHeadline()}</div>
    ),
  ],
}

export const Vocab_Form_Headline = () => (
  <Headline text={text('Text', 'Add new Vocabulary')} />
)
