import React from 'react'
import { action } from '@storybook/addon-actions'
import DeleteButton from './DeleteButton'

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
  decorators: [
    renderDeleteButton => (
      <div style={{ padding: 20, width: 400 }}>{renderDeleteButton()}</div>
    ),
  ],
}

export const Default_DeleteButton = () => (
  <DeleteButton onClick={action('Delete vocab card')} />
)
