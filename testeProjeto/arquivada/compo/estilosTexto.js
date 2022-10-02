import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';


// export default function ImageBackground() {
//     return (
//         <ImageBackground/>
//     )
// }

const Styles = StyleSheet.create({
    texto: {
        fontSize: 25,
        fontWeight: 'bold',
        borderWidth: 2,
        borderColor: 'red',
        padding: 10,

    },

    btn: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 25,
        backgroundColor: '#cf9556',
        paddingVertical: 5,
        width: 200,
        marginBottom: 10
    },

    tnIcon: {
        width: 50,
        height: 50,
    },

    btnLabel: {
        backgroundColor: '#cf9556',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 25,
    },

    cardImg: {
        width: 320,
        height: 200,
        borderRadius: 10,
        marginBottom: 40,
    },
    
    titulo: {
        fontSize: 26,
        color: '#cf9556',
        marginBottom: 15,
    }


});



export default Styles