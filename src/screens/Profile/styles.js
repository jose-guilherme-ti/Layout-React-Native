import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items:center;
`;

export const Header = styled.View`
    flex-direction:row;
    width:100%;
    align-items:center;
    justify-content:space-between;
    padding: 0 15px;
    margin-top:30px;
`;

export const TitleHeader = styled.Text`
    color:#2C02A4;
    font-size:20px;
    font-weight:bold;
`;

export const ButtonOpenDrawer = styled.TouchableOpacity``;

export const InfosProfile = styled.View`
    align-items:center;
    justify-content:space-between;
    margin-top:15px;
    flex-direction:row;
    background-color:#2C02A4;
    width:90%;
    padding:15px;
    border-radius:10px;
`;

export const ButtonCloseModal = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:flex-end;
    padding:15px;
`;

export const TitleModal = styled.Text`
    color:#2C02A4;
    font-size:20px;
    font-weight:bold;
    text-align:center;
`

export const WrapperImageModal = styled.View`
    align-items:center;
    justify-content:center;
    width:100%;
    height:70%;
`;

export const ImgModal = styled.Image`
    width:90%;
    height:80%;
    border-radius:10px;
`;

export const WrapperButtonEditImageModal = styled.View`
    align-items:center;
    justify-content:center;
`;

export const ButtonEditImageModal = styled.TouchableOpacity`
    background-color:#2C02A4;
    border-radius:10px;
    width:70%;
    height:45px;
    align-items:center;
    justify-content:center;
`;

export const TitleButtonEditImageModal = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:17px;
`;

export const ButtonImageProfile = styled.TouchableOpacity`
    width:120px;
    height:120px;
    border-radius:60px;
    margin-right:10px;
`;

export const ImgProfile = styled.Image`
    width:120px;
    height:120px;
    border-radius:60px;
    
`;

export const TextInfos = styled.View``;

export const NameProfile = styled.Text`
    font-size:18px;
    font-weight:bold;
    margin-top:10px;
    color:#64EDC6;
    margin-bottom:10px;
`;

export const ChoicesInfo = styled.Text`
    color:#fff;
    font-size:16px;
    font-weight:bold;
    margin-top:5px;
    margin-right:10px;
`;

export const WrapperTitlePicker = styled.View`
    margin-top:15px;
    width:100%;
    padding:0 20px;
`;

export const TitlePicker = styled.Text`
    color:#13A078;
    font-size:17px;
    font-weight:bold;
`;

export const WrapperPicker = styled.View`
    border-color:#2C02A4;
    border-width:2px;
    border-top-left-radius:20px;
    border-bottom-right-radius:20px;
    width:90%;
    align-items:center;
    justify-content:center;
    margin-top:10px;
`;

export const WrapperLogo = styled.View`
    width:100%;
    height:150px;
    margin-top:30px;
    align-items:center;
`

export const ImgLogo = styled.Image`
    width:150px;
    height:150px;
`;