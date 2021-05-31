import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Button, Icon, Title, Text, View } from 'native-base'
import { Image} from 'react-native'

export class CustomHeader extends Component {
  render() {
      let {title, isHome} = this.props
    return (
      <View>
        <Header style={{backgroundColor:'#669E08'}}>
          <Left>
          {/* { */}
            {/* isHome?  */}
            <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              <Icon name='menu' style ={{color:'#ffff'}}/>
              {/* <Image
            source={require('../assets/fonts/image/menu-web.png')} 
              resizeMode="contain"
              style={{width: 20, height: 20}}
            /> */}
              
            </Button>
            {/* // :
            // <Button transparent onPress={() => this.props.navigation.goBack()}>
            //   <Icon name='arrow-back' />
            //   <Text>Back</Text>
            // </Button> */}
          {/* } */}
          </Left>
          <Body>
            <Title style ={{color:'#ffffff'}}>{title}</Title>
          </Body>
          <Right>
            {/* <Button transparent>
              <Text>Cancel</Text>
            </Button> */}
          </Right>
          {/* </View> */}
        </Header>
        </View>
      
    );
  }
}