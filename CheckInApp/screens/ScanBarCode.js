import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions, FileSystem } from 'expo';
import Dialog from './Dialog';

export default class ScanBarCode extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      hasCameraPermission:null,
      alertVisible:false,
      alertMessage:'Default Message',
    }
    this.onPressDialogButtonHereInScanBarCode = this.onPressDialogButtonHereInScanBarCode.bind(this);
  }

  async componentDidMount() {
    var tags = require('../constants/etiquetas.js');
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
    var fileUri = FileSystem.documentDirectory + 'checkindata.json';
    let res = await FileSystem.getInfoAsync(fileUri);
    if (res.exists) {
        let content = await FileSystem.readAsStringAsync(fileUri);
        var contentJson = JSON.parse(content);
        this.setState(contentJson);
    } else{
      this.setState({alertVisible:true, alertMessage:tags.TAGS_SCANBAR.noFile})
    }
  }

  onPressDialogButtonHereInScanBarCode(){
    this.props.navigation.navigate('Home');
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({alertVisible:true, 
      alertMessage:`Usuario ${this.state.nombres} se ha registrado con el dato ${data} en la fecha ${new Date()} correctamente`});
    //alert(`Código de barras tipo ${type} and data ${data} has been scanned!`+JSON.stringify(this.state));
  }

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <Text>Solicitud de permiso de acceso a la cámara</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No hay acceso a la cámara</Text>;
    }
    return (
      <View style={{ flex: 1 }}>
        <Dialog alertVisible={this.state.alertVisible}
          alertMessage={this.state.alertMessage}
          navigation={this.props.navigation}
          buttonAction={this.onPressDialogButtonHereInScanBarCode}/>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}
