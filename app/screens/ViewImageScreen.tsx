import {Image, StyleSheet, View} from "react-native";
import React, {FunctionComponent} from "react";
import colors from "../config/colors";

const ViewImageScreen: FunctionComponent = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}/>
            <View style={styles.deleteIcon}/>
            <Image resizeMode="contain" source={require('../assets/chair.jpg')} style={styles.image}/>
        </View>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.primary,
        position: "absolute",
        top: 40,
        left: 30
    },
    container: {
        flex: 1,
        backgroundColor: colors.black
    },
    deleteIcon: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        position: "absolute",
        top: 40,
        right: 30
    },
    image: {
        width: "100%",
        height: "100%"
    },
});

export default ViewImageScreen;
