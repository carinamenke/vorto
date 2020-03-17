import React from 'react'
import VocabList from '../components/VocabList/VocabList'
import LearnStatusFilter from '../components/LearnStatusFilter/LearnStatusFilter'

export default function ListPage({ vocabs }) {
  return (
    <>
      <LearnStatusFilter />
      <VocabList vocabs={vocabs} />
    </>
  )
}
