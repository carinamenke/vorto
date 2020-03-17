import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { loadFromLocal, saveToLocal } from './common/utils'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import SearchPage from './pages/SearchPage'
import data from './vocabs.json'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const defaultVocabs = data.vocabs ? data.vocabs : []
  const [vocabs, setVocabs] = useState(loadFromLocal('vocabs') || defaultVocabs)

  useEffect(() => {
    saveToLocal('vocabs', vocabs)
  }, [vocabs])

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
          <Route path="/search">
            <SearchPage></SearchPage>
          </Route>
        </Switch>
        <Header />
        <Navigation />
      </Router>
    </AppGrid>
  )

  function addVocab(newVocab) {
    const newVocabs = [newVocab, ...vocabs]
    setVocabs(newVocabs)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 50px 80px auto 50px;
  height: 100vh;
`
