import React from 'react'
import { action } from '@storybook/addon-actions'
import DeleteConfirmation from './DeleteConfirmation'

export default {
  title: 'Components/DeleteConfirmation',
  component: DeleteConfirmation,
  decorators: [
    renderDeleteConfirmation => (
      <div style={{ padding: 20, width: 400 }}>
        {renderDeleteConfirmation()}
      </div>
    ),
  ],
}

export const Default_DeleteConfirmation = () => (
  <DeleteConfirmation
    isOpen={true}
    onCancel={action('Cancel vocab card deletion')}
    onDelete={action('Delete vocab card')}
  />
)
