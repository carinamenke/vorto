import React from 'react'
import styled from 'styled-components/macro'
import { FiImage } from 'react-icons/fi'

export default function ImageUpload() {
  return (
    <ImageUploadStyled>
      <div className="image-container">
        <FiImage className="image-icon" />
        <span className="file-input-label">Add Image</span>
      </div>
      <input
        type="file"
        name="image"
        accept="image/png, image/jpeg"
        className="file-input"
      />
    </ImageUploadStyled>
  )
}

const ImageUploadStyled = styled.label`
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  .image-container {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    background: var(--grey-color-light);
    width: auto;
    height: 200px;
    align-items: center;
    justify-content: center;
    margin-bottom: -15px;
  }

  .image-icon {
    width: 100px;
    height: 100px;
    stroke-width: 0.5;
  }

  .file-input-label {
    border: none;
    border-radius: 4px;
    background: var(--primary-color-light);
    color: var(--primary-color-active);
    height: 35px;
    padding: 10px;
    width: 50%;
    text-align: center;
  }

  .file-input {
    visibility: hidden;
  }
`
