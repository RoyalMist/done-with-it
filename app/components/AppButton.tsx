import React, {FunctionComponent} from 'react';
import {GestureResponderEvent, StyleSheet, Text, TouchableOpacity} from "react-native";
import colors from "../config/colors";

interface OwnProps {
    text: string
    color: string
    onPress?: ((event: GestureResponderEvent) => void)
}

type Props = OwnProps;

const AppButton: FunctionComponent<Props> = ({text, color, onPress}) => {
    return (
        <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        padding: 15,
        height: 50,
        marginVertical: 10,
        width: "100%",
        borderRadius: 25,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
});

export default AppButton;
