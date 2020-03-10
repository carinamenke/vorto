import React from 'react'
import TextInput from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
  decorators: [
    renderTextInput => (
      <div style={{ padding: 20, width: 400 }}>{renderTextInput()}</div>
    ),
  ],
}

export const Mandatory_Text_Input = () => (
  <TextInput
    label="Vocabulary"
    required={true}
    name="vocab"
    minLength="2"
    maxLength="40"
    placeholder="E.g. 'house'"
  />
)

export const Optional_Text_Input = () => (
  <TextInput
    label="Translation"
    required={false}
    name="translation"
    minLength="2"
    maxLength="40"
    placeholder="E.g. 'maison'"
  />
)
