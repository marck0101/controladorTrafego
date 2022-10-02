import React from 'react';
import { Text, View } from 'react-native';
import { ImageBackground } from 'react-native-web';
import Styles from './estilosTexto';


export default function OlaMundo() {
    return (

        < View style={Styles.texto} >
            <Text>olá</Text>
            <Text> Marquins </Text>
            <Text>Objeto Funfando</Text>
        </View >

    );
}


