import styled from 'styled-components/macro'

const InputStyled = styled.label`
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

export default InputStyled
