import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'

Headline.propTypes = {
  text: PropTypes.string.isRequired,
}

export default function Headline({ text }) {
  return <HeadlineStyled>{text}</HeadlineStyled>
}

const HeadlineStyled = styled.h1`
  margin: 40px 0 0;
  font-size: 21px;
  font-weight: 400;
`
