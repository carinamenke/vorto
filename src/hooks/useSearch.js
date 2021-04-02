import { useState, useEffect } from 'react'

export default function useSearch(vocabs) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    const allVocabs = vocabs.map((vocab) => {
      return {
        ...vocab,
        wordTitle: vocab.wordTitle.toLowerCase(),
        translation: vocab.translation.toLowerCase(),
      }
    })
    if (searchInput !== '') {
      let filteredVocabs = []
      filteredVocabs = allVocabs.filter(
        (vocab) =>
          vocab.wordTitle.includes(searchInput.toLowerCase()) ||
          vocab.translation.includes(searchInput.toLowerCase())
      )
      // ensures that displayed wordTitle and translation in the search results are not all lower case:
      const filteredVocabIDs = filteredVocabs.map((item) => item.id)
      setSearchResult(
        vocabs.filter(function (vocab) {
          return filteredVocabIDs.includes(vocab.id)
        })
      )
    } else {
      setSearchResult([])
    }
  }, [searchInput, vocabs])

  function handleSearch(event) {
    setSearchInput(event.target.value)
  }

  function handleReset(event) {
    const inputField = event.target
    inputField.focus()
    return setSearchInput('')
  }

  return {
    searchInput,
    setSearchInput,
    searchResult,
    setSearchResult,
    handleSearch,
    handleReset,
  }
}
