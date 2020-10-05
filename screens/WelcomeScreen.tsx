import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React from "react";

export default function WelcomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text>Sell what you don't need</Text>
            </View>
            <ImageBackground source={require('../assets/background.jpg')} style={styles.backGroundImage}/>
            <View style={styles.login}/>
            <View style={styles.register}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    logoContainer: {
        position: "absolute",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        flex: 1,
        top: 100,
        zIndex: 1
    },
    logo: {
        height: 100,
        width: 100,
    },
    backGroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    login: {
        flex: 0.1,
        backgroundColor: "#fc5c65"
    },
    register: {
        flex: 0.1,
        backgroundColor: "#4ECDC4"
    },
});
