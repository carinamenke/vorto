import PropTypes from 'prop-types'
import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import { v4 as uuidv4 } from 'uuid'
import AudioUpload from './AudioUpload'
import Button from '../common/Button'
import Headline from '../common/Headline'
import ImageUpload from './ImageUpload'
import SelectInput from './SelectInput'
import TextInput from './TextInput'
import usePreview from '../hooks/usePreview'
import { uploadAudio, uploadImage } from './services'

FormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function FormPage({ onSubmit }) {
  const {
    previewImage,
    setPreviewImage,
    previewAudio,
    setPreviewAudio,
    loadProgress,
    setLoadProgress,
  } = usePreview()

  const wordCategories = [
    { value: 'Noun', placeholder: 'Noun' },
    { value: 'Verb', placeholder: 'Verb' },
    { value: 'Adjective', placeholder: 'Adjective' },
  ]

  const history = useHistory()

  return (
    <FormStyled onSubmit={handleSubmit}>
      <Headline text="Add a new Vocabulary" />
      <ImageUpload
        name="imageSrc"
        onChange={handleImageUpload}
        previewImage={previewImage}
        loadProgress={loadProgress}
      />
      <TextInput
        label="Vocabulary"
        required={true}
        name="wordTitle"
        minLength="2"
        maxLength="40"
        placeholder="E.g. 'house'"
      />
      <TextInput
        label="Translation"
        required={true}
        name="translation"
        minLength="2"
        maxLength="40"
        placeholder="E.g. 'maison'"
      />
      <SelectInput
        label="Word category"
        name="partOfSpeechCategory"
        required={true}
        placeholder="Select a category"
        options={wordCategories}
      />
      <AudioUpload onChange={handleAudioUpload} previewAudio={previewAudio} />
      <Button label="Submit" type="submit" width="100%" degree="primary" />
      <small>
        <sup>*</sup>Mandatory fields
      </small>
    </FormStyled>
  )

  function handleImageUpload(event) {
    const image = event.target.files[0]
    uploadImage(image, setLoadProgress, setPreviewImage)
  }

  function handleAudioUpload(event) {
    const audio = event.target.files[0]
    uploadAudio(audio, setPreviewAudio)
  }

  function handleSubmit(event) {
    const form = event.target
    const wordTitle = form.wordTitle
    const translation = form.translation
    const partOfSpeechCategory = form.partOfSpeechCategory
    event.preventDefault()
    onSubmit({
      wordTitle: wordTitle.value,
      translation: translation.value,
      partOfSpeechCategory: partOfSpeechCategory.value,
      learned: false,
      id: uuidv4(),
      imageSrc: previewImage?.imageUrl,
      imageTitle: previewImage?.imageName,
      audioSrc: previewAudio?.audioUrl,
      audioTitle: previewAudio?.audioName,
    })
    history.push('/')
    setPreviewImage({ imageUrl: '', imageName: '' })
    setPreviewAudio({ audioUrl: '', audioName: '' })
  }
}

const FormStyled = styled.form`
  grid-row: 2 / 4;
  padding: 0 15px 0;
  display: grid;
  grid-row-gap: 20px;
  overflow-y: scroll;

  small {
    font-size: 10px;
    margin-top: -30px;
  }

  @media screen and (min-width: 700px) {
    width: 700px;
    margin: 0 auto;
  }
`
