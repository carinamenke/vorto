import { action } from '@storybook/addon-actions'
import React from 'react'
import LearnStatusButton from './LearnStatusButton'

export default {
  title: 'Components/LearnStatusButton',
  component: LearnStatusButton,
  decorators: [
    renderLearnStatusButton => (
      <div style={{ padding: 20, width: 400 }}>{renderLearnStatusButton()}</div>
    ),
  ],
}

export const Learned_Button = () => (
  <LearnStatusButton
    learnStatus="false"
    onLearnStatusClick={action('Move vocab card to stack of learned cards')}
  />
)
export const To_Be_Learned_Button = () => (
  <LearnStatusButton
    learnStatus="true"
    onLearnStatusClick={action(
      'Move vocab card to stack of cards that are to be learned'
    )}
  />
)
