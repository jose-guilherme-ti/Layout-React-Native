import React from 'react';

import {StyleSheet, Platform} from 'react-native'

import {Container, Test} from './styles.js'

export default function FirstScreenApp() {
    return(
        <Container style={styles.container}>

            <Test>Aqui vai a próxima tela</Test>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0
    }
})
