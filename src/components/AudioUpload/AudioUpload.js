import React from 'react'
import styled from 'styled-components/macro'

export default function AudioUpload() {
  return (
    <AudioUploadStyled>
      Add Audio
      <input
        type="file"
        name="audio"
        accept="audio/mp3"
        className="file-input"
      />
    </AudioUploadStyled>
  )
}

const AudioUploadStyled = styled.label`
  font-size: 12px;
  margin-top: 20px;
  border: none;
  border-radius: 4px;
  background: var(--primary-color-light);
  color: var(--primary-color-active);
  height: 35px;
  padding: 10px;
  width: 50%;
  text-align: center;

  .file-input {
    visibility: hidden;
  }
`
