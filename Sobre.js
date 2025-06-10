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
import styles from "./estilos/SobreEstilo.js";
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


