import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Alert } from 'react-native';
export default function App() {

  const [nome, setNome] = useState("");
  const [fone, setFone] = useState("");
  const verificaNome = () => {

    if (nome == '') {
      Alert.alert("Nome não pode ser vazio!");
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Nome:</Text>
      <TextInput style={styles.imput}
        value={nome}
        onChangeText={text => setNome(text)}
        onBlur={() => verificaNome()}
        autoFocus={true}
      />

      <Text style={styles.titulo}>Telefone:</Text>
      <TextInput
        style={styles.imput}
        value={nome}
        onChangeText={text => setNome(text)}
        placeholder='(99)99999-9999'
        maxLength={14}
      />




    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 50,
  },

  imput: {
    borderWidth: 1,
    borderColor: "#000",
    padding: 2
  },
});
