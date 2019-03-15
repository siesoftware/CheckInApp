import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ThemeProvider, Header, Button, Text
} from 'react-native-elements';


export default class Register extends React.Component {

    constructor(props){
        super(props);
        this.state={
            eps:'cfs',
            arl:'',
        }
    }

    render(){
        return(
            <ThemeProvider>
                <Header
                    placement="left"
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'REGISTRO DE USUARIO', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                    />
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
                <Button title="Registrar Firma"
                    onPress={() => this.props.navigation.navigate('SignatureScreen')}/>
                <Text h4>_________________________________-</Text>
                <Button title="Volver"
                    onPress={() => this.props.navigation.goBack()}/>
            </ThemeProvider>
        );
    }
}