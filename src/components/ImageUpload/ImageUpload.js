import React from 'react'
import { IoMdImages } from 'react-icons/io'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  previewImage: PropTypes.object,
}

export default function ImageUpload({ onChange, previewImage }) {
  return (
    <ImageUploadStyled>
      {previewImage.imageUrl ? (
        <img className="image-container" src={previewImage.imageUrl} alt="" />
      ) : (
        <div className="image-placeholder">
          <ImageIcon />
        </div>
      )}
      <span className="file-input-label">Select Image</span>
      <input
        type="file"
        name="imageSrc"
        accept="image/png, image/jpeg"
        className="file-input"
        onChange={onChange}
      />
    </ImageUploadStyled>
  )
}

const ImageUploadStyled = styled.label`
  font-size: 12px;
  margin-bottom: 15px;

  .image-placeholder {
    background: var(--grey-color-light);
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: auto;
    height: 150px;
    align-items: center;
    justify-content: center;
  }

  .image-container {
    background: center url(${props => props.image});
    object-fit: cover;
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    width: 100%;
    height: 300px;
  }

  .file-input-label {
    border: none;
    border-radius: 4px;
    background: var(--primary-color-light);
    color: var(--primary-color-active);
    height: 35px;
    padding: 10px;
    text-align: center;
    position: relative;
    top: 10px;
    width: 50%;

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

const ImageIcon = styled(IoMdImages)`
  width: 100px;
  height: 100px;
`
