import React from 'react';

import {
  createStackNavigator, createAppContainer,
} from "react-navigation";


import Home from './screens/Home.js';
import Register from './screens/Register.js';
import SignatureScreen from './screens/SignatureScreen.js';
import ScanBarCode from './screens/ScanBarCode.js';
import Dialog from './screens/Dialog.js';

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
  ScanBarCode: {
    screen: ScanBarCode,
  },
  Dialog: {
    screen: Dialog,
  }
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    navigationOptions: {
        headerVisible: false,
    },
  });

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}