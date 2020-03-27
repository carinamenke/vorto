import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import AudioUpload from '../components/AudioUpload/AudioUpload'
import Headline from '../components/Headline/Headline'
import ImageUpload from '../components/ImageUpload/ImageUpload'
import InputSelect from '../components/InputSelect/InputSelect'
import InputText from '../components/InputText/InputText'
import PrimaryButton from '../components/PrimaryButton/PrimaryButton'
import { v4 as uuidv4 } from 'uuid'
import { storage } from '../firebase'

FormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default function FormPage({ onSubmit }) {
  const [previewImage, setPreviewImage] = useState({ imageUrl: '' })
  const [previewAudio, setPreviewAudio] = useState({
    audioUrl: '',
    audioName: '',
  })
  const wordCategories = [
    { value: 'Noun', placeholder: 'Noun' },
    { value: 'Verb', placeholder: 'Verb' },
    { value: 'Adjective', placeholder: 'Adjective' },
  ]
  const history = useHistory()

  return (
    <FormStyled action="" onSubmit={handleSubmit}>
      <Headline text="Add a new Vocabulary" />
      <ImageUpload
        name="imageSrc"
        onChange={handleImageUpload}
        previewImage={previewImage}
      />
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
      <AudioUpload onChange={handleAudioUpload} previewAudio={previewAudio} />
      <PrimaryButton label="Submit" type="submit" width="100%" />
      <small>
        <sup>*</sup>Mandatory fields
      </small>
    </FormStyled>
  )

  function handleImageUpload(event) {
    const image = event.target.files[0]
    const metadata = {
      name: image.name,
    }
    const uploadTask = storage.ref(`images/${image.name}`).put(image, metadata)
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            setPreviewImage({ imageUrl: url })
          })
      }
    )
  }

  function handleAudioUpload(event) {
    const audio = event.target.files[0]
    const metadata = {
      name: audio.name,
    }
    const uploadTask = storage.ref(`audio/${audio.name}`).put(audio, metadata)
    uploadTask.on(
      'state_changed',
      snapshot => {},
      error => {
        console.error(error)
      },
      () => {
        storage
          .ref('audio')
          .child(audio.name)
          .getDownloadURL()
          .then(url => {
            setPreviewAudio({ audioUrl: url, audioName: audio.name })
          })
      }
    )
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
      imageSrc: previewImage && previewImage.imageUrl,
      audioSrc: previewAudio && previewAudio.audioUrl,
    })
    history.push('/')
    setPreviewImage({ imageUrl: '' })
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
