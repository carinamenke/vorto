import React from 'react'
import ImageUpload from './ImageUpload'

export default {
  title: 'Components/ImageUpload',
  component: ImageUpload,
  decorators: [
    renderImageUpload => (
      <div style={{ padding: 20, width: 400 }}>{renderImageUpload()}</div>
    ),
  ],
}

export const Default_Image_Upload = () => <ImageUpload />
