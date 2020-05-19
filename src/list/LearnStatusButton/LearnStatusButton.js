import React from 'react'
import styled from 'styled-components/macro'
import { FiCheck, FiRotateCcw } from 'react-icons/fi'
import PropTypes from 'prop-types'

LearnStatusButton.propTypes = {
  onLearnStatusClick: PropTypes.func.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  id: PropTypes.string,
}

export default function LearnStatusButton({
  onLearnStatusClick,
  id,
  learnStatus,
}) {
  return (
    <ToggleButtonStyled
      onClick={() => onLearnStatusClick(id)}
      active={learnStatus}
      data-cy="status-btn"
    >
      {learnStatus ? (
        <FiRotateCcw className="icon" />
      ) : (
        <FiCheck className="icon" />
      )}
      {learnStatus ? 'To be Learned' : 'Learned'}
    </ToggleButtonStyled>
  )
}

const ToggleButtonStyled = styled.button`
  background: ${props =>
    props.active ? 'var(--color-grey-mid1)' : 'var(--color-primary-light)'};
  color: ${props =>
    props.active ? 'var(--color-text-white)' : 'var(--color-primary-active)'};
  border: none;
  border-radius: 4px;
  padding: 7px;
  margin: 15px 10px 15px auto;
  height: 35px;
  width: 50%;
  box-shadow: 0 5px 4px -2px ${props => (props.active ? 'var(--color-grey-shadow)' : 'var(--color-primary-shadow)')};
  word-wrap: break-word;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    margin-right: 3px;
  }

  :hover {
    background: ${props =>
      props.active ? 'var(--color-grey-mid2)' : 'var(--color-primary-mid)'};
  }

  :active {
    background: ${props =>
      props.active ? 'var(--color-grey-dark)' : 'var(--color-primary)'};
    color: var(--color-text-white);
  }
`
