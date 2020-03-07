import React from 'react'
import styled from 'styled-components/macro'

export default function Badge({ label }) {
  return <BadgeStyled label={label}>{label}</BadgeStyled>
}

function selectColour(props) {
  if (props.label === 'Noun') {
    return 'var(--secondary-color)'
  } else if (props.label === 'Verb') {
    return 'var(--primary-color)'
  } else {
    return 'var(--tertiary-color)'
  }
}

const BadgeStyled = styled.span`
  border-radius: 6px;
  padding: 4px 7px 2px;
  border: solid 1px ${selectColour};
  color: ${selectColour};
`
