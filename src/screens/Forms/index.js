import React, {useEffect} from 'react';

import {Container, Img, WrapperForm, Form, TitleForm, NameInput, EmailInput, PasswordInput, SubmitInput, SubmitTitle} from './styles.js'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import logoForm from '../../images/logoFutMania.png'

import {useForm} from 'react-hook-form';


export default function FormScreen({navigation}){    
    const onSubmit = data => {
        if(data.name === undefined ){
            alert('O nome é obrigatório!')
        }else if(data.email === undefined){
            alert('O Email é obrigatório!')
        }else if (data.email.indexOf('@') === -1){
            alert('Insira um Email válido!')
        }else if (data.email.indexOf('.com') === -1){
            alert('Insira um Email válido')
        }else{
        navigation.navigate('Initial');
        }
    };

    const {register, handleSubmit, setValue} = useForm();

    useEffect(() => {
        register('name')
        register('email')
    }, [register])

    return(

        <KeyboardAwareScrollView style={{flex: 1}}>

            <Container>

            <Img source={logoForm} alt="Logo FutMania" />

                <WrapperForm>

                    <Form >
                    
                        <TitleForm>Preencha o formulário abaixo para iniciar o aplicativo</TitleForm>

                        <NameInput placeholder="Digite Seu Nome" onChangeText={text => {
                            setValue('name', text)
                        }} />

                        <EmailInput placeholder="Digite Seu Email" onChangeText={text => {
                            setValue('email', text)
                        }}  />

                        <SubmitInput onPress={handleSubmit(onSubmit)}>

                            <SubmitTitle>Entrar</SubmitTitle>

                        </SubmitInput>
                    
                    </Form>

                </WrapperForm>

            </Container>

        </KeyboardAwareScrollView>

    )
    
}