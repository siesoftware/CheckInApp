import React from 'react';
import { Input, Header, Button,
} from 'react-native-elements';
import {
    KeyboardAvoidingView, StyleSheet, View, Platform,
    StatusBar, ScrollView, Text, Image
} from 'react-native';

import { FileSystem } from 'expo';

export default class Register extends React.Component {

    constructor(props){
        super(props);
        this.state={
            eps:'cfs',
            arl:'',
        }
    }

    render(){
        const { navigation } = this.props;
        const receivedSignature = navigation.getParam('sentSignature', null);
        const baseDir = FileSystem.documentDirectory;
        return(
            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <KeyboardAvoidingView behavior="padding" style={styles.form}>
                    <Header
                        placement="center"
                        centerComponent={{ text: 'REGISTRO DE USUARIO', style: { color: '#fff' } }}
                        />
                    <ScrollView>
                        <Input placeholder='NOMBRES Y APELLIDOS'/>
                        <Input placeholder='NÚMERO DE DOCUMENTO'/>
                        <Input placeholder='EPS'/>
                        <Input placeholder='ARL'/>
                        <Input placeholder='CONTACTO EN CASO DE EMERGENCIA' />
                        <Input placeholder='NÚMERO DE TELÉFONO' 
                            keyboardType='phone-pad'/>
                        <Input placeholder='EMPRESA A LA QUE PERTENECE' />
                        <Input placeholder='MOTIVO DE LA VISITA' />
                        <Input placeholder='PERSONA QUIEN ATIENDE' />
                        <View style={{height:10}}/>
                        <Button title="Registrar Firma"
                            onPress={() => this.props.navigation.navigate('SignatureScreen')}/>
                        <View style={{height:10}}/>
                        <View style={styles.preview}>
                        {receivedSignature ? (
                            <Image
                            resizeMode={"contain"}
                            style={{ width: 335, height: 114 }}
                            source={{ uri: receivedSignature}}
                            />
                        ) : null}
                        </View>
                        <Text>{baseDir}</Text>
                        <Button title="Guardar datos"/>
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
})