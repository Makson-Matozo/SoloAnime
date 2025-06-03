import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient';

const SPLASH_DURATION = 3000;

export default function SplashScreen({ navigation }) {

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Main');
        }, SPLASH_DURATION);

        return () => clearTimeout(timer); // Limpa o timer se a tela for desmontada antes
    }, [navigation]);

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Video
                source={require('./assets/splash-video.mp4')}
                rate={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={StyleSheet.absoluteFillObject}
            />

            <LinearGradient
                colors={['rgba(255,255,255,0.15)', 'rgba(14, 26, 34, 0.8)']}
                style={StyleSheet.absoluteFill}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }}
            />

            <View style={styles.overlay}>
                <Text style={styles.title}>SoloAnime</Text>
                <ActivityIndicator size="large" color="#dbe7ec" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e1a22',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 42,
        fontWeight: '900',
        color: '#fff',
        marginBottom: 25,
        letterSpacing: 4,
        textShadowColor: 'rgba(255, 255, 255, 0.7)',
        textShadowOffset: { width: 0, height: 3 },
        textShadowRadius: 8,
        fontFamily: 'Arial Black',
    },
});
