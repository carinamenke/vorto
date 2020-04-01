import { boolean, text, withKnobs } from '@storybook/addon-knobs'
import React from 'react'
import InputText from './InputText'

export default {
  title: 'Components/InputText',
  component: InputText,
  decorators: [
    withKnobs,
    renderInputText => (
      <div style={{ padding: 20, width: 400 }}>{renderInputText()}</div>
    ),
  ],
}

export const Mandatory_Text_Input = () => (
  <InputText
    label={text('Label', 'Vocabulary')}
    required={boolean('Mandatory field', true)}
    name="vocab"
    minLength="2"
    maxLength="40"
    placeholder={text('Placeholder', 'E.g. house')}
  />
)

export const Optional_Text_Input = () => (
  <InputText
    label={text('Label', 'Translation')}
    required={boolean('Mandatory field', false)}
    name="translation"
    minLength="2"
    maxLength="40"
    placeholder={text('Placeholder', 'E.g. maison')}
  />
)
