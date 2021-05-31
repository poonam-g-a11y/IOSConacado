// import React from 'react'
// import {View, Text, ImageBackground} from 'react-native'

// export default class Initialpage extends React.Component{
//     render(){
//         return(
//             <View>
//                 {/* <ImageBackground> */}
//                 <Text>
//                   JHKJHK  
//                 </Text>
//                 {/* </ImageBackground> */}
//             </View>
//         )
//     }
// }

import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, } from 'react-native'
// import { Icon } from 'native-base'
import {Icon} from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select';
import { light_black } from './common/Colors'
import {
    vinculacion_de_su_cuenta,
    hemos_enviado_una_otp,
    Resend_OTP,
    ingresa_un_pin_de,
    pin,
    confirma_tu_pin,
    
} from './common/Constant'
import Customkeyboard from './common/Customkeyboard'
import Codeinput from './common/Codeinput'

const image = require('../android/app/src/main/assests/images/bg_dashboard.png')
 class SetCodePin extends React.Component {
    // static navigationOptions = {
    //     : 'Great',
    // };

    constructor(props){
        super(props);
        this.state ={
          onPress0 : '',
          onPress1:'',
          onPress2 : '',
          onPress3:'',
          onPress4:'',
          onPress5:'',
          onPress6:'',
          onPress7:'',
          onPress8:'',
          onPress9: '',
    
        }
      }
        onPress1 = () => {
        //   insertText(this.props.tag, '1');
          this.setState({onPress1 :'1'})
    
          this.props.navigation.navigate('Home')
        }
      
        onPress2 = () => {
        //   insertText(this.props.tag, '2');
        this.setState({onPress2 :'2'})
        }
      
        onPress3 = () => {
        //   insertText(this.props.tag, '3');
        this.setState({onPress3 :'3'})
        }
        
        onPress4 = () => {
        //   insertText(this.props.tag, '4');
        this.setState({onPress4 :'4'})
        }
      
        onPress5 = () => {
        //   insertText(this.props.tag, '5');
        this.setState({onPress5 :'5'})
        }
        
        onPress6 = () => {
        //   insertText(this.props.tag, '6');
        this.setState({onPress6 :'6'})
        }
      
        onPress7 = () => {
        //   insertText(this.props.tag, '7');
        this.setState({onPress7 :'7'})
        }
      
        onPress8 = () => {
        //   insertText(this.props.tag, '8');
        this.setState({onPress8 :'8'})
        }
      
        onPress9 = () => {
        //   insertText(this.props.tag, '9');
        this.setState({onPress9 :'9'})
        }
        
        onPressBackSpace = () => {
        //   backSpace(this.props.tag);
        }
        
        onPress0= () => {
        //   insertText(this.props.tag, '0');
        this.setState({onPress0 :'0'})
        }
        
        onPressHideKeyboard = () => {
          hideKeyboard(this.props.tag);
        }


        rendercustomkeyboard(){
            return (
                <View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress1} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        1
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress2} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        2
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress3} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        3
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress4} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        4
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress5} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        5
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress6} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        6
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexDirection: "row"}}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress7} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        7
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress8} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        8
                      </Text>
                    </TouchableOpacity>
                  </View>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPress9} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        9
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* <View style={{flexDirection: "row"}}>
                  <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPressBackSpace}>
                      <Text style={styles.buttonLabel}>
                        &larr;
                      </Text>
                    </TouchableOpacity>
                  </View> */}
                  <View style={[styles.button,{alignSelf:'center'}]}>
                    <TouchableOpacity onPress={this.onPress0} style={{backgroundColor:'#AD738993'}}>
                      <Text style={styles.buttonLabel}>
                        0
                      </Text>
                    </TouchableOpacity>
                  </View>
                  {/* <View style={styles.button}>
                    <TouchableOpacity onPress={this.onPressHideKeyboard}>
                      <Text style={styles.buttonLabel}>
                        &crarr;
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View> */}
              </View> 
            )
        
            
        }
        
        
    render() {
        return (
            // <View>
            //     {this.rendercustomkeyboard}
            // </View>
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={{ height: 190 }}>
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <TouchableOpacity style={{ paddingLeft: 20, width: '10%' }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Icon name="left" size={40} style={{ color: '#fff', paddingTop: 5, fontWeight: 'bold' }} />
                            </TouchableOpacity>
                            <View style={{ alignSelf: 'center', width: '80%' }}>
                                <Text style={[styles.label, { fontSize: 18 }]}>
                                    {vinculacion_de_su_cuenta}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 80 }}>
                            <Text style={[styles.label, { fontSize: 16, marginLeft:20 ,marginBottom:10,marginEnd:10}]}>{ingresa_un_pin_de}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ justifyContent: 'center', }}>

                <View style ={{marginTop:20 ,alignSelf:'center'}}>
                <Text style={{color:'#7FB50A',fontSize:14,fontWeight:'bold'}}>{pin} :</Text>
                </View>
                    
                <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                </View >
                <View style ={{marginTop:20 ,alignSelf:'center'}}>
                <Text style={{color:'#7FB50A',fontSize:14,fontWeight:'bold'}}>{confirma_tu_pin} :</Text>
                </View>
                <View style={{ alignSelf: 'center', flexDirection: 'row', marginTop: 20 }}>
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                    <Codeinput />
                </View >
                <View style={{ marginTop: 130}}>
                    {/* <Customkeyboard /> */}
                    {/* {this.rendercustomkeyboard()} */}
                </View>
                 </View>
            </View>
        )
    }
   
}
export default SetCodePin

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: 200
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        fontFamily: 'poppins_medium',
    },
    labeltext: {
        color: '#888686',
        fontSize: 15,
        fontFamily: 'poppins_bold',
        fontWeight: 'bold'
    },
    TextInput: {

    },
    input: {
        backgroundColor: "#9fabaa",
        borderWidth: 1,
        borderColor: "grey",
        width: 270,
        fontSize: 19,
  
      },
      buttonLabel: {
        borderWidth: 0.5,
        borderColor: "#d6d7da",
        padding: 10,
        textAlign: "center",
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 13,
        paddingBottom: 13,
        fontSize: 20,
      },
      button: {
        width: "33.333333333%",
        // backgroundColor:'#9fabaa',
        padding:3
      },


});