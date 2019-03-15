import React from 'react';

import {
  createStackNavigator, createAppContainer,
} from "react-navigation";


import Home from './screens/Home.js';
import Register from './screens/Register.js';
import SignatureScreen from './screens/SignatureScreen.js';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,
  },
  SignatureScreen: {
    screen: SignatureScreen,
  },
},
  {
    initialRouteName: 'Home',
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}