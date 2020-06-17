import styled from 'styled-components/native';

export const Container = styled.View``;

export const Wrapper = styled.View`
    padding-left:20px;
`;

export const TitleContainer = styled.Text`
    color:#0E8B68;
    font-weight:bold;
    font-size:18px;
`;

export const OptionsTeam = styled.ScrollView.attrs(() => ({
    horizontal: true,
    showsHorizontalScrollIndicator:false,
}))`
    margin-top:15px;
`;

export const Option = styled.View`
    align-items:center;
    margin-right:20px;
`;


export const WrapperImg = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    width:120px;
    height:100px;
    border-color:#2C02A4;
    border-width: 2.5px;
    border-top-right-radius:30px;
    border-bottom-left-radius:30px;
`;

export const Img = styled.Image`
    width:80px;
    height:80px;
`;

export const Label = styled.Text`
    color:#2C02A4;
    font-size:16px;
    font-weight:bold;
    margin-top:5px;
`;