import React, {FunctionComponent} from 'react';
import {Image, StyleSheet, View} from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import ListItem from "../components/ListItem";

const ListingDetailsScreen: FunctionComponent = (props) => {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/jacket.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>red jacket for sale!</AppText>
                <AppText style={styles.price}>$100</AppText>
                <ListItem style={styles.listItem} image={require('../assets/mosh.jpg')} title="mosh hamedani" subTitle="5 listings"/>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20
    },
    image: {
        width: "100%",
        height: 300,
    },
    listItem: {
        marginVertical: 40,
    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
        textTransform: "capitalize"
    }

});

export default ListingDetailsScreen;
