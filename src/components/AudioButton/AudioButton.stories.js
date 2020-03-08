import React from 'react'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'
import AudioButton from './AudioButton'

export default {
  title: 'Components/AudioButton',
  decorators: [withKnobs],
  component: AudioButton,
}

const audioButtonStyles = {
  display: 'flex',
  border: 'solid var(--grey-color-dark) 1.5px',
  borderRadius: '4px',
  background: 'var(--background-color)',
  padding: '5px 8px',
}

export const Default_Audio_Button = () => (
  <AudioButton
    buttonLabel="Listen to Audio"
    onClick={action('Audio plays')}
    style={audioButtonStyles}
  />
)
