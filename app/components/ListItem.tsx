import React, {FunctionComponent} from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";

interface OwnProps {
    style?: object
    image: ImageSourcePropType
    title: string
    subTitle: string
}

type Props = OwnProps;

const ListItem: FunctionComponent<Props> = ({style, image, title, subTitle}) => {
    return (
        <View style={[styles.container, style]}>
            <Image style={styles.image} source={image}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{title}</AppText>
                <AppText style={styles.subTitle}>{subTitle}</AppText>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "row"
    },
    detailsContainer: {},
    image: {
        borderRadius: 35,
        height: 70,
        width: 70,
        marginRight: 10,
    },
    subTitle: {
        textTransform: "capitalize",
        color: colors.medium,
    },
    title: {
        fontWeight: "500",
        textTransform: "capitalize"
    }
});

export default ListItem;
