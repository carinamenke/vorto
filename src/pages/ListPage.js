import PropTypes from 'prop-types'
import React from 'react'
import VocabList from '../components/VocabList/VocabList'

ListPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
}

export default function ListPage({ vocabs }) {
  return <VocabList vocabs={vocabs} />
}
