import React from 'react';

import {StyleSheet, Platform, View, Text} from 'react-native';

export default function BestsOfTheWorld(){
    return(
        <View style={styles.container}>

            <Text>Melhores do Mundo</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
        justifyContent:'center',
        alignItems:'center',
        
    }
})