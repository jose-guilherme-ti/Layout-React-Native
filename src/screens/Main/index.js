import React from 'react';

import {StyleSheet, Platform} from 'react-native'

import {Feather, MaterialCommunityIcons} from '@expo/vector-icons'

import LogoFutMania from '../../images/logoFutMania.png'

import {Container, Wrapper, Header, ButtonDrawerNavigator, Img, BlockButtonViewMore, ButtonViewMore, LabelButtonViewMore} from './styles.js'

import BraziliamTeams from '../../components/braziliamTeams/index.js'
import MajorChampioships from '../../components/majorChampionships/index.js'


export default function FirstScreenApp({navigation}) {
    return(
        <Container style={styles.container}>

            <Wrapper>

                <Header>

                    <ButtonDrawerNavigator onPress={() => navigation.openDrawer()}>

                        <Feather name="menu" size={35} color="#2C02A4" />

                    </ButtonDrawerNavigator>

                    <Img source={LogoFutMania} alt="Logo Fut Mania" />

                </Header>

            </Wrapper>

            <BraziliamTeams />

            <MajorChampioships />

            <BlockButtonViewMore>

                <ButtonViewMore>

                    <LabelButtonViewMore>Ver Mais</LabelButtonViewMore>
                    
                    <MaterialCommunityIcons name="location-enter" size={24} color="#fff" />
                    
                </ButtonViewMore>

            </BlockButtonViewMore>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0
    }
})
