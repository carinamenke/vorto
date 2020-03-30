import React from 'react'
import { action } from '@storybook/addon-actions'
import PrimaryButton from './PrimaryButton'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [
    withKnobs,
    renderPrimaryButton => (
      <div style={{ padding: 20, width: 400 }}>{renderPrimaryButton()}</div>
    ),
  ],
}

export const SeeTranslation_Btn = () => (
  <PrimaryButton
    label={text('Label', 'See Translation')}
    onClick={action('Opens Translation')}
    width="100%"
  />
)
export const Close_Btn = () => (
  <PrimaryButton
    label={text('Label', 'Close')}
    onClick={action('Closes Translation')}
    width="50%"
  />
)
export const Submit_Btn = () => (
  <PrimaryButton
    label={text('Label', 'Submit')}
    onClick={action('Submits form')}
    width="100%"
  />
)
