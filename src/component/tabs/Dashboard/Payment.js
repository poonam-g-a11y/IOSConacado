import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content, Button ,Header,Left} from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import {CustomHeader} from '../../CustomHeader'

export class FeedDetail extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        {/* <CustomHeader title="Feed Detail" navigation={this.props.navigation}/> */}
        <Header style={{backgroundColor:'#669E08',height:45}}>
          <Left>
          <Button transparent onPress={() => this.props.navigation.openDrawer()}>
              {/* <Icon name='left' style ={{color:'#ffff'}}/> */}
              <Icon name="left" size={20} style={{ color: '#fff',    }} />
            </Button>  
          </Left>
          </Header>
        <Content>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text>Feed Detail Screen</Text>
          </View>
        </Content>      
        </View>
      );
    }
  }
