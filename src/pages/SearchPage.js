import PropTypes from 'prop-types'
import React from 'react'
import Search from '../components/Search/Search'
import VocabList from '../components/VocabList/VocabList'
import useSearch from '../hooks/useSearch'

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
  const { searchInput, searchResult, handleSearch, handleReset } = useSearch(
    vocabs
  )

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
}
