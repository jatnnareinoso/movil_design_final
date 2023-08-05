import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/imagenes/fondo.jpg')} // Cambia la ruta por la ubicación de tu imagen
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 500, // Ajusta el ancho de la imagen según tus necesidades
        height: 400, // Ajusta la altura de la imagen según tus necesidades
    },
});
