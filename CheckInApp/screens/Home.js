import React from 'react';

import { Text, ThemeProvider, Image, Button } from 'react-native-elements';

export default class Home extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ThemeProvider theme={theme}>
        <Image source={require('../assets/logo_metalco_no_bg.png')}/>
        <Text>Sistema de registro de ingreso</Text>
        <Button title="Registro inicial"
          onPress={() => navigate('Register')}/>
      </ThemeProvider>
    );
  }
}
const theme = {
  Button: {
    backgroundColor: 'blue',
  },
  Text: {
    fontSize: 18,
  }
};