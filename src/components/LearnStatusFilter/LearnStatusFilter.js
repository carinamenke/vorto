import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'

LearnStatusFilter.propTypes = {
  learnStatus: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  toBeLearnedVocabs: PropTypes.array.isRequired,
  learnedVocabs: PropTypes.array.isRequired,
}

LearnStatusFilter.defaultProps = {
  learnStatus: false,
}

export default function LearnStatusFilter({
  learnStatus,
  onClick,
  toBeLearnedVocabs,
  learnedVocabs,
}) {
  return (
    <FilterSectionStyled>
      <FilterStyled
        active={learnStatus === false}
        onClick={() => onClick(false)}
      >
        To be learned<CounterStyled>({toBeLearnedVocabs.length})</CounterStyled>
      </FilterStyled>
      <FilterStyled active={learnStatus === true} onClick={() => onClick(true)}>
        Learned<CounterStyled>({learnedVocabs.length})</CounterStyled>
      </FilterStyled>
    </FilterSectionStyled>
  )
}

function select(propName, first, second) {
  return props => (props[propName] ? first : second)
}

const FilterSectionStyled = styled.section`
  grid-row: 2 / 3;
  display: flex;
  align-items: center;
  margin-left: 20px;
`

const FilterStyled = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: left;
  color: ${select('active', 'var(--primary-color)', 'var(--grey-color-mid1)')};
  text-decoration: ${select('active', 'underline 2px', 'none')};
`

const CounterStyled = styled.span`
  font-weight: 700;
  margin-left: 2px;
`
