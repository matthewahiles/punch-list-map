import { createStore } from 'redux'
import { runActions } from './reducers'

export const store = createStore(runActions)
