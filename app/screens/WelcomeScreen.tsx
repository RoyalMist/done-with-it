import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React, {FunctionComponent} from 'react';
import colors from "../config/colors";

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
        backgroundColor: colors.primary
    },
    register: {
        height: 70,
        width: "100%",
        backgroundColor: colors.secondary
    },
});

export default WelcomeScreen;
