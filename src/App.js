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
  const [learnStatus, setlearnStatus] = useState(false)
  const learnedVocabs = vocabs.filter(vocab => vocab.learned === true)
  const toBeLearnedVocabs = vocabs.filter(vocab => vocab.learned === false)
  const vocabsByLearnStatus =
    learnStatus === false ? toBeLearnedVocabs : learnedVocabs

  useEffect(() => {
    saveToLocal('vocabs', vocabs)
  }, [vocabs])

  return (
    <AppGrid>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPage
              vocabs={vocabsByLearnStatus}
              onLearnStatusClick={handleLearnStatusClick}
              onClick={selectLearnStatus}
              learnStatus={learnStatus}
              learnedVocabs={learnedVocabs}
              toBeLearnedVocabs={toBeLearnedVocabs}
            />
          </Route>
          <Route path="/create">
            <FormPage onSubmit={addVocab} />
          </Route>
          <Route path="/search">
            <SearchPage
              vocabs={vocabsByLearnStatus}
              onLearnStatusClick={handleLearnStatusClick}
              learnStatus={learnStatus}
            ></SearchPage>
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

  function handleLearnStatusClick(id) {
    const index = vocabs.findIndex(vocab => vocab.id === id)
    const updatedVocab = {
      ...vocabs[index],
      learned: !vocabs[index].learned,
    }
    setVocabs([
      updatedVocab,
      ...vocabs.slice(0, index),
      ...vocabs.slice(index + 1),
    ])
  }
  function selectLearnStatus(learnStatus) {
    return setlearnStatus(learnStatus)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 50px 80px auto 50px;
  height: 100vh;
`
