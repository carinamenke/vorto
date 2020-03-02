import React from 'react'
import { render } from '@testing-library/react'
import Card from './Card'

describe('<Card/>', () => {
  it('should render cards correctly', () => {
    render(
      <Card
        vocabImage="/images/door.jpg"
        vocabTitle="The door"
        vocabTranslation="La porte"
        partOfSpeechCategory="Noun"
        id="1"
      />
    )
  })
})
