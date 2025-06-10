import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StatusBar,
    Alert,
    ActivityIndicator,
} from 'react-native';
import styles from "./estilos/HomeEstilo.js";
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
        const buscarAnimes = async () => {
            const esperar = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

            try {
                const respostaShounen = await axios.get('https://api.jikan.moe/v4/anime?genres=1&limit=5');
                setGeneroShounen(respostaShounen.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar SHOUNEN", erro.message);
            }

            try {
                const respostaComedia = await axios.get('https://api.jikan.moe/v4/anime?genres=4&limit=5');
                setGeneroComedia(respostaComedia.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar COMÉDIA", erro.message);
            }

            try {
                const respostaRomance = await axios.get('https://api.jikan.moe/v4/anime?genres=74&limit=5');
                setGeneroRomance(respostaRomance.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar ROMANCE", erro.message);
            }

            try {
                const respostaSeinen = await axios.get('https://api.jikan.moe/v4/anime?genres=2&limit=5');
                setGeneroSeinen(respostaSeinen.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar SEINEN", erro.message);
            }

            try {
                const respostaDB = await axios.get('https://api.jikan.moe/v4/anime?q=dragon ball&limit=5');
                setDragonBall(respostaDB.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar DRAGON BALL", erro.message);
            }

            try {
                const respostaNaruto = await axios.get('https://api.jikan.moe/v4/anime?q=naruto&limit=5');
                setNaruto(respostaNaruto.data.data);
                await esperar(1000);
            } catch (erro) {
                Alert.alert("Erro ao buscar NARUTO", erro.message);
            }

            try {
                const respostaOnePiece = await axios.get('https://api.jikan.moe/v4/anime?q=one piece&limit=5');
                setOnePiece(respostaOnePiece.data.data);
            } catch (erro) {
                Alert.alert("Erro ao buscar ONE PIECE", erro.message);
            }



            setCarregado(true);
        };

        buscarAnimes();
    }, []);
    
    if (!carregado) {
        return (
            <View style={[styles.container, styles.loadingContainer]}>
                <ActivityIndicator size="large" color="#00f0ff" />
                <Text style={styles.textoCarregando}>Carregando animes...</Text>
            </View>
        );
    }
    
    const SecaoCategoria = ({ titulo, dados, navigation }) => (
        <View style={styles.secao}>
            <Text style={styles.tituloSecao}>{titulo}</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {dados.map((anime) => (
                    <TouchableOpacity
                        key={anime.mal_id}
                        style={styles.cartao}
                        onPress={() => navigation.navigate('Informacoes', { anime })}
                    >
                        <Image source={{ uri: anime.images.jpg.image_url }} style={styles.imagemCartao} />
                        <Text style={styles.tituloCartao} numberOfLines={1}>
                            {anime.title}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );


    return (
        <ScrollView style={styles.container}>
            <StatusBar />
            <Image style={styles.logo} source={require('./assets/Logo.png')} />
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


