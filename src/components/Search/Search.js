import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import { IoIosSearch } from 'react-icons/io'
import { FiX } from 'react-icons/fi'

Search.propTypes = {
  searchInput: PropTypes.string,
  handleSearch: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  searchResult: PropTypes.array,
}

export default function Search({
  searchInput,
  handleSearch,
  handleReset,
  searchResult,
}) {
  return (
    <SearchStyled>
      <SearchFieldStyled>
        <IoIosSearch />
        <input
          type="search"
          name="q"
          aria-label="Search for vocabularies"
          value={searchInput}
          placeholder="Enter a vocabulary"
          className="search-input"
          onChange={handleSearch}
        />
        {searchInput && (
          <ClearButtonStyled onClick={handleReset}>
            <FiX className="closing-icon" />
          </ClearButtonStyled>
        )}
      </SearchFieldStyled>
      {searchInput && <span>{searchResult.length} vocabularies found:</span>}
    </SearchStyled>
  )
}

const SearchStyled = styled.section`
  grid-row: 2 / 3;
  margin: 10px 15px;
  font-size: 14px;
`

const SearchFieldStyled = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5px;
  margin-bottom: 5px;
  border: none;
  border-radius: 4px;
  height: 35px;
  background: var(--grey-color-light);

  .search-icon {
    color: var(--text-color-white);
  }

  .search-input {
    border: none;
    border-radius: 4px;
    height: 35px;
    flex-grow: 1;
    background: var(--grey-color-light);
    padding: 10px;
    margin-right: 10px;
    outline: none;
    -webkit-appearance: textfield;

    ::-webkit-search-decoration,
    ::-webkit-search-cancel-button {
      -webkit-appearance: none;
    }
  }
`
const ClearButtonStyled = styled.span`
  width: 20px;
  height: 20px;
  border: none;
  border-radius: 50%;
  background: var(--grey-color-mid1);
  color: var(--text-color-white);
  display: flex;
  align-items: center;
  justify-content: center;

  :active {
    background: var(--grey-color-mid2);
  }
`
