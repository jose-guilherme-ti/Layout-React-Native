import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    align-items:center;
`;

export const Header = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding:0 15px;
    margin-top:20px;
    margin-bottom:10px;
    width:100%;
`;

export const Title =  styled.Text`
    color:#2C02A4;
    font-size:20px;
    font-weight:bold;
`;

export const ButtonOpenDrawer = styled.TouchableOpacity``;

export const Options = styled.TouchableOpacity`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 15px;
    width:95%;
    height:50px;
    margin-top:20px;
    border-bottom-color:#d3d3d3;
    border-bottom-width:2px;
`;

export const TitleOptions = styled.Text`
    font-size:18px;
    font-weight:bold;
`;

export const WrapperImg = styled.View`
    height:150px;
    align-items:center;
    justify-content:center;
    margin-top:200px;
`;

export const Img = styled.Image`
    width:150px;
    height:150px;
`;

