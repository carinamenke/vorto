import { useEffect, useState } from 'react'
import { loadFromLocal, saveToLocal } from '../common/utils'
import { storage } from '../firebase'
import data from '../vocabs.json'

export default function useVocabs() {
  const defaultVocabs = data.vocabs || []
  const [vocabs, setVocabs] = useState(loadFromLocal('vocabs') || defaultVocabs)

  useEffect(() => {
    saveToLocal('vocabs', vocabs)
  }, [vocabs])

  function addVocab(newVocab) {
    const newVocabs = [newVocab, ...vocabs]
    setVocabs(newVocabs)
  }

  function deleteVocab(id) {
    const index = vocabs.findIndex(vocab => vocab.id === id)
    setVocabs([...vocabs.slice(0, index), ...vocabs.slice(index + 1)])
    const toBeDeletedVocab = vocabs.find(vocab => vocab.id === id)
    const image = storage.ref(`images/${toBeDeletedVocab.imageTitle}`)
    const audio = storage.ref(`audio/${toBeDeletedVocab.audioTitle}`)
    if (toBeDeletedVocab.imageSrc) {
      image.delete().catch(error => {}) //for now no error message necessary
    }
    if (toBeDeletedVocab.audioSrc) {
      audio.delete().catch(error => {}) //for now no error message necessary
    }
  }

  return { vocabs, setVocabs, addVocab, deleteVocab }
}
