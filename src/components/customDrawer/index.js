import React, {useState} from 'react';

import {StyleSheet, Platform, Modal} from 'react-native';

import {DrawerNavigatorItems} from 'react-navigation-drawer';

import {FontAwesome} from '@expo/vector-icons';

import ProfileImage from '../../images/ImageDrawer/PictureProfile.jpeg';

import {Container,
        ButtonCloseModal,
        WrapperImg,
        ImgProfileFullScreen,
        WrapperTitleModal,
        TitleModal,
        WrapperButtonEditImage,
        ButtonEditImage,
        TitleButtonEditImage,
        WrapperContent,
        Header,
        ButtonImageProfile,
        ImgProfile,
        NameProfile,
        ButtonEditProfile,
        TitleEditProfile} from './styles.js';

export default function CustomDrawer({...props}){
    const [modalVisible,
            setModalVisible] = useState(false);

    return(

        <Container style={styles.container}>
            

            <Modal
            style={styles.modal}
            animationType="slide"
            visible={modalVisible}
            presentationStyle="formSheet"
            >
                
                <ButtonCloseModal onPress={() => {                     setModalVisible(!modalVisible)
                }}>

                    <FontAwesome name="close" size={20} color="#2C02A4" />

                </ButtonCloseModal>
                
                <WrapperTitleModal>

                    <TitleModal>Esta é sua foto de perfil:</TitleModal>

                </WrapperTitleModal>

                <WrapperImg>

                    <ImgProfileFullScreen source={ProfileImage} alt="Imagem de Perfil em Tela Cheia" />

                </WrapperImg>

                <WrapperButtonEditImage>

                    <ButtonEditImage>

                        <TitleButtonEditImage>Editar Foto</TitleButtonEditImage>

                    </ButtonEditImage>

                </WrapperButtonEditImage>

            </Modal>

            <WrapperContent>
                
                <Header>

                    <ButtonImageProfile onPress={() => {
                        setModalVisible(true);
                    }}>

                        <ImgProfile source={ProfileImage} alt="Foto de Perfil" />
                    
                    </ButtonImageProfile>

                    <NameProfile>Victor Hugo Guirra</NameProfile>

                    <ButtonEditProfile>

                        <TitleEditProfile>Editar Perfil</TitleEditProfile>

                    </ButtonEditProfile>

                </Header>

            </WrapperContent>

            <DrawerNavigatorItems {...props} />
        
        </Container>
    );   
};

const styles = StyleSheet.create({
    container:{
        paddingTop: Platform.OS === 'android' ? 70 : 0,
    },
    modal:{
        backgroundColor:'#2C02A4',
    }
})

