import React from 'react';

import {StyleSheet, Platform, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './src/screens/Home/index.js';
import FormScreen from './src/screens/Forms/index.js';
import InitialScreen from './src/screens/FirstScreenApp/index.js';

const Stack = createStackNavigator();

export default function App (){
    
    return( 
        <NavigationContainer style={styles.container}>
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Forms" component={FormScreen} />
                <Stack.Screen name="Initial" component={InitialScreen} />
           </Stack.Navigator>

        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
        flex: 1,
          
    }
})