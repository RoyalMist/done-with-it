import {Image, ImageBackground, StyleSheet, Text, View} from "react-native";
import React, {FunctionComponent} from 'react';
import colors from "../config/colors";
import Button from "../components/Button";

interface OwnProps {
    tagLine: String
}

type Props = OwnProps;

const WelcomeScreen: FunctionComponent<Props> = (props) => {
    return (
        <ImageBackground source={require('../assets/background.jpg')} style={styles.background} blurRadius={5}>
            <View style={styles.logoContainer}>
                <Image source={require('../assets/logo-red.png')} style={styles.logo}/>
                <Text style={styles.tagLine}>{props.tagLine}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button text="login" color={colors.primary} onPress={() => alert("Login")}/>
                <Button text="register" color={colors.secondary} onPress={() => alert("Register")}/>
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
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: "absolute",
        alignItems: "center",
        top: 70,
    },
    buttonContainer: {
        alignItems: "center",
        width: "90%",
    },
    tagLine: {
        marginTop: 10,
        fontWeight: "bold",
        textTransform: "capitalize"
    }
});

export default WelcomeScreen;
