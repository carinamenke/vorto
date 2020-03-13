import React from 'react'
import InputSelect from './InputSelect'

export default {
  title: 'Components/InputSelect',
  component: InputSelect,
  decorators: [
    renderInputSelect => (
      <div style={{ padding: 20, width: 400 }}>{renderInputSelect()}</div>
    ),
  ],
}

const wordCategories = [
  { value: 'noun', placeholder: 'Noun' },
  { value: 'verb', placeholder: 'Verb' },
  { value: 'adjective', placeholder: 'Adjective' },
]

export const Word_Category_Selection = () => (
  <InputSelect
    label="Word category"
    name="wordCategory"
    required="required"
    placeholder="Select a category"
    options={wordCategories}
  />
)
