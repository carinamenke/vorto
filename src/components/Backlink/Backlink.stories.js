import React from 'react'
import { action } from '@storybook/addon-actions'
import Backlink from './Backlink'

export default {
  title: 'Components/Backlink',
  component: Backlink,
  decorators: [
    renderBacklink => (
      <div style={{ padding: 20, width: 400 }}>{renderBacklink()}</div>
    ),
  ],
}

export const Form_Backlink = () => (
  <Backlink href="/" label="Back" onClick={action('Goes back to homepage')} />
)

export const Vocab_Details_Backlink = () => (
  <Backlink
    label="Back to collection"
    onClick={action('Goes back to vocab list page')}
  />
)
