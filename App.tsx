import React from 'react';
import WelcomeScreen from "./screens/WelcomeScreen";
import {StatusBar} from "expo-status-bar";

export default function App() {
    return (
        <>
            <WelcomeScreen/>
            <StatusBar style="auto"/>
        </>
    );
}
