import React from 'react'
import { action } from '@storybook/addon-actions'
import DeleteButton from './DeleteButton'

export default {
  title: 'Components/DeleteButton',
  component: DeleteButton,
  decorators: [
    renderClosingIcon => (
      <div style={{ padding: 20, width: 400 }}>{renderClosingIcon()}</div>
    ),
  ],
}

export const Default_DeleteButton = () => (
  <DeleteButton onClick={action('Delete vocab card')} />
)
