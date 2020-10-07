import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React, {FunctionComponent} from 'react';
import colors from "../config/colors";
import AppButton from "../components/AppButton";

interface OwnProps {
    tagLine: String
}

type Props = OwnProps;

const WelcomeScreen: FunctionComponent<Props> = (props) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background} blurRadius={10}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>{props.tagLine}</Text>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton text="login" color={colors.primary} onPress={() => console.log("Login")}/>
                <AppButton text="register" color={colors.secondary} onPress={() => console.log("Register")}/>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 20,
    },
    buttonsContainer: {
        alignItems: "center",
        width: "100%",
        padding: 25,
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
    tagLine: {
        marginTop: 20,
        fontSize: 25,
        fontWeight: "600",
        textTransform: "capitalize"
    }
});

export default WelcomeScreen;
