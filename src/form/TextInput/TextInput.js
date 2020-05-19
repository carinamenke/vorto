import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled from 'styled-components/macro'

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
  const [patternValidity, setPatternValidity] = useState(true)

  return (
    <TextInputStyled>
      <div className="input-label">
        {label}
        {required && <sup>*</sup>}
      </div>
      <input
        type="text"
        name={name}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        pattern="[A-zÀ-ž\s'-]+"
        className="input"
        onChange={checkValidity}
      />
      {!patternValidity && (
        <span className="pattern-error-msg">
          Please only enter letters, hyphens or apostrophes.
        </span>
      )}
    </TextInputStyled>
  )

  function checkValidity(event) {
    if (event.target.validity.patternMismatch) {
      setPatternValidity(false)
    } else {
      setPatternValidity(true)
    }
  }
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
    background: var(--color-grey-light);
    height: 35px;
    padding: 10px;
  }

  .pattern-error-msg {
    margin-top: 1px;
    color: var(--color-error);
  }
`
