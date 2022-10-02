import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import estilo from './estilos';
const TelaInicial = () => {
    const [numero1, setNumero1] = useState();
    const [numero2, setNumero2] = useState();
    const [resultado, setResultado] = useState(0);
    return (
        <View style={estilo.tela}>
            <View style={estilo.boxBotao}>
                <Text> Número 1: </Text>
                <TextInput
                    style={estilo.input}
                    onChangeText={valor => setNumero1(valor)} />
            </View>
            <View style={estilo.boxBotao}>
                <Text> Número 2: </Text>
                <TextInput
                    style={estilo.input}
                    onChangeText={valor => setNumero2(valor)} />
            </View>
            <View style={estilo.boxNumero}>
                <Text style={estilo.numero}>{resultado}</Text>
            </View>
            <View style={estilo.boxBotao}>
                <Button
                    title=" + "
                    onPress={() => setResultado(parseFloat(numero1) + parseFloat(numero2))} />
                <Button
                    title=" - "
                    onPress={() => setResultado(parseFloat(numero1) - parseFloat(numero2))} />
                <Button
                    title=" * "
                    onPress={() => setResultado(parseFloat(numero1) * parseFloat(numero2))} />
                <Button
                    title=" / "
                    onPress={() => setResultado(parseFloat(numero1) / parseFloat(numero2))} />
            </View>
        </View>
    );
}
export default TelaInicial;