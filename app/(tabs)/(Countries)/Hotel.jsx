//The list of countries 

import React , {useEffect , useState} from "react";
import{ View ,TextInput,Text , StyleSheet ,Image, FlatList , ScrollView} from 'react-native';
import Countries from "../../../Componants/Countries";
import Search from "@/Componants/Search";
import {  useRouter } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Hotel(){
    //the paths of images
    const palstine = require('../../../assets/Countries/Paliestine.jpg');
    const a = require('../../../assets/Countries/2.jpg');
    const b = require('../../../assets/Countries/7.jpg');
    const c = require('../../../assets/Countries/4.jpg');
    const d = require('../../../assets/Countries/5.jpg');
    //Search var
    const [query , setQuery] = useState('');
    const [disList , setDisList] = useState([]);
    const [showInput, setShowInput] = useState(false);


    
    const route = useRouter();

    //list of data
    const Data = [
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

    //Search handling//////////////////////////////////////////////////////////////////////
    useEffect(() => {
        setDisList(Data);
    },[]);
    
    useEffect(() => {
        async function fetchFilteredData() {
          try {
            // Retrieve saved search query from AsyncStorage
            const savedSearchQuery = await AsyncStorage.getItem('query');
            if (savedSearchQuery) {
              setQuery(savedSearchQuery);
            }
          } catch (error) {
            console.error('Error retrieving search query from AsyncStorage:', error);
          }
        }
    
        fetchFilteredData();
      }, []);
    

    useEffect(() => {
        if (query.trim() === "") {
            setDisList(Data);
            setShowInput(false);
        } else {
            const filteredList = Data.filter(
                (item) => item.name.toLowerCase().includes(query.toLowerCase())
            );
            setDisList(filteredList);
            AsyncStorage.setItem('query', query);
        }
    },[query ]);

    return (
        <ScrollView>
        <View style={styles.container}>
            <View style = {styles.searchContainer}>
            {showInput && (
                <TextInput 
                    placeholder="Search..."
                    value={query}
                    onChangeText={setQuery}
                    style ={styles.input}
                />
            )}
                <Search onPress={() => setShowInput(true)}/>
            </View>
            <Text style={styles.header}>Choose Your destination</Text>
            <View style={styles.listContaier}>
            <FlatList
                style={styles.list}
                data={disList}
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
        marginLeft:100,
        marginRight:5,
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
    },
    searchContainer:{
        marginLeft:'auto',
        flexDirection:'row',
        margin:4,
        padding:2,
    },
    input:{
        width :'55%',
        height :30,
        borderWidth:1,
        borderColor : '#7392b7',
        borderRadius :6 ,
        padding :10,
        margin :8,
        //borderBlockColor :'#c5d5ea' 
    },
});
