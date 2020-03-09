import React from 'react'
import { action } from '@storybook/addon-actions'
import PrimaryButton from './PrimaryButton'

export default {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  decorators: [
    renderPrimaryButton => (
      <div style={{ padding: 20, width: 400 }}>{renderPrimaryButton()}</div>
    ),
  ],
}

export const SeeTranslation_Btn = () => (
  <PrimaryButton
    buttonLabel="See Translation"
    onClick={action('Opens Translation')}
  />
)
export const Close_Btn = () => (
  <PrimaryButton buttonLabel="Close" onClick={action('Closes Translation')} />
)
