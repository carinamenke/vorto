import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import GlobalStyles from './common/GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
