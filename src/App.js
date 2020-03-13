import React, { useState } from 'react'
import Modal from 'react-modal'
import styled from 'styled-components/macro'
import PrimaryButton from './components/PrimaryButton/PrimaryButton'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import data from './vocabs.json'
import { loadFromLocal, saveToLocal } from './common/utils'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const defaultVocabs = data.vocabs ? data.vocabs : []
  const [vocabs, setVocabs] = useState(loadFromLocal('vocabs') || defaultVocabs)

  return (
    <AppGrid>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPage vocabs={vocabs} />
          </Route>
          <Route path="/create">
            <FormPage onSubmit={addVocab} />
          </Route>
        </Switch>
        <Navigation>
          <Link to="/create">
            <PrimaryButton label="Add new Vocabulary" />
          </Link>
        </Navigation>
      </Router>
    </AppGrid>
  )

  function addVocab(newVocab) {
    const newVocabs = [newVocab, ...vocabs]
    setVocabs(newVocabs)
    saveToLocal('vocabs', newVocabs)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 1fr 8fr 1fr;
  height: 100vh;
`

const Navigation = styled.section`
  grid-row-start: 3;
  grid-row-end: 4;
  display: flex;
  justify-content: center;
`
