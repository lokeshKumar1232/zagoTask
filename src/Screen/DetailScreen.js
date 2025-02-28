import React from "react";
import { View, Text, Image, Dimensions, StyleSheet } from "react-native";
import Header from "../Component/Header";

const DetailScreen = ({ route }) => {
    const { item } = route.params;
    const { width } = Dimensions.get("window");
    
    return (
        <View style={styles.container}>
            <Header name={"Details Screen"} />
            <View style={styles.content}>
                <Image source={item?.image} style={[styles.image, { width: width - 40 }]} />
                <Text style={styles.name}>{item?.name}</Text>
                <Text style={styles.price}>{item?.price}</Text>
                <Text style={styles.description}>{item?.description}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    content: {
        marginTop: 20,
    },
    image: {
        height: 200,
    },
    name: {
        fontSize: 32,
        fontWeight: '500',
        color: '#000000',
    },
    price: {
        fontSize: 32,
        fontWeight: '500',
        color: '#000000',
    },
    description: {
        fontSize: 20,
        fontWeight: '400',
        color: '#000000',
    },
});

export default DetailScreen;