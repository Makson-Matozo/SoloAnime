import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Image,
    TouchableOpacity,
    StatusBar,
    Alert
} from 'react-native';
import axios from 'axios';

export default function TelaInicial({ navigation }) {
    const [generoShounen, setGeneroShounen] = useState([]);
    const [generoComedia, setGeneroComedia] = useState([]);
    const [generoRomance, setGeneroRomance] = useState([]);
    const [generoSeinen, setGeneroSeinen] = useState([]);
    const [dragonBall, setDragonBall] = useState([]);
    const [naruto, setNaruto] = useState([]);
    const [onePiece, setOnePiece] = useState([]);

    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (carregado) return;

        const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

        const buscarAnimes = async () => {
            try {
                const respostaShounen = await axios.get('https://api.jikan.moe/v4/anime?genres=1&limit=5');
                setGeneroShounen(respostaShounen.data.data);
                await esperar(1000);

                const respostaComedia = await axios.get('https://api.jikan.moe/v4/anime?genres=4&limit=5');
                setGeneroComedia(respostaComedia.data.data);
                await esperar(1000);

                const respostaRomance = await axios.get('https://api.jikan.moe/v4/anime?genres=74&limit=5');
                setGeneroRomance(respostaRomance.data.data);
                await esperar(1000);

                const respostaSeinen = await axios.get('https://api.jikan.moe/v4/anime?genres=2&limit=5');
                setGeneroSeinen(respostaSeinen.data.data);
                await esperar(1000);

                const respostaDB = await axios.get('https://api.jikan.moe/v4/anime?q=dragon ball&limit=5');
                setDragonBall(respostaDB.data.data);
                await esperar(1000);

                const respostaNaruto = await axios.get('https://api.jikan.moe/v4/anime?q=naruto&limit=5');
                setNaruto(respostaNaruto.data.data);
                await esperar(1000);

                const respostaOnePiece = await axios.get('https://api.jikan.moe/v4/anime?q=one piece&limit=5');
                setOnePiece(respostaOnePiece.data.data);

                setCarregado(true);
            } catch (erro) {
                Alert.alert("Erro", `Erro ao buscar top animes:\n${err.message}`);
            }
        };

        buscarAnimes();
    }, [carregado]);

    const SecaoCategoria = ({ titulo, dados, navigation }) => (
        <View style={estilos.secao}>
            <Text style={estilos.tituloSecao}>{titulo}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dados.map((anime) => (
                    <TouchableOpacity
                        key={anime.mal_id}
                        style={estilos.cartao}
                        onPress={() => navigation.navigate('Informacoes', { anime })}
                    >
                        <Image source={{ uri: anime.images.jpg.image_url }} style={estilos.imagemCartao} />
                        <Text style={estilos.tituloCartao} numberOfLines={1}>
                            {anime.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );

    return (
        <ScrollView style={estilos.container}>
            <StatusBar />
            <Image style={estilos.logo} source={require('./assets/Logo.png')} />
            <SecaoCategoria titulo="SHOUNEN" dados={generoShounen} navigation={navigation} />
            <SecaoCategoria titulo="COMÉDIA" dados={generoComedia} navigation={navigation} />
            <SecaoCategoria titulo="ROMANCE" dados={generoRomance} navigation={navigation} />
            <SecaoCategoria titulo="SEINEN" dados={generoSeinen} navigation={navigation} />
            <SecaoCategoria titulo="DRAGON BALL" dados={dragonBall} navigation={navigation} />
            <SecaoCategoria titulo="NARUTO" dados={naruto} navigation={navigation} />
            <SecaoCategoria titulo="ONE PIECE" dados={onePiece} navigation={navigation} />
        </ScrollView>
    );
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#0b0f1a',
        paddingTop: 20,
    },
    logo: {
        width: '80%',
        height: 100,
        resizeMode: 'contain',
        alignSelf: 'center',
        marginBottom: 25,
        marginTop: 10,
        shadowColor: '#00f0ff',
        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.9,
        shadowRadius: 20,
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
