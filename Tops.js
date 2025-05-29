import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ActivityIndicator,
    Image,
    TouchableOpacity
} from 'react-native';
import axios from 'axios';

export default function Tops({ navigation }) {
    const [animesTop, setAnimesTop] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get('https://api.jikan.moe/v4/top/anime?filter=bypopularity&limit=25')
            .then(res => {
                setAnimesTop(res.data.data);
                setLoading(false);
            })
            .catch(err => {
                console.error("Erro ao buscar top animes:", err);
                setLoading(false);
            });
    }, []);

    if (loading) {
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
                renderItem={({ item, index }) => (
                    <TouchableOpacity
                        style={styles.itemContainer}
                        activeOpacity={0.8}
                        onPress={() => navigation.navigate('Informacoes', { anime: item })}
                    >
                        <Image source={{ uri: item.images.jpg.image_url }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.itemTitle}>{index + 1}. {item.title}</Text>
                            <Text style={styles.score}>Nota: {item.score ?? 'N/A'}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        backgroundColor: '#0f1b2c',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 24,
        color: '#00bfff',
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 16,
        backgroundColor: '#1a2a3c',
        borderRadius: 12,
        overflow: 'hidden',
        elevation: 2,
    },
    image: {
        width: 90,
        height: 120,
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    info: {
        flex: 1,
        padding: 12,
        justifyContent: 'center',
    },
    itemTitle: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    score: {
        color: '#b0bec5',
        fontSize: 14,
    },
});
