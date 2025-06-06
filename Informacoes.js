import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Linking,TouchableOpacity,StatusBar,} from 'react-native';
export default function Informacoes({ route, navigation }) {
    const { anime } = route.params;

    return (
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.content}>
                <Image source={{ uri: anime.images.jpg.image_url }} style={styles.image} />
                <Text style={styles.title}>{anime.title}</Text>
                <Text style={styles.descricao}>{anime.synopsis || 'Sem descrição disponível.'}</Text>

                <View style={styles.infoBox}>
                    <Text style={styles.info}><Text style={styles.label}>Status:</Text> {anime.status || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Nota:</Text> {anime.score || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Tipo:</Text> {anime.type || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Episodios:</Text> {anime.episodes || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Duração:</Text> {anime.duration || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Ano:</Text> {anime.year || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Temporada:</Text> {anime.season || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Estúdio:</Text> {anime.studios?.[0]?.name || 'N/A'}</Text>
                    <Text style={styles.info}><Text style={styles.label}>Gêneros:</Text> {anime.genres?.map(g => g.name).join(', ') || 'N/A'}</Text>
                </View>

                {anime.trailer?.url && (
                    <TouchableOpacity
                        style={styles.trailerButton}
                        onPress={() => Linking.openURL(anime.trailer.url)}
                    >
                        <Text style={styles.buttonText}>▶ VER TRAILER</Text>
                    </TouchableOpacity>
                )}

                <TouchableOpacity
                    style={styles.backButton}
                    onPress={() => navigation.goBack()}
                >
                    <Text style={styles.buttonText}>⬅ VOLTAR</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#0c0f1a',
        padding: 16,
    },
    content: {
        alignItems: 'center',
    },
    image: {
        marginTop: '10%',
        width: '100%',
        height: 400,
        borderRadius: 12,
        marginBottom: 16,
        resizeMode: 'cover',
        shadowColor: '#00f0ff',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5,
        shadowRadius: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#00f0ff',
        textShadowColor: '#000',
        textShadowOffset: { width: 0, height: 1 },
        textShadowRadius: 10,
        textAlign: 'center',
        marginBottom: 10,
    },
    descricao: {
        fontSize: 16,
        color: '#ccc',
        marginBottom: 20,
        textAlign: 'center',
        paddingHorizontal: 10,
        lineHeight: 24,
    },
    infoBox: {
        backgroundColor: '#111827',
        borderRadius: 10,
        padding: 16,
        width: '100%',
        marginBottom: 20,
        shadowColor: '#00f0ff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    info: {
        fontSize: 15,
        color: '#ccc',
        marginBottom: 8,
    },
    label: {
        color: '#00f0ff',
        fontWeight: 'bold',
        textAlign:"center",
    },
    trailerButton: {
        backgroundColor: '#00f0ff',
        paddingVertical: 14,
        borderRadius: 8,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        width: '100%',
        shadowColor: '#00f0ff',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 10,
    },
    backButton: {
        backgroundColor: '#1f2937',
        paddingVertical: 12,
        borderRadius: 8,
        marginBottom: 30,
        alignItems: 'center',
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
});
