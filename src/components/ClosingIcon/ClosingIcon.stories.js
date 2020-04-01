import { action } from '@storybook/addon-actions'
import React from 'react'
import ClosingIcon from './ClosingIcon'

export default {
  title: 'Components/ClosingIcon',
  component: ClosingIcon,
  decorators: [
    renderClosingIcon => (
      <div style={{ padding: 20, width: 400 }}>{renderClosingIcon()}</div>
    ),
  ],
}

export const Form_Closing_Icon = () => (
  <ClosingIcon href="/" onClick={action('Goes back to homepage')} />
)
