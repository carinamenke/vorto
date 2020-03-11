import React from 'react'
import Modal from 'react-modal'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import FormPage from './pages/FormPage'
import ListPage from './pages/ListPage'
import data from './vocabs.json'
import PrimaryButton from './components/PrimaryButton/PrimaryButton'
import styled from 'styled-components/macro'

Modal.setAppElement(document.getElementById('root'))

export default function App() {
  const vocabs = data.vocabs

  return (
    <AppGrid>
      <Router>
        <Switch>
          <Route exact path="/">
            <ListPage vocabs={vocabs} />
          </Route>
          <Route path="/create">
            <FormPage />
          </Route>
        </Switch>
        <Navigation>
          <Link to="/create">
            <PrimaryButton buttonLabel="Add new Vocabulary" />
          </Link>
        </Navigation>
      </Router>
    </AppGrid>
  )
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
