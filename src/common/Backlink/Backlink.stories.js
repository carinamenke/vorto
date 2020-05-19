import { action } from '@storybook/addon-actions'
import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Backlink from './Backlink'

export default {
  title: 'Components/Backlink',
  component: Backlink,
  decorators: [
    withKnobs,
    renderBacklink => (
      <div style={{ padding: 20, width: 400 }}>{renderBacklink()}</div>
    ),
  ],
}

export const Form_Backlink = () => (
  <Backlink
    href="/"
    label={text('Label', 'Back')}
    onClick={action('Goes back to homepage')}
  />
)

export const Vocab_Details_Backlink = () => (
  <Backlink
    label={text('Label', 'Back to collection')}
    onClick={action('Goes back to vocab list page')}
  />
)
