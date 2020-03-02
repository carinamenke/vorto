import React from 'react'
import styled from 'styled-components/macro'

export default function Card({
  vocabImageSrc,
  vocabImageAltText,
  vocabTitle,
  partOfSpeechCategory,
}) {
  return (
    <CardStyled>
      <img src={vocabImageSrc} alt={vocabImageAltText} />
      <h1>{vocabTitle}</h1>
      <span>{partOfSpeechCategory}</span>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  background: #fff;
  width: 290px;
  height: 380px;
  border-radius: 10%;
`
