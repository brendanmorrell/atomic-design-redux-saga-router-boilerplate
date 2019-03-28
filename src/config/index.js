import { handleActions } from 'redux-actions'
import endpoints from './endpoints'

// Default to local dev
let stage = process.env.REACT_APP_STAGE || 'local'

let apiBaseSubdomain = 'https://medmen.com/'
const prodPattern = /medmen\.com/

const prodMatches = window.location.hostname.match(prodPattern)

if (prodMatches) {
  stage = 'prod'
}

// If we are not local, use the stage to set api urls
if (stage !== 'local') {
  if (stage === 'prod') {
    apiBaseSubdomain = 'https://api.mymedmeninterface.com'
  } else {
    apiBaseSubdomain = `https://api-${stage}.mymedmeninterface.com`
  }
}

const initialState = {
  apiBaseSubdomain,
  stage,
  ...endpoints(apiBaseSubdomain),
}

export default handleActions({}, initialState)
