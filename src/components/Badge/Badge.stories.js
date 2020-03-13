import React from 'react'
import Badge from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
  decorators: [
    renderBadge => (
      <div style={{ padding: 20, width: 400 }}>{renderBadge()}</div>
    ),
  ],
}

export const Noun_Badge = () => <Badge label="Noun" />
export const Verb_Badge = () => <Badge label="Verb" />
export const Adjective_Badge = () => <Badge label="Adjective" />
