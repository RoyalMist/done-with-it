import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

export function SettingsScreen() {
    return (
        <View style={styles.container}>
            <AppText style={styles.text}>Settings</AppText>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        fontSize: 56,
        color: "purple"
    }
});

