import PropTypes from 'prop-types'
import React from 'react'
import VocabList from '../components/VocabList/VocabList'
import LearnStatusFilter from '../components/LearnStatusFilter/LearnStatusFilter'

ListPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
}

export default function ListPage({ vocabs }) {
  return (
    <>
      <LearnStatusFilter />
      <VocabList vocabs={vocabs} />
    </>
  )
}
