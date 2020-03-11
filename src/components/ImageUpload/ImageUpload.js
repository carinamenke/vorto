import React from 'react'
import { IoMdImages } from 'react-icons/io'
import styled from 'styled-components/macro'

export default function ImageUpload() {
  return (
    <ImageUploadStyled>
      <div className="image-container">
        <IoMdImages className="image-icon" />
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

    :hover {
      background: var(--primary-color);
      color: var(--text-color-white);
    }

    :active {
      background: var(--primary-color-hover);
      color: var(--text-color-white);
    }
  }

  .file-input {
    visibility: hidden;
  }
`
