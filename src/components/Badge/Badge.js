import React from 'react'
import styled from 'styled-components/macro'

export default function Badge({ label }) {
  return <BadgeStyled label={label}>{label}</BadgeStyled>
}

function selectColour(props) {
  if (props.label === 'Noun') {
    return 'var(--color-secondary)'
  } else if (props.label === 'Verb') {
    return 'var(--color-primary)'
  } else {
    return 'var(--color-tertiary)'
  }
}

const BadgeStyled = styled.span`
  border-radius: 6px;
  padding: 3px 7px 1px;
  border: solid 1.5px ${selectColour};
  color: ${selectColour};
`
