import React, {FunctionComponent} from 'react';
import {Platform, StyleSheet, Text} from "react-native";

interface OwnProps {
    text: string
    style?: object
}

type Props = OwnProps;

const AppText: FunctionComponent<Props> = ({text, style}) => {
    return (
        <Text style={[styles.text, style]}>
            {text}
        </Text>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir"
    }
});

export default AppText;
