import React from 'react';

import {Container, Wrapper, TitleContainer, OptionsTeam, Option, WrapperImg, Img, Label} from './styles.js'

import flamengo from '../../images/Teams/flamengo.png'
import palmeiras from '../../images/Teams/palmeiras.png'
import gremio from '../../images/Teams/gremio.png'
import vasco from '../../images/Teams/vasco.png'
import corinthians from '../../images/Teams/corinthians.png'
import bahia from '../../images/Teams/bahia.png'
import santos from '../../images/Teams/santos.png'
import internacional from '../../images/Teams/internacional.png'
import atleticomg from '../../images/Teams/atleticomg.png'
import goias from '../../images/Teams/goias.png'
import botafogo from '../../images/Teams/botafogo.png'
import sport from '../../images/Teams/sport.png'
import cruzeiro from '../../images/Teams/cruzeiro.png'
import athleticopr from '../../images/Teams/athleticopr.png'
import saopaulo from '../../images/Teams/saopaulo.png'


const items = [
    {
        key: String(Math.random()),
        img: flamengo,
        label:'Flamengo'
    },
    {
        key: String(Math.random()),
        img: palmeiras,
        label:'Palmeiras'
    },
    {
        key: String(Math.random()),
        img: gremio,
        label:'Grêmio'
    },
    {
        key: String(Math.random()),
        img: vasco,
        label:'Vasco'
    },
    {
        key: String(Math.random()),
        img: corinthians,
        label:'Corinthians'
    },
    {
        key: String(Math.random()),
        img: bahia,
        label:'Bahia'
    },
    {
        key: String(Math.random()),
        img: santos,
        label:'Santos'
    },
    {
        key: String(Math.random()),
        img: internacional,
        label:'Internacional'
    },
    {
        key: String(Math.random()),
        img: atleticomg,
        label:'Atlético - MG'
    },
    {
        key: String(Math.random()),
        img: goias,
        label:'Goiás'
    },
    {
        key: String(Math.random()),
        img: botafogo,
        label:'Botafogo'
    },
    {
        key: String(Math.random()),
        img: sport,
        label:'Sport'
    },
    {
        key: String(Math.random()),
        img: cruzeiro,
        label:'Cruzeiro'
    },
    {
        key: String(Math.random()),
        img: athleticopr,
        label:'Athletico - PR'
    },
    {
        key: String(Math.random()),
        img: saopaulo,
        label:'São Paulo'
    },
]

export default function BraziliamTeams(){
    return(
        <Container>

            <Wrapper>
            
                <TitleContainer>Times Brasileiros</TitleContainer>

                <OptionsTeam>

                    {items.map((item) => (
                        <Option key={item.key}>
                            
                            <WrapperImg>

                                <Img source={item.img} alt={item.label} />
                            
                            </WrapperImg>

                            <Label>{item.label}</Label>

                        </Option>
                    ))}

                </OptionsTeam>
            
            </Wrapper>

        </Container>
    )
}