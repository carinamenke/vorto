import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import GlobalStyles from './common/GlobalStyles'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root')
)

serviceWorker.unregister()
