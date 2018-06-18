import React, {Component} from 'react'
import {View, Text, Button, Alert} from 'react-native'
import {Provider} from 'react-redux'
import store from './src/config/store'
import MainPage from './src/components/MainPage'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <MainPage />
      </Provider>
    )
  }
}

export default App
