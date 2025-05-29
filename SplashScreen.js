import React, { useEffect, useCallback, useRef } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, StatusBar } from 'react-native';
import { Video } from 'expo-av';
import Animated, {
    useSharedValue,
    withTiming,
    useAnimatedStyle,
    Easing,
    runOnJS,
} from 'react-native-reanimated';
import { LinearGradient } from 'expo-linear-gradient';

// Constantes reutilizáveis
const SPLASH_DURATION = 3000;
const ANIMATION_DURATION = 1500;
const SCALE_BASE = 0.8;
const SCALE_VARIATION = 0.2;

export default function SplashScreen({ navigation }) {
    const videoRef = useRef(null);
    const opacity = useSharedValue(0);

    const navigateToMain = useCallback(() => {
        navigation.replace('Main');
    }, [navigation]);

    const animatedStyle = useAnimatedStyle(() => ({
        opacity: opacity.value,
        transform: [{ scale: opacity.value * SCALE_VARIATION + SCALE_BASE }],
    }));

    useEffect(() => {
        animateIn();
        const timer = setTimeout(animateOut, SPLASH_DURATION);
        return () => cleanup(timer);
    }, [navigateToMain]);

    // Animação de entrada
    const animateIn = () => {
        opacity.value = withTiming(1, {
            duration: ANIMATION_DURATION,
            easing: Easing.out(Easing.exp),
        });
    };

    // Animação de saída + navegação
    const animateOut = () => {
        opacity.value = withTiming(0, { duration: 500 }, () => {
            runOnJS(navigateToMain)();
        });
    };

    // Limpeza
    const cleanup = (timer) => {
        clearTimeout(timer);
        if (videoRef.current) videoRef.current.pauseAsync();
    };

    return (
        <View style={styles.container}>
            <StatusBar hidden />

            <Video
                ref={videoRef}
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

            <Animated.View style={[styles.overlay, animatedStyle]}>
                <Text style={styles.title}>SoloAnime</Text>
                <ActivityIndicator size="large" color="#dbe7ec" />
            </Animated.View>
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
