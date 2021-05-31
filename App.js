import React from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import 'react-native-gesture-handler';
import Initialpage from './screens/Initalpage'
import Routes from './Routes/Routes'
import { NavigationContainer } from '@react-navigation/native';
import SwipeModal from './screens/common/SwipeModal'

export default class App extends React.Component {
    render() {
        return (
             
            <Routes />
            //  <SwipeModal />


        )
    }
}