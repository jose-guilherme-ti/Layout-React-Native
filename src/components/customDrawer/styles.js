import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    background-color:#2C02A4
`;

export const ButtonCloseModal = styled.TouchableOpacity`
    align-items:flex-end;
    padding-right:20px;
    padding-top:20px;
`;

export const WrapperTitleModal = styled.View`
    align-items:center;
    margin-top:20px;
`;

export const TitleModal = styled.Text`
    color:#2C02A4
    font-weight:bold;
    font-size:20px;
`

export const WrapperImg = styled.View`
    justify-content:center;
    align-items:center;
    height:75%;
    margin-top:0px;
`;

export const ImgProfileFullScreen = styled.Image`
    width:90%;
    height:80%;
    border-radius:10px;
`;

export const WrapperButtonEditImage = styled.View`
    align-items:center;
`;

export const ButtonEditImage = styled.TouchableOpacity`
    background-color:#2C02A4;
    border-radius:10px;
    width:70%;
    height:45px;
    align-items:center;
    justify-content:center;
`;

export const TitleButtonEditImage = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:17px;
`

export const WrapperContent = styled.View`
    align-items:center;
    justify-content:center;
    margin-bottom:30px;
`;

export const Header = styled.View`
    width:90%;
    height:165px;
    background-color:#fff;
    border-radius:10px;
    align-items:center;
    padding-top:10px;
`;

export const ButtonImageProfile = styled.TouchableOpacity``;

export const ImgProfile = styled.Image`
    width:80px;
    height:80px;
    border-radius:40px;
`;

export const NameProfile = styled.Text`
    font-weight:bold;
    margin-top:5px;
`;

export const ButtonEditProfile = styled.TouchableOpacity`
    background-color:#0CCA7B;
    border-top-left-radius:15px;
    border-bottom-right-radius:15px;
    width:45%;
    height:30px;
    justify-content:center;
    align-items:center;
    margin-top:10px;
`;

export const TitleEditProfile = styled.Text`
    color:#fff;
    font-weight:bold;
`;