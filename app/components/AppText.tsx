import React, {FunctionComponent} from 'react';
import {Platform, StyleSheet, Text} from "react-native";

interface OwnProps {
    style?: object
}

type Props = OwnProps;

const AppText: FunctionComponent<Props> = ({children, style}) => {
    return (
        <Text style={[styles.text, style]}>
            {children}
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
