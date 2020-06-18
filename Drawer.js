import React from 'react';

import {Entypo, MaterialIcons, Fontisto, MaterialCommunityIcons} from '@expo/vector-icons';

import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import InitialScreen from './src/screens/Main/index.js';
import BestsOfTheWorldScreen from './src/screens/BestsOfTheWorld/index.js';
import MajorLeaguesScreen from './src/screens/MajorLeagues/index.js'
import BrazilianChampioship from './src/screens/BrazilianChampionship/index.js'
import ProfileScreen from './src/screens/Profile/index.js';
import SettingScreen from './src/screens/Setting/index.js';


import CustomDrawer from './src/components/customDrawer/index.js';

const Routes = createAppContainer(
    createDrawerNavigator({
        InitialScreen:{
            screen: InitialScreen,
            navigationOptions:{
                title: 'Início',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <Entypo name="home" size={22} color={tintColor} />,
            },
        },
        BestsOfTheWorldScreen:{
            screen: BestsOfTheWorldScreen,
            navigationOptions:{
                title: 'Melhores do Mundo',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <Fontisto name="earth" size={22} color={tintColor} />,
            },
        },
        MajorLeaguesScreen:{
            screen: MajorLeaguesScreen,
            navigationOptions:{
                title: 'Principais Ligas',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <MaterialCommunityIcons name="podium" size={22} color={tintColor} />,
            },
        },
        BrazilianChampioship:{
            screen: BrazilianChampioship,
            navigationOptions:{
                title: 'Campeonato Brasileiro',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <Entypo name="trophy" size={22} color={tintColor} />,
            },
        },
        ProfileScreen:{
            screen: ProfileScreen,
            navigationOptions:{
                title: 'Perfil',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <MaterialIcons name="person" size={22} color={tintColor} />,
            },
        },
        SettingScreen:{
            screen: SettingScreen,
            navigationOptions:{
                title: 'Configurações',
                tintColor: '#fff',
                drawerIcon: ({tintColor}) => <MaterialIcons name="settings" size={22} color={tintColor} />,
            },
        },
    },{
        initialRouteName: 'MajorLeaguesScreen',
        contentComponent: CustomDrawer,
        contentOptions:{
            activeTintColor :'#2C02A4',
            inactiveTintColor: '#fff',

            activeBackgroundColor: '#fff',
        }
    })
)

export default Routes;