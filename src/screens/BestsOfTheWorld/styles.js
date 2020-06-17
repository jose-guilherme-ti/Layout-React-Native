import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`    
    flex-direction:row;
    justify-content:space-between;
    width:90%;
    margin-top:10px;
`;

export const ButtonOpenDrawer = styled.TouchableOpacity``;

export const TitleBestsOfTheWorld = styled.Text`
    color:#2C02A4;
    font-size:20px;
    font-weight:bold;
`;

export const WrapperBigCard = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
}))``;

export const OptionBigCard = styled.View`
    height:445px;
    margin-top:30px;
    margin-right:30px;
    margin-left:30px;
`

export const ImgBigCard = styled.Image`
    width:300px;
    height:400px;
    border-top-left-radius:30px;
`;

export const ButtonViewMore = styled.TouchableOpacity`
    background-color:#2C02A4;
    align-items:center;
    justify-content:center;
    height:45px;
    border-bottom-right-radius:30px;
`;

export const TitleButtonViewMore = styled.Text`
    color:#fff;
    font-weight:bold;
    font-size:16px;
`;

export const WrapperTitleSmallCards = styled.View`
    width:100%;
    padding-left:15px;
    margin-top:20px;
`

export const TitleSmallCards = styled.Text`
    color:#2C02A4;
    font-size:20px;
    font-weight:bold;  
`

export const WrapperSmallCards = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
}))`
    margin-top:20px;
`;

export const OptionSmallCard = styled.TouchableOpacity`
    align-items:center;
    margin-left:15px;
    margin-right:15px;
`;

export const ImgSmallCard = styled.Image`
    width:110px;
    height:110px;
    border-radius:10px;
`;

export const LabelSmallCard = styled.Text`
    font-weight:bold;
    font-size:15px;
    margin-top:5px; 
`;

