import React from 'react'
import ImageUpload from './ImageUpload'
import { action } from '@storybook/addon-actions'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  decorators: [
    withKnobs,
    renderImageUpload => (
      <div style={{ padding: 20, width: 400 }}>{renderImageUpload()}</div>
    ),
  ],
}

const options = {
  range: true,
  min: 0,
  max: 100,
  step: 1,
}

export const inProgress_Image_Upload = () => (
  <ImageUpload
    onChange={action('Uploads image file')}
    previewImage={{ imageUrl: '' }}
    loadProgress={number('Progress', 55, options)}
  />
)
export const Finished_Image_Upload = () => (
  <ImageUpload
    onChange={action('Uploads image file')}
    previewImage={{ imageUrl: './images/door.jpg' }}
    loadProgress={number('Progress', 100, options)}
  />
)
