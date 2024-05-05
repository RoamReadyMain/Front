//not used yet

import React from "react";
import { View } from "react-native";
import { useLocalSearchParams , Stack } from 'expo-router';
import Country from '../Country';

export default function Page() {
  const { id } = useLocalSearchParams();

  return(
    <View >
      <Stack.Screen
        options={{
          headerTitle : id
        }}
      />
      <Country countryId={id}/>
    </View>
  );
}