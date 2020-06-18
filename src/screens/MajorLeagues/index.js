import React from 'react';

import {StyleSheet, Platform} from 'react-native';

import {Feather} from '@expo/vector-icons';

import {Container,
        Header,
        Title,
        ButtonOpenDrawer,
        WrapperOptions,
        OptionPremierLeague,
        ImgPremierLeague,
        LabelPremierLeague,
        OptionLaLiga,
        ImgLaLiga,
        LabelLaLiga,
        OptionSerieATIM,
        ImgSerieATIM,
        LabelSerieATIM,
        OptionBundesliga,
        ImgBundesliga,
        LabelBundesliga,
        OptionLigueOne,
        ImgLigueOne,
        LabelLigueOne,
} from './styles.js';


import premierLeague from '../../images/MajorLeagues/premierLeague.png';
import laLiga from '../../images/MajorLeagues/laLiga.png';
import serieaTIM from '../../images/MajorLeagues/serieaTIM.png';
import bundesliga from '../../images/MajorLeagues/bundesliga.png';
import ligueOne from '../../images/MajorLeagues/ligueOne.png';




export default function BestsOfTheWorld({navigation}){
    return(
        <Container style={styles.container}>

            <Header>

                <Title>Principais Ligas</Title>

                <ButtonOpenDrawer onPress={() => {navigation.openDrawer()}}>

                    <Feather name="menu" size={35} color="#2C02A4" />

                </ButtonOpenDrawer>

            </Header>

            <WrapperOptions>

                <OptionPremierLeague>

                    <ImgPremierLeague source={premierLeague} alt="Logo Premiere League" />

                    <LabelPremierLeague>Premier League</LabelPremierLeague>

                </OptionPremierLeague>

                <OptionLaLiga>

                    <ImgLaLiga source={laLiga} alt="Logo Premiere League" />

                    <LabelLaLiga>LaLiga</LabelLaLiga>

                </OptionLaLiga>

                <OptionSerieATIM>

                    <ImgSerieATIM source={serieaTIM} alt="Logo Premiere League" />

                    <LabelSerieATIM>Série A TIM</LabelSerieATIM>

                </OptionSerieATIM>

                <OptionBundesliga>

                    <ImgBundesliga source={bundesliga} alt="Logo Premiere League" />

                    <LabelBundesliga>Bundesliga</LabelBundesliga>

                </OptionBundesliga>

                <OptionLigueOne>

                    <ImgLigueOne source={ligueOne} alt="Logo Premiere League" />

                    <LabelLigueOne>Ligue One</LabelLigueOne>

                </OptionLigueOne>

            </WrapperOptions>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
    }
})