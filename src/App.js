import React, { useEffect, useState, useMemo } from 'react'
import Modal from 'react-modal'
import { BrowserRouter as Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import { loadFromLocal, saveToLocal } from './common/utils'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import { storage } from './firebase'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import SearchPage from './pages/SearchPage'
import data from './vocabs.json'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const defaultVocabs = data.vocabs || []
  const [vocabs, setVocabs] = useState(loadFromLocal('vocabs') || defaultVocabs)
  const [learnStatus, setLearnStatus] = useState(false)
  const learnedVocabs = useMemo(() => vocabs.filter(vocab => vocab.learned), [
    vocabs,
  ])
  const toBeLearnedVocabs = useMemo(
    () => vocabs.filter(vocab => !vocab.learned),
    [vocabs]
  )
  const vocabsByLearnStatus = learnStatus ? learnedVocabs : toBeLearnedVocabs

  useEffect(() => {
    saveToLocal('vocabs', vocabs)
  }, [vocabs])

  return (
    <AppGrid>
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
    if (toBeDeletedVocab.imageSrc) {
      image.delete().catch(error => {})
    }
    if (toBeDeletedVocab.audioSrc) {
      audio.delete().catch(error => {})
    }
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
    return setLearnStatus(learnStatus)
  }
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 50px 80px auto 50px;
  height: 100vh;

  @media screen and (max-height: 450px) {
    grid-template-rows: 50px 80px 400px 50px;
  }
`
