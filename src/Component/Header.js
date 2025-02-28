import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

const Header = (props) => {
    const { name } = props;
    const navigation = useNavigation()
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity onPress={()=>{
                navigation.goBack()
            }} >
                <Image source={require('../Assets/arrow.jpg')} style={styles.arrowImage} />
            </TouchableOpacity>
            <Text style={styles.headerText}>{name}</Text>
            <Text>{''}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    arrowImage: {
        width: 40,
        height: 40,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '800',
        color: '#000000',
    },
});

export default Header;
