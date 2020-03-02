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
      <img
        className="card__image"
        src={vocabImageSrc}
        alt={vocabImageAltText}
      />
      <div className="card__content">
        <h1 className="card__content--title">{vocabTitle}</h1>
        <span className="card__content--badge">{partOfSpeechCategory}</span>
      </div>
    </CardStyled>
  )
}

const CardStyled = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: flex;
  flex-direction: column;
  background: #fff;
  height: auto;
  border-radius: 11px;
  box-shadow: 0px 9px 16px -5px rgba(163, 163, 163, 50);
  font-family: Helvetica, sans-serif;

  .card__image {
    height: auto;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    border-bottom: solid #f6f6f6 2px;
  }

  .card__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    margin: 15px 15px 20px;
  }

  .card__content--title {
    color: #424242;
    margin: 0px;
    font-size: 24px;
  }

  .card__content--badge {
    border: solid 1px #f19e20;
    border-radius: 6px;
    color: #f19e20;
    padding: 2px 7px;
  }
`
