import React from 'react'
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

export const Default_Audio_Upload = () => <AudioUpload />
