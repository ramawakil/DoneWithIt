import React from 'react';
import LottieView from 'lottie-react-native';
import { View, StyleSheet } from 'react-native';

function AppActivityIndicator({visible = false}) {
    if (!visible) return null;
    return (
        <View style={styles.overlay}>
             <LottieView autoPlay={true} loop={true} source={require('../assets/animations/loader.json')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        backgroundColor: 'white',
        height: '100%',
        width: '100%',
        zIndex: 1,
        opacity: 0.8,
    }
});

export default AppActivityIndicator;