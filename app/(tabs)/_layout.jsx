// This fix the layout of tabs I didn't make the bottom tabs yet

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import MyButton from '@/Componants/MyButton';

export default function _layout() {
    const router = useRouter();
    const icon = require('./../../assets/Logo/Favicon.png');

    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor:'#333333',
                },
                headerTintColor:'white',
                headerBackImageSource:{icon}
            }}
        >
            <Stack.Screen name='Country' options={{
                title : 'Country',
                presentation : 'modal'
            }}/>
            <Stack.Screen name='Flights' options={{
                title : 'Flights',
                
            }}/>
            <Stack.Screen name='Hotels' options={{
                title : 'Hotel',
                
            }}/>
           
            <Stack.Screen name='Countries' options={{
                headerShown : false
            }}/>
            
           
            
        </Stack>
    );
}
const styles = StyleSheet.create({
    logText:{
        fontSize:5,
        color :'white'
    }
})