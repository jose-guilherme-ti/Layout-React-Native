import React from 'react';

import {StyleSheet, Platform} from 'react-native';

import {Feather} from '@expo/vector-icons'

import {Container,
        Wrapper,
        Header,
        TitleBrazilianChampioship,
        ButtonOpenDrawer,
        TitleCurrentTeams,
        CurrentTeams,
        OptionsCurrentTeams,
        ImgCurrentTeams,
        LabelCurrentTeams,
        TitleBiggestWinners,
        BiggestWinners,
        LeftColumn,
        OptionLeftColumn,
        LabelOptionLeftColumn,
        ImgOptionLeftColumn,
        TitlesOptionLeftColumn,
        RightColumn,
        OptionRightColumn,
        LabelOptionRightColumn,
        ImgOptionRightColumn,
        TitlesOptionRightColumn,
} from './styles.js';

import athleticopr from '../../images/Teams/athleticopr.png';
import atleticogo from '../../images/Teams/atleticogo.png';
import atleticomg from '../../images/Teams/atleticomg.png';
import bahia from '../../images/Teams/bahia.png';
import botafogo from '../../images/Teams/botafogo.png';
import bragantino from '../../images/Teams/bragantino.png';
import ceara from '../../images/Teams/ceara.png';
import corinthians from '../../images/Teams/corinthians.png';
import coritiba from '../../images/Teams/coritiba.png';
import cruzeiro from '../../images/Teams/cruzeiro.png';
import flamengo from '../../images/Teams/flamengo.png';
import fluminense from '../../images/Teams/fluminense.png';
import fortaleza from '../../images/Teams/fortaleza.png';
import goias from '../../images/Teams/goias.png';
import gremio from '../../images/Teams/gremio.png';
import internacional from '../../images/Teams/internacional.png';
import palmeiras from '../../images/Teams/palmeiras.png';
import santos from '../../images/Teams/santos.png';
import saopaulo from '../../images/Teams/saopaulo.png';
import sport from '../../images/Teams/sport.png';
import vasco from '../../images/Teams/vasco.png';

const currentTeamsItems = [
    {
        key: String(Math.random()),
        img: athleticopr,
        label: 'Athletico-PR'
    },
    {
        key: String(Math.random()),
        img: atleticogo,
        label: 'Atletico-GO'
    },
    {
        key: String(Math.random()),
        img: atleticomg,
        label: 'Atletico-MG'
    },
    {
        key: String(Math.random()),
        img: bahia,
        label: 'Bahia'
    },
    {
        key: String(Math.random()),
        img: botafogo,
        label: 'Botafogo'
    },
    {
        key: String(Math.random()),
        img: bragantino,
        label: 'Bragantino'
    },
    {
        key: String(Math.random()),
        img: ceara,
        label: 'Ceará'
    },
    {
        key: String(Math.random()),
        img: corinthians,
        label: 'Corinthians'
    },
    {
        key: String(Math.random()),
        img: coritiba,
        label: 'Coritiba'
    },
    {
        key: String(Math.random()),
        img: flamengo,
        label: 'Flamengo'
    },
    {
        key: String(Math.random()),
        img: fluminense,
        label: 'Fluminense'
    },
    {
        key: String(Math.random()),
        img: fortaleza,
        label: 'Fortaleza'
    },
    {
        key: String(Math.random()),
        img: goias,
        label: 'Goiás'
    },
    {
        key: String(Math.random()),
        img: gremio,
        label: 'Grêmio'
    },
    {
        key: String(Math.random()),
        img: internacional,
        label: 'Internacional'
    },
    {
        key: String(Math.random()),
        img: palmeiras,
        label: 'Palmeiras'
    },
    {
        key: String(Math.random()),
        img: santos,
        label: 'Santos'
    },
    {
        key: String(Math.random()),
        img: saopaulo,
        label: 'São Paulo'
    },
    {
        key: String(Math.random()),
        img: sport,
        label: 'Sport'
    },
    {
        key: String(Math.random()),
        img: vasco,
        label: 'Vasco'
    },
    
]

const LeftColumnItems = [
    {
        key: String(Math.random()),
        img: palmeiras,
        label: 'Palmeiras',
        titles: '10 Títulos'
    },
    {
        key: String(Math.random()),
        img: flamengo,
        label: 'Flamengo',
        titles: '7 Títulos'
    },
    {
        key: String(Math.random()),
        img: saopaulo,
        label: 'São Paulo',
        titles: '6 Títulos'
    },
    {
        key: String(Math.random()),
        img: fluminense,
        label: 'Fluminense',
        titles: '4 Títulos'
    },
]

const RightColumnItems = [
    {
        key: String(Math.random()),
        img: santos,
        label: 'Santos',
        titles: '8 Títulos'
    },
    {
        key: String(Math.random()),
        img: corinthians,
        label: 'Corinthians',
        titles: '7 Títulos'
    },
    {
        key: String(Math.random()),
        img: cruzeiro,
        label: 'Flamengo',
        titles: '4 Títulos'
    },
    {
        key: String(Math.random()),
        img: vasco,
        label: 'Vasco',
        titles: '4 Títulos'
    },
]

export default function BestsOfTheWorld({navigation}){
    return(
        <Container style={styles.container}>
            <Wrapper>

                <Header>

                    <TitleBrazilianChampioship>Campeonato Brasileiro</TitleBrazilianChampioship>

                    <ButtonOpenDrawer onPress={() => {navigation.openDrawer()}}>
                    
                        <Feather name="menu" size={35} color="#2C02A4" />

                    </ButtonOpenDrawer>

                </Header>
                
                <TitleCurrentTeams>Times Atuais</TitleCurrentTeams>

                <CurrentTeams>

                    {currentTeamsItems.map((itemCurrentTeams) => (
                        <OptionsCurrentTeams key={itemCurrentTeams.key}>

                            <ImgCurrentTeams source={itemCurrentTeams.img} />

                            <LabelCurrentTeams>{itemCurrentTeams.label}</LabelCurrentTeams>

                        </OptionsCurrentTeams>
                    ))}

                </CurrentTeams>

                <TitleBiggestWinners>Maiores Vencedores</TitleBiggestWinners>
                
                <BiggestWinners>

                    <LeftColumn>

                        {LeftColumnItems.map((itemLeftColumn) => (
                            <OptionLeftColumn item={itemLeftColumn.key}>

                                <LabelOptionLeftColumn>{itemLeftColumn.label}</LabelOptionLeftColumn>

                                <ImgOptionLeftColumn source={itemLeftColumn.img} />

                                <TitlesOptionLeftColumn>{itemLeftColumn.titles}</TitlesOptionLeftColumn>

                            </OptionLeftColumn>
                        ))}

                    </LeftColumn>

                    <RightColumn>

                        {RightColumnItems.map((itemRightColumn) => (
                            <OptionRightColumn item={itemRightColumn.key}>

                                <LabelOptionRightColumn>{itemRightColumn.label}</LabelOptionRightColumn>

                                <ImgOptionRightColumn source={itemRightColumn.img} />

                                <TitlesOptionRightColumn>{itemRightColumn.titles}</TitlesOptionRightColumn>

                            </OptionRightColumn>
                        ))}

                    </RightColumn>

                </BiggestWinners>

            </Wrapper>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
    }
})