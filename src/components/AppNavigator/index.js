import React, {Component} from 'react'
import {addNavigationHelpers, createStackNavigator} from 'react-navigation'
import {createStore, combineReducers} from 'redux'
import {connect} from 'react-redux'
import MainPage from './../MainPage'
import HomeScreen from './../HomeScreen'
// import DetailsScreen from './../DetailsScreen'

class DetailsScreen extends Component {
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Details Screen</Text>
      </View>
    )
  }
}

export const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Main: MainPage
  },
  {
    initialRouteName: 'Home'
  }
)

const AppWithNavigationState = ({dispatch, nav}) => (
  <AppNavigator navigation={addNavigationHelpers({dispatch, state: nav})} />
)

const mapStateToProps = state => ({
  nav: state.nav
})

export default connect(mapStateToProps)(AppWithNavigationState)
