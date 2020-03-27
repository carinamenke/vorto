import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

AudioUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  previewAudio: PropTypes.object,
}

export default function AudioUpload({ onChange, previewAudio }) {
  return (
    <WrapperStyled>
      <AudioUploadStyled>
        Select Audio
        <input
          type="file"
          name="audioSrc"
          accept="audio/mp3"
          className="file-input"
          onChange={onChange}
        />
      </AudioUploadStyled>
      {previewAudio.audioUrl && (
        <span className="audio-upload-status">
          {previewAudio.audioName} was selected.
        </span>
      )}
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  margin-top: 10px;
  font-size: 12px;
  display: flex;
  align-items: center;

  .audio-upload-status {
    color: var(--grey-color-dark);
    word-wrap: break-word;
    margin-left: 10px;
  }
`

const AudioUploadStyled = styled.label`
  border: none;
  border-radius: 4px;
  background: var(--primary-color-light);
  color: var(--primary-color-active);
  height: 35px;
  padding: 10px;
  width: 40%;
  text-align: center;

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
`
