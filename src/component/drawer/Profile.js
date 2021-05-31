import React, {Component} from 'react'
import { View ,StyleSheet,Image} from 'react-native'
import {Text, Content ,Left,Card,CardItem, Row} from 'native-base'
import {CustomHeader} from '../CustomHeader'
import { Money_will_added_to_Conacado_Wallet } from '../../../screens/common/Constant';

export class Profile extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Perfil" navigation={this.props.navigation}/>
         <Content>
           <View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Card style={styles.cardview}>
            <CardItem style={styles.CardItem}>
            <Image
               source={require('../../assets/fonts/image/qr_code.png')}
               resizeMode="contain"
               style={{width: 300, height: 300,alignSelf:'center'}}
                      />
            </CardItem>
          </Card>
          <View style ={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
          <Image
               source={require('../../assets/fonts/image/share.png')}
               resizeMode="contain"
               style={{width: 24, height: 30,alignSelf:'center',}}
                      />
                      <Text style ={{color :'#669E08',fontSize:14,marginLeft:10,marginTop:5,fontFamiy:"VAGRoundedLTPro",fontWeight:'bold'}}>Compartir</Text>
          </View>
          </View>
          </View>
          <View style ={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
            <Text>Correo:</Text>
            <Text>samir</Text>
          </View>
          <View style ={{flexDirection:'row',alignSelf:'center',marginTop:20}}>
            <Text>movil:</Text>
            <Text>7737737</Text>
          </View>
        </Content> 
       
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    cardview: {
      width: 300,
      margin: 10,
      height: 300,
      marginHorizontal: 10,
      alignSelf:'center',
      justifyContent:'center'

    },
    CardItem: {
      // margin:5,
      alignSelf:'center'
    },
  });