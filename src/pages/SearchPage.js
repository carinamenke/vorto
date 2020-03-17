import React, { useState } from 'react'
import Search from '../components/Search/Search'
import VocabList from '../components/VocabList/VocabList'

export default function SearchPage({ vocabs }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  return (
    <>
      <Search
        searchInput={searchInput}
        handleSearch={handleSearch}
        handleReset={handleReset}
        searchResult={searchResult}
      />
      {searchResult && <VocabList vocabs={searchResult} />}
    </>
  )

  function handleSearch(event) {
    let allVocabs = vocabs.map(vocab => {
      return {
        imageSrc: vocab.imageSrc,
        audioSrc: vocab.audioSrc,
        wordTitle: vocab.wordTitle.toLowerCase(),
        translation: vocab.translation.toLowerCase(),
        partOfSpeechCategory: vocab.partOfSpeechCategory,
      }
    })
    setSearchInput(event.target.value)
    if (searchInput !== '') {
      let filteredVocabs = []
      filteredVocabs = allVocabs.filter(
        vocab =>
          vocab.wordTitle.includes(searchInput.toLowerCase()) ||
          vocab.translation.includes(searchInput.toLowerCase())
      )
      setSearchResult(filteredVocabs)
    } else {
      setSearchResult([])
    }
  }

  function handleReset() {
    return setSearchInput('')
    return setSearchResult([])
    // focus?
  }
}
