import React from 'react'
import styled from 'styled-components/macro'

export default function LearnStatusFilter() {
  return (
    <FilterSectionStyled>
      <FilterStyled>
        To be learned<CounterStyled>(20)</CounterStyled>
      </FilterStyled>
      <FilterStyled>
        Learned<CounterStyled>(30)</CounterStyled>
      </FilterStyled>
    </FilterSectionStyled>
  )
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
  color: var(--grey-color-mid1);
`

const CounterStyled = styled.span`
  font-weight: 700;
  margin-left: 2px;
`
