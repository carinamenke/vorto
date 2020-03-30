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
  <DeleteConfirmation onClick={action('Delete vocab card')} />
)
