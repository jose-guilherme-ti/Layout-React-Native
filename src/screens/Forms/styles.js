import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items:center;
    padding-top:120px;
`;

export const Img = styled.Image`
    width:150px;
    height:150px;
`;

export const WrapperForm = styled.View`
    background-color:#2C02A4;
    width:100%;
    height:517px;
    margin-top:30px;
    border-top-left-radius:40px;
    border-top-right-radius:40px;
    align-items:center;
    padding-top:70px;
`;

export const Form = styled.View`
    width:80%;
    align-items:center;
`;

export const TitleForm = styled.Text`
    color:#fff;
    font-size:18px;
    font-weight:bold;
    text-align:center;
`;

export const NameInput = styled.TextInput`
    width:100%;
    height:50px;
    color:#fff;
    border-color:#fff;
    border-width:3px;
    border-radius:10px;
    margin-top:150px;
    padding-left:12px;
`;

export const EmailInput = styled.TextInput`
    width:100%;
    height:50px;
    color:#fff;
    border-color:#fff;
    border-width:3px;
    border-radius:10px;
    margin-top:10px;
    padding-left:12px;
`;

export const SubmitInput = styled.TouchableOpacity`
    background-color:#fff;
    width:100%;
    height:45px;
    align-items:center;
    justify-content:center;
    border-radius:10px;
    margin-top:50px;
`;

export const SubmitTitle = styled.Text`
    color: #2C02A4;
    font-weight:bold;
    font-size:16px;
`;
