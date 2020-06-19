import styled from 'styled-components/native';

export const Container = styled.SafeAreaView``;

export const Wrapper = styled.ScrollView``;

export const Header = styled.View`
    flex-direction:row;
    align-items:center;
    justify-content:space-between;
    padding: 0 15px;
    margin-top:30px;
`;

export const TitleBrazilianChampioship = styled.Text`
    color:#2C02A4;
    font-weight:bold;
    font-size:20px;
`;

export const ButtonOpenDrawer = styled.TouchableOpacity``;

export const CurrentTeams = styled.ScrollView.attrs(() => ({
    horizontal:true,
    showsHorizontalScrollIndicator: false,
}))`
    padding:0 15px;
    margin-top:20px;
    margin-right:15px;
`;

export const TitleCurrentTeams = styled.Text`
    color:#13A078;
    font-weight:bold;
    font-size:18px;
    margin-left:15px;
    margin-top:20px;
`;

export const OptionsCurrentTeams = styled.TouchableOpacity`
    align-items:center;
    justify-content:center;
    margin-right:20px;
    width:100px;
    height:120px;
    border-color:#2C02A4;
    border-width:2.5px;
    border-top-left-radius:25px;
    border-bottom-right-radius:25px;
`

export const ImgCurrentTeams = styled.Image`
    width:55px;
    height:60px;
    margin-top:5px;
`;

export const LabelCurrentTeams = styled.Text`
    font-weight:bold;
    margin-top:7px;
    color:#2C02A4;
`;

export const TitleBiggestWinners = styled.Text`
    color:#13A078;
    font-weight:bold;
    font-size:18px;
    margin-left:15px;
    margin-top:30px;
`;

export const BiggestWinners = styled.View`
    flex-direction:row;
`;

export const LeftColumn = styled.View`
    
    width:50%;
    align-items:center;
    margin-bottom:100px;
`;

export const OptionLeftColumn = styled.TouchableOpacity`
    width:80%;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    border-color:#2C02A4;
    border-width:2.5px;
    border-radius:10px;
    margin-top:50px;
`

export const LabelOptionLeftColumn = styled.Text`
    font-weight:bold;
    font-size:16px;
    margin-top:5px;
    color:#2C02A4;
`;

export const ImgOptionLeftColumn = styled.Image`
    width:85px;
    height:90px;
    margin-top:5px;
`

export const TitlesOptionLeftColumn = styled.Text`
    background-color:#2C02A4;
    color:#fff;
    font-weight:bold;
    font-size:16px;
    padding:5px; 10px;
    border-radius:7px;
    margin-bottom:10px;
    margin-top:10px;
    width:80%;
    text-align:center;
`

export const RightColumn = styled.View`
    width:50%;
    align-items:center;
    margin-bottom:20px;
    margin-top:100px;
`;

export const OptionRightColumn = styled.TouchableOpacity`
    width:80%;
    align-items:center;
    justify-content:center;
    margin-left:10px;
    border-color:#2C02A4;
    border-width:2.5px;
    border-radius:10px;
    margin-top:50px;
`

export const LabelOptionRightColumn = styled.Text`
    font-weight:bold;
    font-size:16px;
    margin-top:5px;
    color:#2C02A4;
`;

export const ImgOptionRightColumn = styled.Image`
    width:85px;
    height:90px;
    margin-top:5px;
`

export const TitlesOptionRightColumn = styled.Text`
    background-color:#2C02A4;
    color:#fff;
    font-weight:bold;
    font-size:16px;
    padding:5px; 10px;
    border-radius:7px;
    margin-bottom:10px;
    margin-top:10px;
    width:80%;
    text-align:center;
`