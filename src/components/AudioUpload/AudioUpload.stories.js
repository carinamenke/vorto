import React from 'react'
import { action } from '@storybook/addon-actions'
import AudioUpload from './AudioUpload'

export default {
  title: 'Components/AudioUpload',
  component: AudioUpload,
  decorators: [
    renderAudioUpload => (
      <div style={{ padding: 20, width: 400 }}>{renderAudioUpload()}</div>
    ),
  ],
}

export const Default_Audio_Upload = () => (
  <AudioUpload
    onChange={action('Uploads audio file')}
    previewAudio={{ audioUrl: '', audioName: '' }}
  />
)
export const Finished_Audio_Upload = () => (
  <AudioUpload
    onChange={action('Uploads audio file')}
    previewAudio={{ audioUrl: 'AudioUrl', audioName: 'Audio file name' }}
  />
)
