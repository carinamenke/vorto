import React from 'react'
import { BrowserRouter as Link, useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import AudioUpload from '../components/AudioUpload/AudioUpload'
import Backlink from '../components/Backlink/Backlink'
import ClosingIcon from '../components/ClosingIcon/ClosingIcon'
import Headline from '../components/Headline/Headline'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import InputSelect from '../components/InputSelect/InputSelect'
import InputText from '../components/InputText/InputText'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'

export default function FormPage({ onSubmit }) {
  const wordCategories = [
    { value: 'Noun', placeholder: 'Noun' },
    { value: 'Verb', placeholder: 'Verb' },
    { value: 'Adjective', placeholder: 'Adjective' },
  ]
  const history = useHistory()

  return (
    <>
      <Link to="/">
        <Backlink href="/" label="Back" />
      </Link>
      <Link to="/">
        <ClosingIcon href="/" />
      </Link>
      <FormStyled action="" onSubmit={handleSubmit}>
        <Headline text="Add a new Vocabulary" />
        <ImageUpload name="imageSrc" />
        <InputText
          label="Vocabulary"
          required={true}
          name="wordTitle"
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
          name="partOfSpeechCategory"
          required={true}
          placeholder="Select a category"
          options={wordCategories}
        />
        <AudioUpload />
        <PrimaryButton label="Submit" type="submit" />
        <small>
          <sup>*</sup>Mandatory fields
        </small>
      </FormStyled>
    </>
  )

  function handleSubmit(event) {
    const form = event.target
    const wordTitle = form.wordTitle
    const translation = form.translation
    const partOfSpeechCategory = form.partOfSpeechCategory
    // const imageSrc = form.imageSrc
    // const imageData = URL.createObjectURL(imageSrc.files[0])
    // const audioSrc = form.audioSrc
    // const audioData = URL.createObjectURL(audioSrc.files[0])
    event.preventDefault()
    onSubmit({
      wordTitle: wordTitle.value,
      translation: translation.value,
      partOfSpeechCategory: partOfSpeechCategory.value,
      // imageSrc: imageData ? imageData : '',
      // audioSrc: audioData ? audioData : '',
    })
    history.push('/')
  }
}

const FormStyled = styled.form`
  grid-row: 1 / 3;
  max-width: 700px;
  margin: 15px 15px 0;
  display: grid;
  grid-row-gap: 20px;
  overflow-y: scroll;

  small {
    font-size: 10px;
    margin-top: -30px;
  }
`
