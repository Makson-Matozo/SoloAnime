import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './Home';
import Tops from './Tops';
import Sobre from './Sobre';
import Informacoes from './Informacoes';
import SplashScreen from './SplashScreen'; // Novo import

import { Ionicons } from '@expo/vector-icons';
import Feather from '@expo/vector-icons/Feather';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarActiveTintColor: '#6d899d',
                tabBarInactiveTintColor: '#dbe7ec',
                tabBarIcon: ({ color, size }) => {
                    const icones = {
                        Animes: <Feather name="film" size={size} color={color} />,
                        Melhores: <Ionicons name="flame" size={size} color={color} />,
                        Sobre: <Ionicons name="information-circle" size={size} color={color} />,
                    };

                    return icones[route.name];
                },
            })}
        >
            <Tab.Screen name="Animes" component={AnimesStack} />
            <Tab.Screen name="Melhores" component={TopsStack} />
            <Tab.Screen name="Sobre" component={Sobre} />
        </Tab.Navigator>
    );
}

// Stacks internos
function AnimesStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Informacoes" component={Informacoes} />
        </Stack.Navigator>
    );
}

function TopsStack() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tops" component={Tops} />
            <Stack.Screen name="Informacoes" component={Informacoes} />
        </Stack.Navigator>
    );
}

// Stack principal que inclui a Splash
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
