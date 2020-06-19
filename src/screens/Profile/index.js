import React, {useState} from 'react';

import {StyleSheet, Platform, Modal, Picker} from 'react-native'

import {Feather, FontAwesome} from '@expo/vector-icons'

import ProfilePicture from '../../images/ImageDrawer/PictureProfile.jpeg'

import logo from '../../images/logoFutMania.png';

import {Container,
        Header,
        TitleHeader,
        ButtonOpenDrawer,
        InfosProfile,
        ButtonCloseModal,
        TitleModal,
        WrapperImageModal,
        ImgModal,
        WrapperButtonEditImageModal,
        ButtonEditImageModal,
        TitleButtonEditImageModal,
        ButtonImageProfile,
        ImgProfile,
        TextInfos,
        NameProfile,
        ChoicesInfo,
        WrapperTitlePicker,
        TitlePicker,
        WrapperPicker,
        WrapperLogo,
        ImgLogo,
} from './styles.js';



export default function Profile({navigation}){
    const [modalVisible, setModalVisible] = useState(false);
    
    const [selectedValueTeams, setSelectedValueTeams] = useState("Flamengo")

    const [selectedValueEuropeanTeams, setSelectedValueEuropeanTeams] = useState("Barcelona")

    const [selectedValueChampionship, setSelectedValueChampionship] = useState("Champions League")

    return(
        <Container style={styles.container}>

            <Header>

                <TitleHeader>Meu Perfil</TitleHeader>

                <ButtonOpenDrawer onPress={() => {navigation.openDrawer()}}>

                    <Feather name="menu" size={35} color="#2C02A4" />

                </ButtonOpenDrawer>

            </Header>

            <InfosProfile>

                <Modal
                animationType="slide"
                visible={modalVisible}
                >

                    <ButtonCloseModal onPress={() =>{
                        setModalVisible(!modalVisible)
                    }}>

                        <FontAwesome name="close" size={25} color="#2C02A4" />

                    </ButtonCloseModal>

                    <TitleModal>Esta é sua foto de perfil:</TitleModal>

                    <WrapperImageModal>

                        <ImgModal source={ProfilePicture} alt="Foto de Perfil Expandida" />

                    </WrapperImageModal>

                    <WrapperButtonEditImageModal>

                        <ButtonEditImageModal>

                            <TitleButtonEditImageModal>Editar Foto</TitleButtonEditImageModal>

                        </ButtonEditImageModal>

                    </WrapperButtonEditImageModal>

                </Modal>

                <ButtonImageProfile onPress={() => {
                    setModalVisible(true);
                }}>
                    
                    <ImgProfile source={ProfilePicture} alt="Foto de Perfil" />

                </ButtonImageProfile>

                <TextInfos>

                    <NameProfile>Victor Hugo Guirra</NameProfile>

                    <ChoicesInfo>{selectedValueTeams} | {selectedValueEuropeanTeams} </ChoicesInfo>

                    <ChoicesInfo>| {selectedValueChampionship}</ChoicesInfo>

                </TextInfos>

            </InfosProfile>
            
            <WrapperTitlePicker>

                <TitlePicker>Time do Coração</TitlePicker>
            
            </WrapperTitlePicker>

            <WrapperPicker>

                <Picker
                selectedValue={selectedValueTeams}
                onValueChange={(itemValue, itemIndex) => setSelectedValueTeams(itemValue)}
                style={styles.Picker}>

                    <Picker.Item label="Athletico PR" value="Athletico PR" />
                    <Picker.Item label="Atlético GO" value="Atlético GO" />
                    <Picker.Item label="Atlético MG" value="Atlético MG" />
                    <Picker.Item label="Bahia" value="Bahia" />
                    <Picker.Item label="Botafogo" value="Botafogo" />
                    <Picker.Item label="Bragantino" value="Bragantino" />
                    <Picker.Item label="Ceará" value="Ceará" />
                    <Picker.Item label="Corinthians" value="Corinthians" />
                    <Picker.Item label="Coritiba" value="Coritiba" />
                    <Picker.Item label="Cruzeiro" value="Cruzeiro" />
                    <Picker.Item label="Flamengo" value="Flamengo" />
                    <Picker.Item label="Fluminense" value="Fluminense" />
                    <Picker.Item label="Fortaleza" value="Fortaleza" />
                    <Picker.Item label="Goiás" value="Goiás" />
                    <Picker.Item label="Grêmio" value="Grêmio" />
                    <Picker.Item label="Internacional" value="Internacional" />
                    <Picker.Item label="Palmeiras" value="Palmeiras" />
                    <Picker.Item label="Santos" value="Santos" />
                    <Picker.Item label="São Paulo" value="São Paulo" />
                    <Picker.Item label="Sport" value="Sport" />
                    <Picker.Item label="Vasco" value="Vasco" />
                    
                </Picker>

            </WrapperPicker>

            <WrapperTitlePicker>

                <TitlePicker>Time Europeu Favorito</TitlePicker>
            
            </WrapperTitlePicker>

            <WrapperPicker>

                <Picker
                selectedValue={selectedValueEuropeanTeams}
                onValueChange={(itemValue, itemIndex) => setSelectedValueEuropeanTeams(itemValue)}
                style={styles.Picker}>

                    <Picker.Item label="Arsenal" value="Arsenal" />
                    <Picker.Item label="Atlético de Madrid" value="Atlético de Madrid" />
                    <Picker.Item label="Barcelona" value="Barcelona" />
                    <Picker.Item label="Bayern De Munique" value="Bayern De Munique" />
                    <Picker.Item label="Borussia Dortmund" value="Borussia Dortmund" />
                    <Picker.Item label="Chelsea" value="Chelsea" />
                    <Picker.Item label="Juventus" value="Juventus" />
                    <Picker.Item label="Liverpool" value="Liverpool" />
                    <Picker.Item label="Manchester City" value="Manchester City" />
                    <Picker.Item label="Manchester United" value="Manchester United" />
                    <Picker.Item label="Napoli" value="Napoli" />
                    <Picker.Item label="Paris Saint Germain" value="Paris Saint Germain" />
                    <Picker.Item label="Real Madrid" value="Real Madrid" />
                    <Picker.Item label="Tottenham" value="Tottenham" />

                </Picker>

            </WrapperPicker>

            <WrapperTitlePicker>

                <TitlePicker>Time do Coração</TitlePicker>
            
            </WrapperTitlePicker>

            <WrapperPicker>

                <Picker
                selectedValue={selectedValueChampionship}
                onValueChange={(itemValue, itemIndex) => setSelectedValueChampionship(itemValue)}
                style={styles.Picker}>

                    
                    <Picker.Item label="Champions League" value="Champions League" />
                    <Picker.Item label="Copa do Mundo" value="Copa do Mundo" />
                    <Picker.Item label="Libertadores" value="Libertadores" />
                    <Picker.Item label="Mundial de Clubes" value="Mundial de Clubes" />
                    
                    
                </Picker>

            </WrapperPicker>

            <WrapperLogo>

                <ImgLogo source={logo} alt="Logo Fut Mania" />

            </WrapperLogo>

        </Container>
    )
}

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 60 : 0,
    },
    Picker:{
        width:300,
        height:50,
        fontWeight: 'bold',
    }
})
