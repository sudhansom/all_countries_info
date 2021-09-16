import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter as Router} from 'react-router-dom';
import storeFactory from './redux/store';
import { Provider } from 'react-redux'

const reduxStore = storeFactory()

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
