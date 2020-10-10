import React from 'react';
import {StatusBar} from "expo-status-bar";
import {StyleSheet} from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
    return (
        <>
            <WelcomeScreen/>
            {/*<ViewImageScreen/>*/}
            {/* <View style={styles.view}>
                <Card title="red jacket for sale!" subTitle="$100" image={require('./app/assets/jacket.jpg')}/>
            </View>*/}
            {/*<ListingDetailsScreen/>*/}

            <StatusBar style="auto"/>
        </>
    );
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: "#c1bfbf",
        padding: 20,
        paddingTop: 100,
    }
});
