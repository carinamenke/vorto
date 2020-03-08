import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import PrimaryButton from './PrimaryButton'

export default {
  title: 'Components/PrimaryButton',
  decorators: [withKnobs],
  component: PrimaryButton,
}

const primaryButtonStyles = {
  background: '#f08f8f',
  color: 'var(--text-color-white)',
  border: 'none',
  borderRadius: '6px',
  maxWidth: '100%',
  margin: '20px 15px',
  padding: '5px 7px',
  boxShadow: '0 5px 4px -2px var(--primary-color-shadow)',
  wordWrap: 'break-word',
}

export const SeeTranslation_Btn = () => (
  <PrimaryButton
    buttonLabel="See Translation"
    onClick={action('Opens Translation')}
    style={primaryButtonStyles}
  />
)
export const Close_Btn = () => (
  <PrimaryButton
    buttonLabel="Close"
    onClick={action('Closes Translation')}
    style={primaryButtonStyles}
  />
)
