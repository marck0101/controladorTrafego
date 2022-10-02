import React from 'react';
import { Text, View } from 'react-native';
import Styles from './estilosTexto';

export default function TesteCompo() {
    return (
        <View style={Styles.texto}>
            <Text>Aqui dentro um teste</Text>
            <Text>E se eu quiser fazer mais um texto assim nessa caceta ?</Text>
            <View>
                <Text>PQP</Text>
                <Text>Dpa certo, mas errado lkkkk</Text>
                <Text></Text>
            </View>
        </View>

    );

}