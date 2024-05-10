import React from "react";
import { ScrollView, View, Text, StyleSheet, Image, FlatList, TextInput } from 'react-native';

import { useRouter } from "expo-router";
import { Link } from "expo-router";

import Item from "@/Componants/item";

export default function Page({item}) {
    const route =useRouter();

    const room = require('../../assets/Double/1.jpg');

    const data = [
        { id: '1', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '2', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '3', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '4', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '5', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '6', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '7', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '8', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '9', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '10', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '11', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '12', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '13', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '14', name: 'Paliestina', img: room  , Price : '10000$'},
        { id: '15', name: 'Paliestina', img: room  , Price : '10000$'},
        
    ];

    const renderItem = ({ item }) => (
        <View style ={styles.items}>
            <Item
                img={item.img}
                name ={item.name}
                price={item.Price}
                //Still working on it
                onPress={{}}
            />
        </View>
    );

    return(
        <ScrollView>
        <View style={styles.container}>
           <Text>Welcome Hotels</Text>
           <View style={styles.listContaier}>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={1}
            />
            </View>
        </ View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
    },
    button: {
        borderRadius: 5,
        width: 'auto',
        height: 'auto',
    },
    text: {
        fontSize: 20,
        fontStyle: 'italic',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    list: {
        width: '80%',
        flexDirection:'column',
        marginLeft:5,
        marginRight:5,
        padding:5,
        alignContent :'center'
        
    },
    listContaier:{
        flex :1,
        width :'95%',
        //alignItems :'center',
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
    },
    items:{
        flex :1,
        flexDirection:'row',
        width:'90%',
        marginTop :5
    }
});
