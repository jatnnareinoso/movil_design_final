import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet, TouchableNativeFeedback, Platform } from 'react-native';

interface Props {
    title?: string;
    position?: 'br' | 'bl';
    onPress: () => void;
    imageSource: any;
}

export const Fab = ({ onPress, position = 'br', imageSource }: Props ) => {

    const ios = () => {
        return (
            <TouchableOpacity
                onPress={ onPress }
                activeOpacity={ 0.75 }
                style={[
                    styles.fabLocation,
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <View style={ styles.fab }>
                    <Image source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/imagenes/block.png')}
                    style={styles.image} />
 />
                </View>
            </TouchableOpacity>
        );
    };

    const android = () => {
        return (
            <View
                style={[
                    styles.fabLocation,
                    ( position === 'bl' ) ? styles.left : styles.right
                ]}
            >
                <TouchableNativeFeedback
                    onPress={ onPress }
                    background={ TouchableNativeFeedback.Ripple('#28425B', false, 30 ) }
                >
                    <View style={ styles.fab }>
                        <Image source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/imagenes/block.png')}
                        style={styles.image} />
                    </View>
                </TouchableNativeFeedback>
            </View>
        );
    };

    return (Platform.OS === 'ios') ? ios() : android();
};

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 80,
    },
    right: {
        right: 25
    },
    left: {
        left: 25
    },
    fab: {
        width: 80,
        height: 120,
        justifyContent: 'center',
    },
    image: {
        width: 80,
        height: 80,
        alignSelf: 'center',
    },
});
