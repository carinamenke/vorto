import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { FiVolume1 } from 'react-icons/fi'

AudioButton.propTypes = {
  audioSrc: PropTypes.string,
}

export default function AudioButton({ audioSrc }) {
  const audioEl = useRef()

  return (
    <AudioButtonStyled onClick={playAudio} audioSrc={audioSrc}>
      <FiVolume1 className="icon" />
      <audio ref={audioEl} src={audioSrc} preload="auto"></audio>
      <span className="label">Listen to Audio</span>
    </AudioButtonStyled>
  )

  function playAudio() {
    audioEl.current.play()
  }
}

const AudioButtonStyled = styled.button`
  display: flex;
  border: solid var(--color-grey-dark) 1.5px;
  border-radius: 4px;
  background: var(--color-background);
  padding: 5px 8px;

  .label,
  .icon {
    color: var(--color-grey-dark);
  }

  .label {
    font-size: 14px;
    margin-left: 3px;
  }

  :hover {
    background: var(--color-grey-mid1);
    border: solid var(--color-grey-mid1) 1.5px;

    .label,
    .icon {
      color: var(--color-text-white);
    }
  }

  :active {
    background: var(--color-grey-mid2);
    border: solid var(--color-grey-mid2) 1.5px;
  }
`
