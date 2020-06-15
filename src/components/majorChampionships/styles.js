import styled from 'styled-components/native';

export const Container = styled.View`
    align-items:center;
`;

export const Wrapper = styled.View`
    width:90%;
    margin-top:40px;
`;

export const Header = styled.View`
    flex-direction:row;
    justify-content:space-between;
    align-items:center;
`;

export const Title = styled.Text`
    color:#0E8B68;
    font-weight:bold;
    font-size:18px;
`;

export const ButtonViewMore = styled.TouchableOpacity``;

export const TitleButtonViewMore = styled.Text`
    color:#2C02A4;
    font-size:16px;
    font-weight:bold;
`;

export const FirstRowItems = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:20px;
`;

export const SecondRowItems = styled.View`
    flex-direction:row;
    justify-content:space-between;
    margin-top:20px;
`;

export const Option = styled.TouchableOpacity`
    width:155px;
    height:120px;
`;

export const Img = styled.Image`
    width:100%
    height:100px;
    border-top-right-radius:5px;
    border-top-left-radius:5px;
`;

export const BlockLabel = styled.View`
    background-color:#2C02A4;
    align-items:center;
    justify-content:center;
    height:20px;
    margin-top:-2px;
    
    border-bottom-right-radius:5px;
    border-bottom-left-radius:5px;
`;

export const Label = styled.Text`
    color:#fff;
    font-weight:bold;
`;