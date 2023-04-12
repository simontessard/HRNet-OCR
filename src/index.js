import React from 'react'
import ReactDOM from 'react-dom/client'
import Routing from './Router'
import './index.css'

import { Provider } from 'react-redux'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </Provider>
)
