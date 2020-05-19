import { array, boolean, object, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import SelectInput from './SelectInput'

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  decorators: [
    withKnobs,
    renderInputSelect => (
      <div style={{ padding: 20, width: 400 }}>{renderInputSelect()}</div>
    ),
  ],
}

const wordCategories = [
  object('Option1', { value: 'noun', placeholder: 'Noun' }),
  object('Option2', { value: 'verb', placeholder: 'Verb' }),
  object('Option3', { value: 'adjective', placeholder: 'Adjective' }),
]

export const Word_Category_Selection = () => (
  <SelectInput
    label={text('Label', 'Word category')}
    name="wordCategory"
    required={boolean('Mandatory field', true)}
    placeholder={text('Placeholder', 'Select a category')}
    options={array('Options', wordCategories)}
  />
)
