import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

AudioUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  previewAudio: PropTypes.object,
}

export default function AudioUpload({ onChange, previewAudio }) {
  return (
    <AudioUploadStyled>
      Select Audio
      <input
        type="file"
        name="audioSrc"
        accept="audio/mp3"
        className="file-input"
        onChange={onChange}
      />
      {previewAudio.audioUrl && (
        <span className="audio-upload-status">
          {previewAudio.audioName} was selected.
        </span>
      )}
    </AudioUploadStyled>
  )
}

const AudioUploadStyled = styled.label`
  margin-top: 10px;
  border: none;
  border-radius: 4px;
  background: var(--primary-color-light);
  color: var(--primary-color-active);
  height: 35px;
  padding: 10px;
  width: 50%;
  text-align: center;
  font-size: 12px;

  :hover {
    background: var(--primary-color);
    color: var(--text-color-white);
  }

  :active {
    background: var(--primary-color-hover);
    color: var(--text-color-white);
  }

  .file-input {
    visibility: hidden;
  }

  .audio-upload-status {
    color: var(--grey-color-dark);
    display: inline;
  }
`
