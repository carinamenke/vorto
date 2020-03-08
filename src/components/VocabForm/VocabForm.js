import React from 'react'
import styled from 'styled-components/macro'
import PrimaryButton from '../PrimaryButton/PrimaryButton'
import { FiChevronLeft, FiX, FiImage } from 'react-icons/fi'
import { BrowserRouter as Link } from 'react-router-dom'

export default function VocabForm() {
  return (
    <FormStyled>
      <Link to="/">
        <a href="/" className="backlink">
          <FiChevronLeft className="backlink-icon" />
          <span className="backlink-label">Back</span>
        </a>
      </Link>
      <Link to="/">
        <a href="/" className="closing-icon">
          <FiX />
        </a>
      </Link>
      <form action="">
        <h1>Add a new Vocabulary</h1>
        <label>
          <div className="imageContainer">
            <FiImage className="imageIcon" />
            <span className="fileInputLabel">Add Image</span>
          </div>
          <input
            type="file"
            name="image"
            accept="image/png, image/jpeg"
            className="fileInput"
          />
        </label>
        <label>
          VOCABULARY*
          <input
            type="text"
            name="vocab"
            required
            minLength="2"
            maxLength="40"
            placeholder="E.g. 'house'"
          />
        </label>
        <label>
          TRANSLATION*
          <input
            type="text"
            name="translation"
            required
            minLength="2"
            maxLength="40"
            placeholder="E.g. 'maison'"
          />
        </label>
        <label>
          WORD CATEGORY*
          <select name="wordCategory" required>
            <option value="">Select a category</option>
            <option value="noun">Noun</option>
            <option value="verb">Verb</option>
            <option value="adjective">Adjective</option>
          </select>
        </label>
        <label className="fileInputLabel">
          Add Audio
          <input
            type="file"
            name="audio"
            accept="audio/mp3"
            className="fileInput"
          />
        </label>
        <PrimaryButton buttonLabel="Submit" />
        <small>*Mandatory fields</small>
      </form>
    </FormStyled>
  )
}

const FormStyled = styled.section`
  margin: 15px;

  form {
    display: flex;
    flex-direction: column;
  }

  .backlink {
    position: absolute;
    top: 15px;
    left: 12px;
    display: flex;
    align-items: center;
    font-size: 14px;
    text-decoration: none;

    :visited {
      color: var(--grey-color-dark);
    }
  }

  .backlink-icon {
    width: 20px;
    height: 20px;
  }

  .backlink-label {
    margin-top: 2px;
  }

  .closing-icon {
    position: absolute;
    top: 15px;
    right: 15px;
    width: 20px;
    height: 20px;

    :visited {
      color: var(--grey-color-dark);
    }
  }

  h1 {
    margin: 30px 0 0;
    font-size: 21px;
    font-weight: 400;
  }

  .imageContainer {
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

  .imageIcon {
    width: 100px;
    height: 100px;
    stroke-width: 1;
  }

  label {
    font-size: 12px;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
  }

  [type='text'],
  select {
    border: none;
    border-radius: 4px;
    background: var(--grey-color-light);
    height: 35px;
    padding: 10px;
  }

  .fileInput {
    visibility: hidden;
  }

  .fileInputLabel {
    border: none;
    border-radius: 4px;
    background: var(--primary-color-light);
    color: var(--primary-color-active);
    height: 35px;
    padding: 10px;
    width: 50%;
    text-align: center;
  }

  small {
    font-size: 10px;
  }
`
