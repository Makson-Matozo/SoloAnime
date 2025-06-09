import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Linking,
    TouchableOpacity,
    Alert 
} from 'react-native';
import { Ionicons, FontAwesome, AntDesign } from '@expo/vector-icons';

export default function Sobre() {
    const openLink = (url) => {
        Linking.openURL(url)
        .catch(() => {
            Alert.alert('Erro', 'Não foi possível abrir o link. Verifique sua conexão ou tente novamente.');
        });
    };
    

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Ionicons name="information-circle" size={70} color="#4dd0e1" style={styles.icon} />
                <Text style={styles.title}>Sobre o App</Text>
                <Text style={styles.text}>
                    Criado para os verdadeiros caçadores de anime! Aqui você explora os melhores títulos, divididos em categorias épicas, com dados atualizados direto do mundo otaku.
                </Text>
                <Text style={styles.text}>
                    Desenvolvido com 💙 em React Native + API Jikan — leve, rápido e sempre atualizado.
                </Text>
                <Text style={styles.subTitle}>Redes do Desenvolvedor</Text>
                <View style={styles.socialContainer}>
                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink('https://github.com/Makson-Matozo')}>
                        <FontAwesome name="github" size={28} color="#e0e0e0" />
                        <Text style={styles.socialText}>GitHub</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink('https://www.instagram.com/max__vibes/')}>
                        <AntDesign name="instagram" size={28} color="#e0e0e0" />
                        <Text style={styles.socialText}>Instagram</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={styles.socialButton} onPress={() => openLink('https://www.linkedin.com/in/makson-matozo-46911a312/')}>
                        <AntDesign name="linkedin-square" size={28} color="#e0e0e0" />
                        <Text style={styles.socialText}>LinkedIn</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b0f1e',
    },
    scrollContainer: {
        padding: 24,
        alignItems: 'center',
    },
    icon: {
        marginBottom: 16,
    },
    title: {
        fontSize: 28,
        color: '#4dd0e1',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 16,
        letterSpacing: 1,
    },
    subTitle: {
        fontSize: 18,
        color: '#90caf9',
        marginTop: 30,
        marginBottom: 12,
        fontWeight: '600',
    },
    text: {
        fontSize: 16,
        color: '#cfd8dc',
        marginBottom: 14,
        textAlign: 'center',
        lineHeight: 24,
        paddingHorizontal: 10,
    },
    socialContainer: {
        width: '100%',
        alignItems: 'center',
        gap: 15,
        marginTop: 10,
    },
    socialButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#1c2533',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        width: '90%',
        maxWidth: 300,
        justifyContent: 'space-between',
        elevation: 3,
    },
    socialText: {
        color: '#e0e0e0',
        fontSize: 16,
        fontWeight: '500',
    },
});
