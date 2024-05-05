//The list of countries 

import React from "react";
import{safeAreaView , View , Pressable,TouchableHighlight ,Text , StyleSheet ,Image, FlatList , ScrollView} from 'react-native';

import Countries from "../../../Componants/Countries";

import {  useRouter } from "expo-router";

export default function CountryHotel(){
    //the paths of images
    const palstine = require('../../../assets/Countries/Paliestine.jpg');
    const a = require('../assets/images/2.jpg');
    const b = require('../assets/images/7.jpg');
    const c = require('../assets/images/4.jpg');
    const d = require('../assets/images/5.jpg');

    
    const route = useRouter();

    //list of data
    const data = [
        { id: '1', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '2', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '3', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '4', name: 'Italy', img: c  , Price : '10000$'},
        { id: '5', name: 'Turky', img: d  , Price : '10000$'},
        { id: '6', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '7', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '8', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '9', name: 'Italy', img: c  , Price : '10000$'},
        { id: '10', name: 'Turky', img: d  , Price : '10000$'},
        { id: '11', name: 'Paliestina', img: palstine  , Price : '10000$'},
        { id: '12', name: 'Egypt', img: a  , Price : '10000$'},
        { id: '13', name: 'New Yourk', img: b  , Price : '10000$'},
        { id: '14', name: 'Italy', img: c  , Price : '10000$'},
        { id: '15', name: 'Turky', img: d  , Price : '10000$'},
        
    ];
    const renderItem = ({ item }) => (
        <View style ={styles.items}>
            <Countries
                img={item.img}
                name ={item.name}
                onPress={() => route.push('/(tabs)/Hotels')}
            />
        </View>
    );

    return (
        <ScrollView>
        <View style={styles.container}>
            
            <Text style={styles.header}>Choose Your destination</Text>
            <View style={styles.listContaier}>
            <FlatList
                style={styles.list}
                data={data}
                keyExtractor={item => item.id}
                renderItem={renderItem}
                numColumns={3}
            />
            </View>
        </View>
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
        width: '100%',
        flexDirection:'row',
        marginLeft:5,
        marginRight:5,
        padding:5,
        //alignContent :'center'
        
    },
    listContaier:{
        flex :1,
        alignItems :'center',
    },
    items:{
        flex :1,
        flexDirection:'row'
    }
});
