// This fix the layout of tabs I didn't make the bottom tabs yet

import {View ,Text , StyleSheet, Pressable, Button} from 'react-native'
import React from 'react'
import { Stack, useRouter } from 'expo-router'
import MyButton from '@/Componants/MyButton';

export default function _layout() {
    const router = useRouter();
    return(
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor:'black',
                },
                headerTintColor:'white'
            }}
        >
            
            <Stack.Screen name='Flights' options={{
                title : 'Flights',
                
            }}/>
            <Stack.Screen name='Hotels' options={{
                title : 'Hotel',
                
            }}/>
            <Stack.Screen name='[missing]' options={{
                title : '404'
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