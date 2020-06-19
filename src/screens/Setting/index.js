import React from 'react';

import {StyleSheet, Platform} from 'react-native'

import {Feather, Entypo} from '@expo/vector-icons'

import {Container, Header, Title, ButtonOpenDrawer, Options, TitleOptions, WrapperImg, Img} from './styles.js';

import logo from '../../images/logoFutMania.png';

const items = [
    {
        key: String(Math.random()),
        title:'Editar Dados',
    },
    {
        key: String(Math.random()),
        title:'Gerenciar Notificações',
    },
    {
        key: String(Math.random()),
        title:'Sobre esta versão',
    },
    {
        key: String(Math.random()),
        title:'Sair',
    },
]

export default function Profile({navigation}){
    return(
        <Container style={styles.container}>

            <Header>

                <Title>Configurações</Title>

                <ButtonOpenDrawer onPress={() => {navigation.openDrawer()}}>

                    <Feather name="menu" size={35} color="#2C02A4" />

                </ButtonOpenDrawer>

            </Header>

            {items.map((item) => (
                <Options key={item.key}>

                    <TitleOptions>{item.title}</TitleOptions>

                    <Entypo name="chevron-right" size={24} color="#000" />

                </Options>
            ))}

            <WrapperImg>

                <Img source={logo} alt="Logo Fut Mania" />

            </WrapperImg>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
    }
})
