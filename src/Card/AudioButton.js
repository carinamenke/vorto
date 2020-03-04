import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { FiVolume1 } from 'react-icons/fi'

AudioButton.propTypes = {
  buttonLabel: PropTypes.string.isRequired,
  vocabAudioSrc: PropTypes.string.isRequired,
}

export default function AudioButton({ buttonLabel, vocabAudioSrc }) {
  return (
    <AudioButtonStyled onClick={playAudio}>
      <FiVolume1 className="audio-button__icon" />
      <audio id="vocabAudio" src={vocabAudioSrc} preload="auto"></audio>
      <span className="audio-button__label">{buttonLabel}</span>
    </AudioButtonStyled>
  )
}

function playAudio() {
  const audioEl = document.getElementById('vocabAudio')
  audioEl.play()
}

const AudioButtonStyled = styled.button`
  display: flex;
  border: solid grey 1px;
  border-radius: 4px;
  background: #fff;
  padding: 6px 8px;

  .audio-button__label,
  .audio-button__icon {
    color: #424242;
  }

  .audio-button__label {
    font-size: 14px;
    margin-left: 3px;
  }

  :active {
    background: rgba(163, 163, 163);
    border: solid rgba(163, 163, 163) 1px;

    .audio-button__label,
    .audio-button__icon {
      color: #fff;
    }
  }
`
