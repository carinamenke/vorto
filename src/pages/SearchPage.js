import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import Search from '../components/Search/Search'
import VocabList from '../components/VocabList/VocabList'

SearchPage.propTypes = {
  vocabs: PropTypes.array.isRequired,
  onLearnStatusClick: PropTypes.func.isRequired,
  learnStatus: PropTypes.bool.isRequired,
  deleteVocab: PropTypes.func.isRequired,
}

export default function SearchPage({
  vocabs,
  onLearnStatusClick,
  learnStatus,
  deleteVocab,
}) {
  const [searchInput, setSearchInput] = useState('')
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    let allVocabs = vocabs.map(vocab => {
      return {
        ...vocab,
        wordTitle: vocab.wordTitle.toLowerCase(),
        translation: vocab.translation.toLowerCase(),
      }
    })
    if (searchInput !== '') {
      let filteredVocabs = []
      filteredVocabs = allVocabs.filter(
        vocab =>
          vocab.wordTitle.includes(searchInput.toLowerCase()) ||
          vocab.translation.includes(searchInput.toLowerCase())
      )
      // ensures that displayed wordTitle and translation in the search results are not all lower case:
      let filteredVocabIDs = filteredVocabs.map(item => item.id)
      setSearchResult(
        vocabs.filter(function(vocab) {
          return filteredVocabIDs.includes(vocab.id)
        })
      )
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
      {searchResult && (
        <VocabList
          vocabs={searchResult}
          onLearnStatusClick={onLearnStatusClick}
          learnStatus={learnStatus}
          deleteVocab={deleteVocab}
        />
      )}
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
