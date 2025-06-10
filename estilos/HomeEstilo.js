import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#0b0f1a',
        paddingTop: 20,
        flex: 1,
    },
    loadingContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    textoCarregando: {
        color: '#00f0ff',
        marginTop: 10,
        fontSize: 16,
    },
    logo: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 25,
        marginTop: 10,
    },
    secao: {
        marginBottom: 30,
    },
    tituloSecao: {
        color: '#00f0ff',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 10,
        textShadowColor: '#00f0ff88',
        textShadowOffset: { width: 0, height: 0 },
        textShadowRadius: 8,
        letterSpacing: 1,
    },
    cartao: {
        width: 140,
        marginHorizontal: 10,
        backgroundColor: '#131a24',
        borderRadius: 12,
        overflow: 'hidden',
        shadowColor: '#00f0ff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
        borderWidth: 1,
        borderColor: '#00f0ff33',
    },
    imagemCartao: {
        width: '100%',
        height: 180,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    tituloCartao: {
        color: '#ffffff',
        fontSize: 13,
        fontWeight: '600',
        padding: 8,
        textAlign: 'center',
        backgroundColor: '#0e131c',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
    },

});