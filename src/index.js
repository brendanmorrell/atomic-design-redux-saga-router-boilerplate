import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './AppContainer'
import { register } from './serviceWorker'
import { Router } from 'react-router'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { storeFactory, history } from './store'

export const store = storeFactory({})
const persistor = persistStore(store)

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading="Loading">
      <Router history={history}>
        <AppContainer />
      </Router>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

// service worker
register()

if (module.hot) module.hot.accept()
