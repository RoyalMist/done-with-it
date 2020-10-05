import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React, {FunctionComponent} from 'react';

interface OwnProps {
    title: String
}

type Props = OwnProps;

const WelcomeScreen: FunctionComponent<Props> = (props) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text>{props.title}</Text>
            </View>
            <View style={styles.login}/>
            <View style={styles.register}/>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },
    login: {
        height: 70,
        width: "100%",
        backgroundColor: "#fc5c65"
    },
    register: {
        height: 70,
        width: "100%",
        backgroundColor: "#4ECDC4"
    },
});

export default WelcomeScreen;
