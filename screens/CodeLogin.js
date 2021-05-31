import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity,Image,Dimensions, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView,Modal } from 'react-native'
import {
    hola,
    enter_your_pin,
    forgot_pin,
} from './common/Constant'
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
const windowHeight = Dimensions.get('window').height;
import Codeinput from './common/Codeinput'
import Customkeyboard from './common/Customkeyboard'

const image = require('../android/app/src/main/assests/images/bg_login.png')
export default class CodeLogin extends React.Component {
   
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
    render(){
        return(
            <View style={styles.container}>
                <ImageBackground  source={image} style={styles.image}>
                  <View style={{justifyContent:'center',marginTop:scale(20)}}>
                  <View style={{ flexDirection: 'row', padding: 20, alignSelf:'center',marginTop:scale(10) }}>
                 <Image style={{ height:50,width:70}} source={require('../android/app/src/main/assests/images/dominican_republic.jpg')} />

              <Image style={{ marginLeft: scale(20)  ,height:scale(43),width:scale(90)}} source={require('../android/app/src/main/assests/images/republic_digital.jpg')} />
               </View>  
                 <Text style={styles.label}>{hola}</Text> 

                 <Text style={[styles.label,{fontSize:moderateScale(14)}]}>{enter_your_pin}</Text> 
                  </View>
                  <View style={{justifyContent:'center',flexDirection:'row',marginTop:scale(20)}}>
                    {/* <Codeinput style={{color:'#fff'}} /> */}
                    <View style={styles.view}></View>
                    <View style={styles.view}></View>
                    <View style={styles.view}></View>
                    <View style={styles.view}></View> 
                    <View style={styles.view}></View>
                  </View>
                  <View style= {{marginTop:30,justifyContent:'center'}}>
                  <Text style={styles.label}>{forgot_pin}</Text> 

            <Image  style = {{height:200,width:200 ,alignSelf:'center',opacity:0.4,marginTop:scale(20)}} source={require('../android/app/src/main/assests/images/conacado_logo.png')} />
            </View>
            <View style={{position: 'absolute', top: windowHeight - 250,right:0,left:0}}>
          {this.rendercustomkeyboard()}
        </View>
                 
                
                </ImageBackground>
            </View>
        )
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
    
}




const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: '100%',
        width :'100%'
    },
    label: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        alignSelf: 'center',
        // fontFamily: 'poppins_medium',
    },
    labeltext: {
        color: '#888686',
        fontSize: 15,
        // fontFamily: 'poppins_bold',
        fontWeight: 'bold'
    },
    TextInput: {

    },

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
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
      view: {
        width: 35,
        height: 35,
        marginLeft: 5,
        marginRight: 5,
        borderWidth:1,
        borderColor: '#ffff',
        borderRadius: 25,
        alignItems: 'center',
        position: 'relative'
      },

});