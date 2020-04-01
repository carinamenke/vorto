import { action } from '@storybook/addon-actions'
import { boolean, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import DeleteConfirmation from './DeleteConfirmation'

export default {
  title: 'Components/DeleteConfirmation',
  component: DeleteConfirmation,
  decorators: [
    withKnobs,
    renderDeleteConfirmation => (
      <div style={{ padding: 20, width: 400 }}>
        {renderDeleteConfirmation()}
      </div>
    ),
  ],
}

export const Default_DeleteConfirmation = () => (
  <DeleteConfirmation
    isOpen={boolean('Overlay is open', true)}
    onCancel={action('Cancel vocab card deletion')}
    onDelete={action('Delete vocab card')}
  />
)
