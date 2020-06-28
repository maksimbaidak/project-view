import {combineReducers} from 'redux'
import {connectRouter} from 'connected-react-router'
import noteListReducer from './notes'
import authReducer from './auth'
import editorReducer from './editor'

export default (history) => combineReducers({
  router: connectRouter(history),
  notes: noteListReducer,
  auth: authReducer,
  editor: editorReducer
})
