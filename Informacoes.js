import React from 'react';
import {View,Text,Image,StyleSheet,ScrollView,Linking,TouchableOpacity,StatusBar,} from 'react-native';
import styles from "./estilos/InformacoesEstilo.js";
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
