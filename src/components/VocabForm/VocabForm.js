import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'
import styled from 'styled-components/macro'
import AudioUpload from '../AudioUpload/AudioUpload'
import Backlink from '../Backlink/Backlink'
import ClosingIcon from '../ClosingIcon/ClosingIcon'
import Headline from '../Headline/Headline'
import ImageUpload from '../ImageUpload/ImageUpload'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import InputSelect from '../InputSelect/InputSelect'
import InputText from '../InputText/InputText'

export default function VocabForm() {
  const wordCategories = [
    { value: 'noun', placeholder: 'Noun' },
    { value: 'verb', placeholder: 'Verb' },
    { value: 'adjective', placeholder: 'Adjective' },
  ]

  return (
    <>
      <Link to="/">
        <Backlink href="/" label="Back" />
      </Link>
      <Link to="/">
        <ClosingIcon href="/" />
      </Link>
      <FormStyled action="">
        <Headline text="Add a new Vocabulary" />
        <ImageUpload />
        <InputText
          label="Vocabulary"
          required={true}
          name="vocab"
          minLength="2"
          maxLength="40"
          placeholder="E.g. 'house'"
        />
        <InputText
          label="Translation"
          required={true}
          name="translation"
          minLength="2"
          maxLength="40"
          placeholder="E.g. 'maison'"
        />
        <InputSelect
          label="Word category"
          name="wordCategory"
          required={true}
          placeholder="Select a category"
          options={wordCategories}
        />
        <AudioUpload />
        <PrimaryButton buttonLabel="Submit" />
        <small>
          <sup>*</sup>Mandatory fields
        </small>
      </FormStyled>
    </>
  )
}

const FormStyled = styled.form`
  max-width: 700px;
  margin: 15px;
  display: grid;
  grid-row-gap: 20px;

  small {
    font-size: 10px;
    margin-top: -10px;
  }
`
