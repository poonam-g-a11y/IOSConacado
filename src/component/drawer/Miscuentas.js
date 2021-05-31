import React, {Component} from 'react'
import { View } from 'react-native'
import {Text, Content } from 'native-base'
import {CustomHeader} from '../CustomHeader'
import {link_bank_account} from '../../../screens/common/Constant'

export class Miscuentas extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Miscuentas" navigation={this.props.navigation}/>
         <Content>
          <View style={{justifyContent: 'center', alignItems: 'center',marginTop:20}}>
          <Text style={{color:'#000',fontSize:18}}>{link_bank_account}</Text>
          </View>
        </Content> 
        </View>
      );
    }
  }