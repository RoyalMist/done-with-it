import React from 'react';
import {StatusBar} from "expo-status-bar";
import ViewImageScreen from "./app/screens/ViewImageScreen";

export default function App() {
    return (
        <>
            {/*<WelcomeScreen/>*/}
            <ViewImageScreen/>
            <StatusBar style="auto"/>
        </>
    );
}
