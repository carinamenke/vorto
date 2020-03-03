import React from 'react'
import styled from 'styled-components/macro'

export default function Card({
  vocabImageSrc,
  vocabTitle,
  partOfSpeechCategory,
}) {
  return (
    <CardStyled
      partOfSpeechCategory={partOfSpeechCategory}
      vocabImageSrc={vocabImageSrc}
    >
      <div className="card__image-container"></div>
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

  .card__image-container {
    background: center url(${props => props.vocabImageSrc});
    background-size: cover;
    height: 350px;
    width: 100%;
    border-radius: 10px 10px 0px 0px;
    border-bottom: solid #f6f6f6 2px;
  }

  .card__content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    margin: 15px 15px 20px;
  }

  .card__content--title {
    color: #424242;
    margin: 0px;
    font-size: 24px;
    word-wrap: break-word;
    max-width: 80%;
  }

  .card__content--badge {
    border-radius: 6px;
    padding: 4px 7px 2px;
    border: solid 1px
      ${props =>
        props.partOfSpeechCategory === 'Noun'
          ? '#f19e20'
          : props.partOfSpeechCategory === 'Verb'
          ? '#F08F8F'
          : '#1E6781'};
    color: ${props =>
      props.partOfSpeechCategory === 'Noun'
        ? '#f19e20'
        : props.partOfSpeechCategory === 'Verb'
        ? '#F08F8F'
        : '#1E6781'};
  }
`
