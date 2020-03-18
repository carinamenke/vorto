import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search/Search'
import VocabList from '../components/VocabList/VocabList'

SearchPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
}

export default function SearchPage({ vocabs }) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    let allVocabs = vocabs.map(vocab => {
      return {
        imageSrc: vocab.imageSrc,
        audioSrc: vocab.audioSrc,
        wordTitle: vocab.wordTitle.toLowerCase(),
        translation: vocab.translation.toLowerCase(),
        partOfSpeechCategory: vocab.partOfSpeechCategory,
      }
    })
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
  }, [searchInput, vocabs])

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
    setSearchInput(event.target.value)
  }

  function handleReset(event) {
    const inputField = event.target
    inputField.focus()
    return setSearchInput('')
  }
}
