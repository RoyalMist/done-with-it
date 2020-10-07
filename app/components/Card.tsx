import React, {FunctionComponent} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import colors from "../config/colors";
import AppText from "./AppText";

interface OwnProps {
    title: string
    subTitle: string
    image: ImageSourcePropType
}

type Props = OwnProps;

const Card: FunctionComponent<Props> = ({title, subTitle, image}) => {
    return (
        <View style={styles.card}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title} text={title}/>
                <AppText style={styles.subTitle} text={subTitle}/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        alignContent: "flex-start",
        backgroundColor: colors.white,
        borderRadius: 15,
        marginBottom: 20,
        overflow: "hidden"
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        height: 200,
        width: "100%"
    },
    subTitle: {
        color: colors.secondary,
        fontWeight: "bold"
    },
    title: {
        marginBottom: 7,
        textTransform: "capitalize"
    },
});

export default Card;
