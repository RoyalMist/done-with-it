import React from 'react';
import {StatusBar} from "expo-status-bar";
import Card from "./app/components/Card";
import {StyleSheet, View} from "react-native";

export default function App() {
    return (
        <>
            {/*<WelcomeScreen tagLine="sell what you don't need!"/>*/}
            {/*<ViewImageScreen/>*/}
            <View style={styles.view}>
                <Card title="red jacket for sale!" subTitle="$100" image={require('./app/assets/jacket.jpg')}/>
            </View>
            <StatusBar style="auto"/>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: "#c1bfbf",
        padding: 20,
        paddingTop: 100,
    }
});
