import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { storage } from './firebase'
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
  const learnedVocabs = vocabs.filter(vocab => vocab.learned)
  const toBeLearnedVocabs = vocabs.filter(vocab => !vocab.learned)
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
              deleteVocab={deleteVocab}
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
              deleteVocab={deleteVocab}
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

  function deleteVocab(id) {
    const index = vocabs.findIndex(vocab => vocab.id === id)
    setVocabs([...vocabs.slice(0, index), ...vocabs.slice(index + 1)])
    const toBeDeletedVocab = vocabs.find(vocab => vocab.id === id)
    const image = storage.ref(`images/${toBeDeletedVocab.imageTitle}`)
    const audio = storage.ref(`audio/${toBeDeletedVocab.audioTitle}`)
    image.delete()
    audio.delete()
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
