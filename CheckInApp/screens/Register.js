import React from 'react';
import {
    Input, Header, Button,
} from 'react-native-elements';
import {
    KeyboardAvoidingView, StyleSheet, View,
    StatusBar, ScrollView, Image,
} from 'react-native';

import { FileSystem } from 'expo';

import Dialog from './Dialog';

export default class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            nombres: '',
            numeroDocumento: '',
            eps: '',
            arl: '',
            contactoEmergencia: '',
            numeroTelefono: '',
            empresaPertenece: '',
            motivoVisita: '',
            personaAtiende: '',
            receivedSignature: null,
            alertVisible: false,
            alertMessage: 'Default message',
        };
        this.saveButton = this.saveButton.bind(this);
        this.onPressDialogButton = this.onPressDialogButton.bind(this);
    }

    async componentDidMount() {
        var fileUri = FileSystem.documentDirectory + 'checkindata.json';
        let res = await FileSystem.getInfoAsync(fileUri);
        if (res.exists) {
            let content = await FileSystem.readAsStringAsync(fileUri);
            var contentJson = JSON.parse(content);
            this.setState(contentJson);
        }
        this.setState({alertVisible:false,alertMessage:'desde el componentdidmount'})
    }

    async saveButton() {
        var tags = require('../constants/etiquetas.js');
        var estado = this.state;
        var valido = true;
        const fileUri = FileSystem.documentDirectory + 'checkindata.json';        
        let message = '';
        Object.keys(this.state).forEach(function (key) {
            if (key != 'alertVisible' && (estado[key] == '' || estado[key] == null)) {
                message = tags.TAGS_REGISTER.messageErrorPre + tags.TAGS_REGISTER[key] + tags.TAGS_REGISTER.messageErrorPost;
                valido = false;
            }
        }
        );
        if (valido) {
            var contents = JSON.stringify(this.state);
            await FileSystem.writeAsStringAsync(fileUri, contents);
            message = tags.TAGS_REGISTER.messageSuccess;
        }
        this.setState({alertVisible:true, alertMessage:message});
    }

    onPressDialogButton(){
        var tags = require('../constants/etiquetas.js');
        if(this.state.alertMessage==tags.TAGS_REGISTER.messageSuccess){
            this.props.navigation.navigate('Home');
        }else{
            this.setState({alertVisible:false});
        }
    }

    render() {
        const { navigation } = this.props;
        var firma = navigation.getParam('sentSignature', null);
        if (firma != null) {
            this.state.receivedSignature = firma;
        }
        var tags = require('../constants/etiquetas.js');
        return (
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior="padding" style={styles.form}>
                    <Header
                        placement="center"
                        centerComponent={{ text: 'REGISTRO DE USUARIO', style: { color: '#fff' } }}/>
                    <ScrollView>
                        <Dialog alertVisible={this.state.alertVisible}
                            alertMessage={this.state.alertMessage}
                            navigation={this.props.navigation}
                            buttonAction={this.onPressDialogButton}/>
                        <Input placeholder={tags.TAGS_REGISTER.nombres}
                            onChangeText={(text) => this.setState({ nombres: text })}
                            value={this.state.nombres} />
                        <Input placeholder={tags.TAGS_REGISTER.numeroDocumento}
                            onChangeText={(text) => this.setState({ numeroDocumento: text })}
                            value={this.state.numeroDocumento} />
                        <Input placeholder={tags.TAGS_REGISTER.eps}
                            onChangeText={(text) => this.setState({ eps: text })}
                            value={this.state.eps} />
                        <Input placeholder={tags.TAGS_REGISTER.arl}
                            onChangeText={(text) => this.setState({ arl: text })}
                            value={this.state.arl} />
                        <Input placeholder={tags.TAGS_REGISTER.contactoEmergencia}
                            onChangeText={(text) => this.setState({ contactoEmergencia: text })}
                            value={this.state.contactoEmergencia} />
                        <Input placeholder={tags.TAGS_REGISTER.numeroTelefono}
                            keyboardType='phone-pad'
                            onChangeText={(text) => this.setState({ numeroTelefono: text })}
                            value={this.state.numeroTelefono} />
                        <Input placeholder={tags.TAGS_REGISTER.empresaPertenece}
                            onChangeText={(text) => this.setState({ empresaPertenece: text })}
                            value={this.state.empresaPertenece} />
                        <Input placeholder={tags.TAGS_REGISTER.motivoVisita}
                            onChangeText={(text) => this.setState({ motivoVisita: text })}
                            value={this.state.motivoVisita} />
                        <Input placeholder={tags.TAGS_REGISTER.personaAtiende}
                            onChangeText={(text) => this.setState({ personaAtiende: text })}
                            value={this.state.personaAtiende} />
                        <View style={{ height: 10 }} />
                        <Button title={tags.TAGS_REGISTER.receivedSignature}
                            onPress={() => this.props.navigation.navigate('SignatureScreen')} />
                        <View style={{ height: 10 }} />
                        <View style={styles.preview}>
                            {this.state.receivedSignature ? (
                                <Image
                                    resizeMode={"contain"}
                                    style={{ width: 335, height: 114 }}
                                    source={{ uri: this.state.receivedSignature }}
                                />
                            ) : null}
                        </View>
                        <Button title="Guardar datos"
                            onPress={this.saveButton} />
                    </ScrollView>
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    form: {
        flex: 1,
        justifyContent: 'space-between',
    },
    container: {
        flex: 1,
    },
    preview: {
        width: 300,
        height: 100,
        backgroundColor: "#F8F8F8",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 15
    },
    modal: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    modaltitle: {
        height: 50, 
        backgroundColor: '#a50b0b',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titulolabel: {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white',
    },
})