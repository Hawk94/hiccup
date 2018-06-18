import {createStore, applyMiddleware} from 'redux'
import {compose} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import {default as rootReducer, rootSaga} from './../ducks'

const initialState = {}
const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]
const enchancers = []

const store = createStore(rootReducer, applyMiddleware(...middleware))

sagaMiddleware.run(rootSaga)

export default store
