import {put, fork, all} from 'redux-saga/effects'
import {combineReducers} from 'redux'
import NavReducer from './Nav'

export const rootReducer = combineReducers({
  nav: NavReducer
})

export function* rootSaga() {}

export default rootReducer
