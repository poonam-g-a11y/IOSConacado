
import React  from 'react'
import { Dimensions, Image, Settings } from 'react-native'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack'
import {
  Feed, FeedDetail, Search, SearchDetail, Discover, 
  DiscoverDetail, Profile, Register, Login, Setting, SideMenu,Miscuentas} from '../src/component'
  // import {
  //   LoginScreen,HomeScreen,CodeLogin,Verification,VerifyOtp,Splashscreen,SetCodePin,NewOne,ForgotOtp,Initialpage
  // } from '../screens'
 
import LoginScreen from '../screens/Loginscreen';
import HomeScreen from '../screens/Homescreen';
import Initialpage from '../screens/Initalpage'
import NewOne from '../screens/NewOne'
import VerifyOtp from '../screens/VerifyOtp'
import Verification from '../screens/Verification'
import SetCodePin from '../screens/SetCodePin'
import CodeLogin from '../screens/CodeLogin'
import ForgotOtp from '../screens/ForgotOtp'
import Splashscreen from '../screens/Splashscreen'
import ScanQR from '../src/component/tabs/Dashboard/ScanQR'
import Completed from '../src/component/tabs/Dashboard/Completed'
import Transfer from '../src/component/tabs/Dashboard/Transfer'


import { Icon } from 'native-base';
import { Home } from '../screens/common/Constant'
  

const navOptionHandler = (navigation) => ({
    header: null
    // gesturesEnabled: false
})

  const FeedStack = createStackNavigator({
    Feed: {
      screen: Feed,
      navigationOptions: navOptionHandler
    },
    FeedDetail: {
      screen: FeedDetail,
      navigationOptions: navOptionHandler
    }
  });
  
  const SearchStack = createStackNavigator({
    Search: {
      screen: Search,
      navigationOptions: navOptionHandler
    },
    SearchDetail: {
      screen: SearchDetail,
      navigationOptions: navOptionHandler
    }
  });
  
  const DiscoverStack = createStackNavigator({
    Discover: {
      screen: Discover,
      navigationOptions: navOptionHandler
    },
    DiscoverDetail: {
      screen: DiscoverDetail,
      navigationOptions: navOptionHandler
    }
  });

  const MainTabs = createBottomTabNavigator({
    Hogar: {
      screen: Feed,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Image
           source={require('../src/assets/fonts/image/home_gray.png')} 
            resizeMode="contain"
            style={{width: 20, height: 20}}
          />
        )
      }
    },
    Transacciones: {
      screen: Setting,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={require('../src/assets/fonts/image/transaction_gray.png')} 
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
        )
      }
    },
    Miscuentas: {
      screen: Miscuentas,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={require('../src/assets/fonts/image/bank.png')} 
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
        )
      }
    },
    Perfil: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Image
            source={require('../src/assets/fonts/image/profile_gray.png')} 
              resizeMode="contain"
              style={{width: 20, height: 20}}
            />
        )
      }
    },
    // Cerrarsession: {
    //   screen: Profile,
    //   navigationOptions: {
    //     tabBarIcon: ({ tintColor }) => (
    //       <Image
    //       source={require('../android/app/src/main/assests/images/republic_digital.jpg')} 
    //         resizeMode="contain"
    //         style={{width: 20, height: 20}}
    //     />
    //     )
    //   }
    // }
  });

  const authStack = createStackNavigator({
      Login: {
          screen: Initialpage,
          navigationOptions: navOptionHandler
      },

      LoginScreen: {
        screen: LoginScreen,
        navigationOptions: navOptionHandler
    },
      Register: {
          screen: Register,
          navigationOptions: navOptionHandler
      },
      Initialpage: {
              screen: Initialpage,
              navigationOptions: navOptionHandler
            },
            OTP: {
              screen: VerifyOtp,
              navigationOptions: navOptionHandler
            },
            
            Verify: {
              screen: Verification,
              navigationOptions: navOptionHandler
            },
            SetCodePin:{
              screen:SetCodePin,
              navigationOptions: navOptionHandler
            },
        
            Logged:{
              screen:CodeLogin,
              navigationOptions: navOptionHandler
            },
            Forgot:{
              screen:ForgotOtp,
              navigationOptions: navOptionHandler
            },
            Splashscreen:{
              screen:Splashscreen,
              navigationOptions: navOptionHandler
            },
            
  })

  const MainStack = createStackNavigator({
    Home: {
        screen: MainTabs,
        navigationOptions: navOptionHandler
    },
    Setting: {
        screen: Setting,
        navigationOptions: navOptionHandler
      },
    Profile: {
        screen: Profile,
        navigationOptions: navOptionHandler
      }
  },
  {
    initialRouteName: 'Home'
  });
  
  const appDrawer = createDrawerNavigator(
    {
        drawer: MainStack
    },
    {
        contentComponent: SideMenu,
        drawerWidth: (Dimensions.get('window').width) * 3/4
    });

    const app = createSwitchNavigator(
    {
        app: appDrawer,
        auth: authStack
    }, 
    {
        initialRouteName: 'auth'
    })
    export  const AppNavigator = createAppContainer(app);

    export default class Routes extends React.Component {
      render() {
     
        return (
            <AppNavigator/>
        )
      }
    }

