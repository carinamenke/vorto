import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from './Button'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/Button',
  component: Button,
  decorators: [
    withKnobs,
    renderButton => (
      <div style={{ padding: 20, width: 400 }}>{renderButton()}</div>
    ),
  ],
}

export const Primary_Button = () => (
  <Button
    label={text('Label', 'See Translation')}
    onClick={action('Opens Translation')}
    width="100%"
    degree="primary"
    type="button"
  />
)
export const Secondary_Button = () => (
  <Button
    label={text('Label', 'Cancel')}
    onClick={action('Cancel deletion of vocab card')}
    width="50%"
    degree="secondary"
    type="button"
  />
)
