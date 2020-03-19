import PropTypes from 'prop-types'
import React, { useState } from 'react'
import VocabList from '../components/VocabList/VocabList'
import LearnStatusFilter from '../components/LearnStatusFilter/LearnStatusFilter'

ListPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
}

export default function ListPage({ vocabs }) {
  const [learnStatus, setlearnStatus] = useState(false)
  const learnedVocabs = vocabs.filter(vocab => vocab.learned === true)
  const toBeLearnedVocabs = vocabs.filter(vocab => vocab.learned === false)

  const vocabsByLearnStatus =
    learnStatus === false ? toBeLearnedVocabs : learnedVocabs

  return (
    <>
      <LearnStatusFilter
        onClick={selectLearnStatus}
        learnStatus={learnStatus}
        learnedVocabs={learnedVocabs}
        toBeLearnedVocabs={toBeLearnedVocabs}
      />
      <VocabList vocabs={vocabsByLearnStatus} />
    </>
  )

  function selectLearnStatus(learnStatus) {
    return setlearnStatus(learnStatus)
  }
}
