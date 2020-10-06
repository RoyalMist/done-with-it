import React, {FunctionComponent} from 'react';
import {GestureResponderEvent, Pressable, StyleSheet, Text} from "react-native";

interface OwnProps {
    text: string
    color: string
    onPress?: ((event: GestureResponderEvent) => void)
}

type Props = OwnProps;

const Button: FunctionComponent<Props> = (props) => {
    return (
        <Pressable style={styles(props).button} onPress={props.onPress}>
            <Text style={styles(props).text}>{props.text}</Text>
        </Pressable>
    );
};

const styles = (props: OwnProps) => StyleSheet.create({
    button: {
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        margin: 10,
        width: "100%",
        borderRadius: 20,
        backgroundColor: props.color,
    },
    text: {
        color: "#fff",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "uppercase"
    }
});

export default Button;
