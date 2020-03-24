import PropTypes from 'prop-types'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import styled from 'styled-components/macro'

InputSelect.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default function InputSelect({
  label,
  name,
  required,
  placeholder,
  options,
}) {
  return (
    <InputSelectStyled>
      <div className="input-label">
        {label}
        {required && <sup>*</sup>}
      </div>
      <select name={name} required={required} className="input">
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={uuidv4(option)} value={option.value}>
            {option.placeholder}
          </option>
        ))}
      </select>
    </InputSelectStyled>
  )
}

const InputSelectStyled = styled.label`
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
    height: 35px;
    padding: 10px;
    appearance: none;
    background: url('./icons/chevron-down.svg') no-repeat right
      var(--grey-color-light);
    background-position-x: right;
  }
`
