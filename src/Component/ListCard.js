import { useNavigation } from "@react-navigation/native";
import React from "react";
import {View, Text,TouchableOpacity,Image,StyleSheet} from "react-native"

const ListCard = ({item})=>{
    const navigation = useNavigation()
    return(
        <TouchableOpacity onPress={()=>{
            navigation.navigate('DetailScreen',{item})
        }}>
        <View style={styles.itemContainer}>
            <Image source={item?.image} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.price}>{item.price}</Text>
            </View>
        </View>
    </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 20,
    },
    flatList: {
        marginTop: 32,
    },
    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        padding: 20,
        borderRadius: 16,
        borderColor: 'gray',
    },
    image: {
        width: 100,
        height: 100,
    },
    textContainer: {
        marginLeft: 20,
    },
    name: {
        fontSize: 24,
        color: '#000000',
        fontWeight: '700',
        width: 200,
    },
    price: {
        fontSize: 24,
        color: '#000000',
        fontWeight: '500',
    },
});
export default ListCard