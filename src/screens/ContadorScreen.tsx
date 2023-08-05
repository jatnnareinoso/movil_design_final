import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
    const [iconPosition, setIconPosition] = useState(new Animated.Value(0));

    const handleIncrement = () => {
        setContador(contador + 1);
        animateIcon(-30);
    };

    const handleDecrement = () => {
        setContador(contador - 1);
        animateIcon(30);
    };

    const animateIcon = (toValue) => {
        Animated.timing(iconPosition, {
            toValue,
            duration: 500,
            useNativeDriver: false,
        }).start(() => {
            iconPosition.setValue(0);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>
            <View style={styles.iconContainer}>
                <Animated.Image
                    source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/imagenes/flor.webp')} // Cambia la ruta a tu imagen
                    style={[styles.icon, { transform: [{ translateY: iconPosition }] }]}
                />
            </View>
            <Fab title="+" onPress={handleIncrement} />
            <Fab title="-" position="bl" onPress={handleDecrement} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 40,
        top: -15,
        textAlign: 'center',
    },
    iconContainer: {
        marginTop: 20,
    },
    icon: {
        width: 50,
        height: 50,
    },
});

export default ContadorScreen;