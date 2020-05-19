import { text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    withKnobs,
    renderBadge => (
      <div style={{ padding: 20, width: 400 }}>{renderBadge()}</div>
    ),
  ],
}

export const Noun_Badge = () => <Badge label={text('Label', 'Noun')} />
export const Verb_Badge = () => <Badge label={text('Label', 'Verb')} />
export const Adjective_Badge = () => (
  <Badge label={text('Label', 'Adjective')} />
)
