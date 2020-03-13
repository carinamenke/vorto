import React from 'react'
import InputText from './InputText'

export default {
  title: 'Components/InputText',
  component: InputText,
  decorators: [
    renderInputText => (
      <div style={{ padding: 20, width: 400 }}>{renderInputText()}</div>
    ),
  ],
}

export const Mandatory_Text_Input = () => (
  <InputText
    label="Vocabulary"
    required={true}
    name="vocab"
    minLength="2"
    maxLength="40"
    placeholder="E.g. 'house'"
  />
)

export const Optional_Text_Input = () => (
  <InputText
    label="Translation"
    required={false}
    name="translation"
    minLength="2"
    maxLength="40"
    placeholder="E.g. 'maison'"
  />
)
