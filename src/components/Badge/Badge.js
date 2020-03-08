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
  padding: 3px 7px 1px;
  border: solid 1.5px ${selectColour};
  color: ${selectColour};
`
