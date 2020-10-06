import React from 'react';
import {StatusBar} from "expo-status-bar";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
    return (
        <>
            <WelcomeScreen tagLine="sell what you don't need!"/>
            {/*<ViewImageScreen/>*/}
            <StatusBar style="auto"/>
        </>
    );
}
