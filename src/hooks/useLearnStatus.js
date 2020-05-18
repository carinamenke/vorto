import { useMemo, useState } from 'react'

export default function useLearnStatus(vocabs, setVocabs) {
  const [learnStatus, setLearnStatus] = useState(false)
  const learnedVocabs = useMemo(() => vocabs.filter(vocab => vocab.learned), [
    vocabs,
  ])
  const toBeLearnedVocabs = useMemo(
    () => vocabs.filter(vocab => !vocab.learned),
    [vocabs]
  )
  const vocabsByLearnStatus = learnStatus ? learnedVocabs : toBeLearnedVocabs

  function handleLearnStatusClick(id) {
    const index = vocabs.findIndex(vocab => vocab.id === id)
    const updatedVocab = {
      ...vocabs[index],
      learned: !vocabs[index].learned,
    }
    setVocabs([
      updatedVocab,
      ...vocabs.slice(0, index),
      ...vocabs.slice(index + 1),
    ])
  }
  function selectLearnStatus(learnStatus) {
    return setLearnStatus(learnStatus)
  }

  return {
    learnStatus,
    learnedVocabs,
    toBeLearnedVocabs,
    vocabsByLearnStatus,
    handleLearnStatusClick,
    selectLearnStatus,
  }
}
