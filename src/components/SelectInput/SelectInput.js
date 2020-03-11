import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

SelectInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  placeholder: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
}

export default function SelectInput({
  label,
  name,
  required,
  placeholder,
  options,
}) {
  return (
    <SelectInputStyled>
      <div className="input-label">
        {label}
        {{ required } ? <sup>*</sup> : ''}
      </div>
      <select name={name} required={required} className="input">
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option value={option.value}>{option.placeholder}</option>
        ))}
      </select>
    </SelectInputStyled>
  )
}

const SelectInputStyled = styled.label`
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
