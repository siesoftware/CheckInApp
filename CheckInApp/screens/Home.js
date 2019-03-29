import React from 'react';

import { 
  Text, Image, StyleSheet, View,
  ImageBackground, Alert
} 
from 'react-native';

import { Button} from 'react-native-elements';

import Icon from 'react-native-vector-icons/FontAwesome';

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
          <View style={styles.titulo}>
            <Text style={styles.titulolabel}>Sistema de registro de ingreso</Text>
          </View>          
          <View style={{height:50}}/>
          <View style={{width: 250}}>
            <Button title="Registro inicial"
              onPress={() => navigate('Register')}/>
          </View>
          <View style={{height:20}}/>
          <View style={{width: 250}}>
            <Button title="Check-in con QR"
              onPress={() => navigate('ScanBarCode')}/>
          </View>
          <View style={{height:50}}/>
          <View>
            <Button
                icon={
                  <Icon
                    name="info-circle"
                    size={15}
                    color="white"
                  />
                }
                onPress={() => Alert.alert('CheckInApp By SIE Software, v0.3')}
              />
          </View>
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
    backgroundColor: '#a50b0b',    
    height: 50,
    justifyContent: "center",
  },
  titulolabel: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingLeft: 25,
    paddingRight: 25,
    color: 'white',
  },
  backgroundImage: {
    height: 800,
  },
});