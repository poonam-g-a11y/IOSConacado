import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, Modal, ScrollView, TextInput, KeyboardAvoidingView, } from 'react-native'
// import { Icon } from 'native-base'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select';
import { light_black } from './common/Colors'
import {
    vinculacion_de_su_cuenta,
    hemos_enviado_una_otp,
    Resend_OTP,

} from './common/Constant'
import Customkeyboard from './common/Customkeyboard'
import Codeinput from './common/Codeinput'

const image = require('../android/app/src/main/assests/images/bg_dashboard.png')
export default class VerifyOtp extends React.Component {
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

      this.props.navigation.navigate('SetCodePin')
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
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                </ImageBackground>
                    
            </View>
        )
    }

    rendercustomkeyboard(){
        return (
            <View style={{alignItems:'flex-end',marginTop:scale(100)}}>
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
                <TouchableOpacity onPress={this.onPress5} style={{backgroundColor:'#c2b2b0'}}>
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
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height:'100%',
        // alignItems:'flex-end',
        // justifyContent: 'center'
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
    // container: {
    //     flex: 1,
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     // backgroundColor: '#F5FCFF',
    //   },
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