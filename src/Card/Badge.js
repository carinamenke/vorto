import React from 'react'
import styled from 'styled-components/macro'

export default function Badge({ partOfSpeechCategory }) {
  return (
    <BadgeStyled partOfSpeechCategory={partOfSpeechCategory}>
      {partOfSpeechCategory}
    </BadgeStyled>
  )
}

const selectColour = props =>
  props.partOfSpeechCategory === 'Noun'
    ? '#f19e20'
    : props.partOfSpeechCategory === 'Verb'
    ? '#F08F8F'
    : '#1E6781'

const BadgeStyled = styled.span`
  border-radius: 6px;
  padding: 4px 7px 2px;
  border: solid 1px ${selectColour};
  color: ${selectColour};
`
