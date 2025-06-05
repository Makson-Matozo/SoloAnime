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

        return () => clearTimeout(timer);
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
                style={styles.backgroundVideo}
            />

            <LinearGradient
                colors={['rgba(255,255,255,0.15)', 'rgba(14, 26, 34, 0.8)']}
                style={styles.gradient}
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

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0e1a22',
    },
    videoDeFundo: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    gradiente: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    camadaSobreposta: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
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
""
