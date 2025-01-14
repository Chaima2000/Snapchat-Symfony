import React from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = () => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFC00',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SplashScreen;
