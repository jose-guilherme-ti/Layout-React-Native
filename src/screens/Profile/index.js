import React from 'react';

import {Text, View, StyleSheet, Platform} from 'react-native'

export default function Profile(){
    return(
        <View style={styles.container}>

            <Text>Testando</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
        alignItems: 'center',
        justifyContent: 'center',
    }
})
