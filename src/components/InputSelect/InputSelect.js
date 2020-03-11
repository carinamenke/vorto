import PropTypes from 'prop-types'
import React from 'react'
import InputStyled from '../InputStyled/InputStyled'
import { uid } from 'react-uid'

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
    <InputStyled>
      <div className="input-label">
        {label}
        {{ required } ? <sup>*</sup> : ''}
      </div>
      <select name={name} required={required} className="input">
        <option value="">{placeholder}</option>
        {options.map(option => (
          <option key={uid(option)} value={option.value}>
            {option.placeholder}
          </option>
        ))}
      </select>
    </InputStyled>
  )
}
