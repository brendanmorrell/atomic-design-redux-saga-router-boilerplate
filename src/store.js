import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { routerMiddleware, connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'
import { createLogger } from 'redux-logger'
import { reducer as formReducer } from 'redux-form';

// Reducers
import config from './config'
import auth from './auth'
import constants from './constants'
import header from './header'
import sidebar from './sidebar';
import mobilemenu from './mobilemenu';
import profile from './profile';
import notifications from './notifications';

// Sagas
import authSaga from './auth/saga'

export const history = createBrowserHistory()

const persistConfig = {
  key: 'root',
  storage,
  stateReconciler: autoMergeLevel2,
  whitelist: ['auth', 'config', 'header'],
}

export const storeFactory = initialState => {
  const router = routerMiddleware(history)
  const logger = createLogger()
  const saga = createSagaMiddleware()

  const appReducer = combineReducers({
    router: connectRouter(history),    
    form: formReducer,
    config,
    auth,
    constants,
    header,
    sidebar,
    profile,
    notifications,
    mobilemenu,
  })

  const pReducer = persistReducer(persistConfig, appReducer)

  const store = createStore(
    pReducer,
    initialState,
    composeWithDevTools(applyMiddleware(router, logger, saga))
  )

  saga.run(authSaga)

  return store
}
