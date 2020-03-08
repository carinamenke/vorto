import React from 'react'
import { withKnobs } from '@storybook/addon-knobs'
import Badge from './Badge'
import BadgeStyled from './Badge'

export default {
  title: 'Components/Badge',
  decorators: [withKnobs],
  component: Badge,
}

const badgeStyles = {
  borderRadius: '6px',
  padding: ' 3px 7px 1px',
  border: 'solid 1.5px {selectColour}',
  color: '{selectColour}',
}

export const Noun_Badge = () => <BadgeStyled label="Noun" style={badgeStyles} />
export const Verb_Badge = () => <BadgeStyled label="Verb" style={badgeStyles} />
export const Adjective_Badge = () => (
  <BadgeStyled label="Adjective" style={badgeStyles} />
)
