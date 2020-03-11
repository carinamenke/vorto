import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default function TextInput({
  label,
  name,
  required,
  minLength,
  maxLength,
  placeholder,
}) {
  return (
    <TextInputStyled>
      <div className="input-label">
        {label}
        {{ required } ? <sup>*</sup> : ''}
      </div>
      <input
        type="text"
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className="input"
      />
    </TextInputStyled>
  )
}

const TextInputStyled = styled.label`
  font-size: 12px;
  display: flex;
  flex-direction: column;

  .input-label {
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .input {
    border: none;
    border-radius: 4px;
    background: var(--grey-color-light);
    height: 35px;
    padding: 10px;
  }
`
