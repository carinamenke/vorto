import PropTypes from 'prop-types'
import React from 'react'
import InputStyled from '../InputStyled/InputStyled'

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
}

export default function InputText({
  label,
  name,
  required,
  minLength,
  maxLength,
  placeholder,
}) {
  return (
    <InputStyled>
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
    </InputStyled>
  )
}
