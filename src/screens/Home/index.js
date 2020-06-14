import React from 'react';

import logoApp from '../../images/logoFutMania.png'
import illustrationHome from '../../images/illustrationHome.png'

import {Container, Img, Description, InfoOne, InfoTwo, ButtonInit, TitleButton, Illustration} from './styles.js';


export default function Home({navigation}){

    return(
        <Container>

            <Img source={logoApp} alt="Logo do Aplicativo"/>

            <Description>

                <InfoOne>Seja muito bem-vindo(a) ao app mais completo do mundo do futebol.</InfoOne>

                <InfoTwo>Tudo sobre os principais times, campeonatos, jogadores e muito mais.</InfoTwo>

            </Description>

            <Illustration source={illustrationHome} alt="Ilustração" />

            <ButtonInit onPress={() => navigation.navigate('Forms')}>

                <TitleButton>Iniciar</TitleButton>

            </ButtonInit>

        </Container>
    )
}

