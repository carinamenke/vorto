import React from 'react'
import Modal from 'react-modal'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled from 'styled-components/macro'
import Header from './components/Header/Header'
import Navigation from './components/Navigation/Navigation'
import useLearnStatus from './hooks/useLearnStatus'
import useVocabs from './hooks/useVocabs'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import SearchPage from './pages/SearchPage'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const { vocabs, setVocabs, addVocab, deleteVocab } = useVocabs()
  const {
    learnStatus,
    learnedVocabs,
    toBeLearnedVocabs,
    vocabsByLearnStatus,
    handleLearnStatusClick,
    selectLearnStatus,
  } = useLearnStatus(vocabs, setVocabs)

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
}

const AppGrid = styled.div`
  display: grid;
  grid-template-rows: 50px 80px auto 50px;
  height: 100vh;

  @media screen and (max-height: 450px) {
    grid-template-rows: 50px 80px 400px 50px;
  }
`
