import React from 'react'
import styled from 'styled-components/macro'
import '../common/colors.css'

export default function Badge({ partOfSpeechCategory }) {
  return (
    <BadgeStyled partOfSpeechCategory={partOfSpeechCategory}>
      {partOfSpeechCategory}
    </BadgeStyled>
  )
}

const selectColour = props =>
  props.partOfSpeechCategory === 'Noun'
    ? 'var(--secondary-color)'
    : props.partOfSpeechCategory === 'Verb'
    ? 'var(--primary-color)'
    : 'var(--tertiary-color)'

const BadgeStyled = styled.span`
  border-radius: 6px;
  padding: 4px 7px 2px;
  border: solid 1px ${selectColour};
  color: ${selectColour};
`
