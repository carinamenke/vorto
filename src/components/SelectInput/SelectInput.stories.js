import React from 'react'
import SelectInput from './SelectInput'

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
  decorators: [
    renderSelectInput => (
      <div style={{ padding: 20, width: 400 }}>{renderSelectInput()}</div>
    ),
  ],
}

const wordCategories = [
  { value: 'noun', placeholder: 'Noun' },
  { value: 'verb', placeholder: 'Verb' },
  { value: 'adjective', placeholder: 'Adjective' },
]

export const Word_Category_Selection = () => (
  <SelectInput
    label="Word category"
    name="wordCategory"
    required="required"
    placeholder="Select a category"
    options={wordCategories}
  />
)
