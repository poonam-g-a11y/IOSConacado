import React, {Component} from 'react'
import { View ,StyleSheet,Image ,TextInput,TouchableOpacity } from 'react-native'
import {Text, Content } from 'native-base'
import {CustomHeader} from '../../CustomHeader'
import {link_bank_account,Money_will_added_to_bank_account,Add_amount_to_account
    ,Money_will_added_to_Conacado_Walle} from '../../../../screens/common/Constant'


export class Miscuentas extends Component {
    render() {
      return (
        <View style={{ flex: 1}}>
        <CustomHeader title="Miscuentas" navigation={this.props.navigation}/>
         <Content>
          {/* <View style={{justifyContent: 'center', alignItems: 'center',marginTop:20}}>
          <Text style={{color:'#000',fontSize:18}}>{link_bank_account}</Text>
          </View> */}
          <View>
            <View style={styles.subview}>
              <View style ={{flexDirection:'row',margin:10}}>
              <Image
                    style={{height: 25, width: 25}}
                    source={require('../../../assets/fonts/image/wallet_image.png')}
                  />
                <Text style={styles.textlabel}>
                  saldo de billetra
                </Text>
               
              </View>
              <View style={styles.subview}>
                <Text style ={{fontSize:20,fontWeight:'400',color:'#000',fontFamily :'poppins_bold',marginTop:50}}>{Money_will_added_to_Conacado_Walle}</Text>
                {/* <Text>{Add_amount_to_account}</Text> */}
              </View>
              <View style={styles.subview}>
                <Text style ={{fontSize:15,color:'#000',fontFamily :'poppins_bold',marginTop:20}}>{Add_amount_to_account}</Text>
                {/* <Text>{Add_amount_to_account}</Text> */}
                <View style={{flexDirection:'row'}}>
                  <Text style={{marginTop:13}}>RD$</Text>
                  <TextInput 
                  placeholder={'Ingrese el monto'}

                  />
                  
                </View>
                <View style={{borderBottomWidth:1}} />
              </View>
              
            </View>
            <TouchableOpacity 
                        style={{ height: 50, width: 230, alignSelf: 'center', backgroundColor:'#669E08' , borderWidth: 1, borderRadius: 50, marginTop: 30, borderColor: '#fff' }} >
                                        <Text style={{ alignSelf: 'center', fontSize: 16, color: '#fff', marginTop: 10 , fontFamily:'poppins_medium',fontWeight:'bold'}}>Continuar</Text>

                    </TouchableOpacity>
          </View>
        </Content> 
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
   conatainer:{
     flex:1,
     margin:20
   },
   subview:{
    margin:10,
    // marginTop:40
    marginTop:30
   },
    textlabel:{
    marginLeft:10,
    color:'#000',
    fontWeight:'400',
    fontSize:15,
    fontFamily:'poppins_bold'
    }

  })