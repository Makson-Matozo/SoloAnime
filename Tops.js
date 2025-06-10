import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from "./estilos/TopsEstilo.js";
import axios from 'axios';

export default function Tops({ navigation }) {
    const [animesTop, setAnimesTop] = useState([]);
    const [carregar, setcarregar] = useState(true);

    useEffect(() => {
        const buscarAnimesTop = async () => {
            try {
                const res = await axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25');
                setAnimesTop(res.data.data);
                setcarregar(false);
            } catch (erro) {
                Alert.alert("Erro", `Erro ao buscar top animes:\n${erro.message}`);
                setcarregar(false);
            }
        };

        buscarAnimesTop();
    }, []);


    if (carregar) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" color="#00bfff" />
                <Text style={{ color: '#fff', marginTop: 10 }}>Carregando top animes...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Top Animes Atuais</Text>
            <FlatList
                data={animesTop}
                keyExtractor={item => item.mal_id.toString()}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: dados, index: posicao }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Informacoes', { anime: dados })}
                    >
                        <Image source={{ uri: dados.images.jpg.image_url }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.itemTitle}>{posicao + 1}. {dados.title}</Text>
                            <Text style={styles.score}>Nota: {dados.score ?? 'N/A'}</Text>
                        </View>
                    </TouchableOpacity>
                )}

            />
        </View>
    );
}