import React from 'react'
import InputSelect from './InputSelect'
import { withKnobs, boolean, text, array, object } from '@storybook/addon-knobs'

export default {
  title: 'Components/InputSelect',
  component: InputSelect,
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
  <InputSelect
    label={text('Label', 'Word category')}
    name="wordCategory"
    required={boolean('Mandatory field', true)}
    placeholder={text('Placeholder', 'Select a category')}
    options={array('Options', wordCategories)}
  />
)
