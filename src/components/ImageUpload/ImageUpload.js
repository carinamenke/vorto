import PropTypes from 'prop-types'
import React from 'react'
import { IoMdImages } from 'react-icons/io'
import styled from 'styled-components/macro'

ImageUpload.propTypes = {
  onChange: PropTypes.func.isRequired,
  previewImage: PropTypes.object,
  loadProgress: PropTypes.number,
}

export default function ImageUpload({ onChange, previewImage, loadProgress }) {
  return (
    <ImageUploadStyled>
      {previewImage.imageUrl ? (
        <ImageContainer src={previewImage.imageUrl} alt="" />
      ) : (
        <ImagePlaceholder>
          <ImageIcon />
        </ImagePlaceholder>
      )}
      {loadProgress > 0 && (
        <span>Upload is {Math.trunc(loadProgress)}% done</span>
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

  .file-input-label {
    border: none;
    border-radius: 4px;
    background: var(--primary-color-light);
    color: var(--primary-color-active);
    height: 35px;
    padding: 10px;
    position: relative;
    top: 10px;
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;

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

const ImagePlaceholder = styled.div`
  background: var(--grey-color-light);
  display: flex;
  border-radius: 4px;
  width: auto;
  height: 150px;
  align-items: center;
  justify-content: center;
`

const ImageContainer = styled.img`
  background: center url(${props => props.image});
  object-fit: cover;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  width: 100%;
  height: 300px;
`

const ImageIcon = styled(IoMdImages)`
  width: 100px;
  height: 100px;
`
