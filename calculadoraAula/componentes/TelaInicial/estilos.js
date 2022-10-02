import { StyleSheet } from "react-native";
const estilo = StyleSheet.create({
    tela: {
        width: '100%',
        justifyContent: "center",
        alignItems: 'center',
    },
    boxNumero: {
        borderColor: '#13b0c5',
        backgroundColor: '#13b0c5',
        borderWidth: 5,
        height: 100,
        width: 100,
        borderRadius: 75,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    numero: {
        fontSize: 50,
        color: '#fff',
    },
    boxBotao: {
        flexDirection: "row",
        marginTop: 20
    },
    input: {
        borderWidth: 1,
        borderColor: '#d5d5d5',
        borderRadius: 3,
        width: 100,
        paddingHorizontal: 5,
        marginLeft: 10
    },
});
export default estilo;
