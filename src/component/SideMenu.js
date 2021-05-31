import React, {Component} from 'react'
import {Text, View, StyleSheet, SafeAreaView, Image, StatusBar, ScrollView, ImageBackground} from 'react-native'
import {List, ListItem ,Left} from 'native-base'
import {green} from '../../screens/common/Colors'
const image = require('../../android/app/src/main/assests/images/bg_dashboard.png')

export class SideMenu extends Component {
    render() {
      let {container, imageUser} = styles;
      return (
        
        <SafeAreaView style={container}>
          <View style={imageUser}>
            <ImageBackground source={image}  style={imageUser}>
            <Image 
            source={require('../../android/app/src/main/assests/images/conacado_logo.png')} 
            style={{height: 120, width: 120,}}/>
            </ImageBackground>
          </View>
          <ScrollView>
            <List>                   
            <ListItem onPress={() => this.props.navigation.navigate('Feed')}>
            <Image
            source={require('../assets/fonts/image/cocoa.png')} 
              resizeMode="contain"
              style={{width: 25, height: 25,}}
            />
              <Text style={{marginLeft:30}} >Hogar</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Transacciones')}>
            <Image
            source={require('../assets/fonts/image/cocoa.png')} 
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
              <Text style={{marginLeft:30}}>Transacciones</Text>
            </ListItem> 
            <ListItem onPress={() => this.props.navigation.navigate('Miscuentas')}>
            <Image
            source={require('../assets/fonts/image/cocoa.png')} 
              resizeMode="contain"
              style={{width: 25, height: 25 }}
            />
              <Text style={{marginLeft:30}}>Mis cuentas</Text>
            </ListItem> 
            <ListItem onPress={() => this.props.navigation.navigate('Perfil')}>
            <Image
            source={require('../assets/fonts/image/cocoa.png')} 
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
              <Text style={{marginLeft:30}}>Perfil</Text>
            </ListItem>
            <ListItem onPress={() => this.props.navigation.navigate('Profile')}>
            <Image
            source={require('../assets/fonts/image/cocoa.png')} 
              resizeMode="contain"
              style={{width: 25, height: 25}}
            />
              <Text style={{marginLeft:30}}>Cerrar session</Text>
            </ListItem> 
          </List>

          </ScrollView>

            <List>                   
            <ListItem noBorder onPress={() => this.props.navigation.navigate('auth')}>
              <Text>Logout</Text>
            </ListItem> 
          </List>

        </SafeAreaView>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageUser: {
      height: 200, 
      alignItems: 'center', 
      justifyContent: 'center',
      width:'100%'
    }
})