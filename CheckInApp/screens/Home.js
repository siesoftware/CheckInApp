import React from 'react';

import { 
  Text, Image, Button, StyleSheet, View,
  ImageBackground
} 
from 'react-native';

const logoURL = '../assets/logo_metalco_no_bg.png';
const backgroundImageURL = '../assets/Bg.jpg';

export default class Home extends React.Component {

  render() {
    const {navigate} = this.props.navigation;
    return (
      <ImageBackground source={require(backgroundImageURL)}
        style={styles.backgroundImage}>
        <View style={styles.content}>
          <Image source={require(logoURL)}/>
          <Text style={styles.titulo}>Sistema de registro de ingreso</Text>
          <View style={{height:50}}/>
          <Button title="Registro inicial"
            onPress={() => navigate('Register')}/>
          <View style={{height:20}}/>
          <Button title="Check-in con QR"
            onPress={() => navigate('ScanBarCode')}/>
          <View style={{height:20}}/>
        </View>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  content: {
    flex: 1, 
    justifyContent: "center", 
    alignItems: "center",
  },
  titulo: {
    fontWeight: 'bold',
    fontSize: 20,
    height: 25,
    paddingTop: 1,
    backgroundColor: '#a50b0b',
    color: 'white',
  },
  backgroundImage: {
    height: 800,
  },
});