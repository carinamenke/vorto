import React from 'react'
import { render } from '@testing-library/react'
import Vocab from './Vocab'

describe('<Vocab/>', () => {
  it('should render cards correctly', () => {
    render(
      <Vocab
        vocabImage="/images/door.jpg"
        vocabTitle="The door"
        vocabTranslation="La porte"
        partOfSpeechCategory="Noun"
        id="1"
      />
    )
  })
})
