import React from 'react'
import styled from 'styled-components/macro'

export default function AudioUpload() {
  return (
    <AudioUploadStyled>
      Add Audio
      <input
        type="file"
        name="audioSrc"
        accept="audio/mp3"
        className="file-input"
      />
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
`
