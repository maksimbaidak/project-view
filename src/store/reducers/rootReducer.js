import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import noteListReducer from './notes'
import authReducer from './auth'

export default (history) => combineReducers({
  router: connectRouter(history),
  notes: noteListReducer,
  auth: authReducer
})
