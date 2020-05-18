import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

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
          accept="audio/*"
          className="file-input"
          onChange={onChange}
        />
      </AudioUploadStyled>
      {previewAudio.audioUrl && (
        <span className="audio-upload-status">
          &#10004; {previewAudio.audioName.slice(0, 20)}
          {previewAudio.audioName.length > 20 && '...'} was selected.
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
  max-width: 90vw;

  .audio-upload-status {
    color: var(--color-grey-dark);
    word-wrap: break-word;
    margin-left: 10px;
  }
`

const AudioUploadStyled = styled.label`
  border: none;
  border-radius: 4px;
  background: var(--color-primary-light);
  color: var(--color-primary-active);
  height: 35px;
  padding: 10px;
  width: 40%;
  text-align: center;

  :hover {
    background: var(--color-primary);
    color: var(--color-text-white);
  }

  :active {
    background: var(--color-primary-hover);
    color: var(--color-text-white);
  }

  .file-input {
    visibility: hidden;
  }
`
