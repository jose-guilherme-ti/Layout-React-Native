import React, {useState} from 'react';

import {StyleSheet, Platform, Modal} from 'react-native';

import {Feather, FontAwesome} from '@expo/vector-icons'

import {Container,
        Header,
        ButtonOpenDrawer,
        TitleBestsOfTheWorld,
        WrapperBigCard,
        OptionBigCard,
        ImgBigCard,
        ButtonViewMore,
        TitleButtonViewMore,
        WrapperTitleSmallCards,
        TitleSmallCards,
        WrapperSmallCards,
        OptionSmallCard,
        ImgSmallCard,
        LabelSmallCard,
    } from './styles.js'


import lionelMessi from '../../images/BestsOfTheWorld/BigCards/lionelMessi.jpg';
import cristianoRonaldo from '../../images/BestsOfTheWorld/BigCards/cristianoRonaldo.jpg';
import virgilVanDijk from '../../images/BestsOfTheWorld/BigCards/virgilVanDijk.jpg';

import neymar from '../../images/BestsOfTheWorld/SmallCards/neymar.jpg';
import mbappe from '../../images/BestsOfTheWorld/SmallCards/mbappe.jpg';
import hazard from '../../images/BestsOfTheWorld/SmallCards/hazard.jpg';
import salah from '../../images/BestsOfTheWorld/SmallCards/salah.jpg';
import sergioRamos from '../../images/BestsOfTheWorld/SmallCards/sergioRamos.jpg';
import alisson from '../../images/BestsOfTheWorld/SmallCards/alisson.jpg';
import deBruyne from '../../images/BestsOfTheWorld/SmallCards/deBruyne.jpg';
import pogba from '../../images/BestsOfTheWorld/SmallCards/pogba.jpg';
import toniKross from '../../images/BestsOfTheWorld/SmallCards/toniKross.jpg';
import lewandowski from '../../images/BestsOfTheWorld/SmallCards/lewandowski.jpg';

const itemsBigCard = [
    {
        key: String(Math.random()),
        img: lionelMessi,
        label: 'Lionel Messi'
    },
    {
        key: String(Math.random()),
        img: cristianoRonaldo,
        label: 'Cristiano Ronaldo'
    },
    {
        key: String(Math.random()),
        img: virgilVanDijk,
        label: 'Van Dijk'
    },
]

const itemsSmallCard = [
    {
        key: String(Math.random()),
        img: neymar,
        label: 'Neymar Jr'
    },
    {
        key: String(Math.random()),
        img: hazard,
        label: 'Hazard'
    },
    {
        key: String(Math.random()),
        img: salah,
        label: 'Salah'
    },
    {
        key: String(Math.random()),
        img: mbappe,
        label: 'Mbappé'
    },
    {
        key: String(Math.random()),
        img: lewandowski,
        label: 'Lewandowski'
    },
    {
        key: String(Math.random()),
        img: sergioRamos,
        label: 'Sérgio Ramos'
    },
    {
        key: String(Math.random()),
        img: deBruyne,
        label: 'De Bruyne'
    },
    {
        key: String(Math.random()),
        img: alisson,
        label: 'Alisson'
    },
    {
        key: String(Math.random()),
        img: toniKross,
        label: 'Toni Kross'
    },
    {
        key: String(Math.random()),
        img: pogba,
        label: 'Paul Pogba'
    },
    
]

export default function BestsOfTheWorld({navigation}){
    return(
        <Container style={styles.container}>
            
            <Header>

                <TitleBestsOfTheWorld>Melhores do Mundo</TitleBestsOfTheWorld>

                <ButtonOpenDrawer onPress={() => navigation.openDrawer()}>

                    <Feather name="menu" size={35} color="#2C02A4" />

                </ButtonOpenDrawer>

            </Header>

            <WrapperBigCard>

                {itemsBigCard.map((itemBig) => (
                    <OptionBigCard key={itemBig.key}>
                        
                        <ImgBigCard source={itemBig.img} />

                        <ButtonViewMore>

                            <TitleButtonViewMore>Ver Mais</TitleButtonViewMore>

                        </ButtonViewMore>

                    </OptionBigCard>
                ))}

            </WrapperBigCard>
            
            <WrapperTitleSmallCards>

                <TitleSmallCards>Outros Jogadores:</TitleSmallCards>

            </WrapperTitleSmallCards>

            <WrapperSmallCards>

                    {itemsSmallCard.map((itemSmall) => (
                        <OptionSmallCard key={itemSmall.key}>
                           
                            <ImgSmallCard source={itemSmall.img} />

                            <LabelSmallCard>{itemSmall.label}</LabelSmallCard>

                        </OptionSmallCard>
                    ))}

            </WrapperSmallCards>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
        justifyContent:'center',
        alignItems:'center', 
    }
})