import React from 'react';

import {Container, Wrapper, Header, Title, ButtonViewMore, TitleButtonViewMore, FirstRowItems, SecondRowItems, Option, Img, BlockLabel, Label} from './styles.js';

import copaDoMundo from '../../images/Champioships/copaDoMundo.jpg';
import libertadores from '../../images/Champioships/libertadores.jpg';
import championsLeague from '../../images/Champioships/championsLeague.jpg'
import mundialDeClubes from '../../images/Champioships/mundialDeClubes.jpg'

const ItemsFirstRow = [
    {
        key: String(Math.random()),
        img: copaDoMundo,
        label: 'Copa do Mundo'
    },
    {
        key: String(Math.random()),
        img: libertadores,
        label: 'Libertadores'
    },
]

const ItemsSecondRow = [
    {
        key: String(Math.random()),
        img: championsLeague,
        label: 'Champions League'
    },
    {
        key: String(Math.random()),
        img: mundialDeClubes,
        label: 'Mundial de Clubes'
    },
]

export default function MajorChampioships(){
    return(
        <Container>
            
            <Wrapper>
            
                <Header>

                    <Title>Principais Campeonatos</Title>

                    <ButtonViewMore>

                        <TitleButtonViewMore>Ver Mais</TitleButtonViewMore>

                    </ButtonViewMore>

                </Header>
            
                <FirstRowItems>

                    {ItemsFirstRow.map((itemFirstRow) => (
                        <Option key={itemFirstRow.key}>

                            <Img source={itemFirstRow.img} />

                            <BlockLabel>

                                <Label>{itemFirstRow.label}</Label>

                            </BlockLabel>

                        </Option>
                    ))}

                </FirstRowItems>

                <SecondRowItems>

                    {ItemsSecondRow.map((itemSecondRow) => (
                        <Option key={itemSecondRow.key}>

                            <Img source={itemSecondRow.img} />

                            <BlockLabel>

                                <Label>{itemSecondRow.label}</Label>

                            </BlockLabel>

                        </Option>
                    ))}

                </SecondRowItems>

            </Wrapper>

        </Container>
    )
}