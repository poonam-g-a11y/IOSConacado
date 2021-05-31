import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, AsyncStorage,Alert} from 'react-native'
// import { Icon } from 'native-base'
import Icon from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select';
import {light_black} from './common/Colors'
import {enter_details,enter_doc_type,doc_name} from './common/Constant'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const image = require('../android/app/src/main/assests/images/bg_dashboard.png')
export default class LoginScreen extends React.Component {
    constructor(props){
       super(props);
       this.state ={
           nombre :'hchh'
       }
    }
    login() {
        console.log('jj', this.state)
        fetch('http://li1761-109.members.linode.com:8090/api/wallet/pre-register',
        {
            method: 'POST',
            headers: 
            {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
            {
                documentNo: "1234512345",
                documentType: "CEDULA"
            })

        }).then((response) => response.json()).then((responseJsonFromServer) =>
        {
          console.log(responseJsonFromServer,);
          console.log(JSON.stringify(responseJsonFromServer));

          if (responseJsonFromServer.status === 500){
            this.props.navigation.navigate('OTP')

            // AsyncStorage.setItem('user', JSON.stringify(responseJsonFromServer), () => {
                  
                    
            // });
            // await AsyncStorage.setItem('user', JSON.stringify(responseJsonFromServer));
            // this.props.navigation.navigate('Drawer')
            // this.props.navigation.navigate('Logged')

          } else {
            this.props.navigation.navigate('OTP')
          }
        }).catch((error) =>

        {
            console.error(error);   
        });


    }

    
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={{height:scale(190),marginTop:scale(20)}}>
                    <View style={{ flexDirection: 'row', marginTop: scale(10), }}>
                        <TouchableOpacity style={{ paddingLeft: scale(10), width: '10%' }}
                            onPress={() => this.props.navigation.goBack()}>
                            <Icon name="left" size={scale(20)} style={{ color: '#fff', paddingTop: 5, fontWeight: 'bold',  }} />
                        </TouchableOpacity>
                        <View style={{ alignSelf: 'center',width:'80%' }}>
                            <Text style={[styles.label,{fontSize:moderateScale(18),fontFamily:'VAGRoundedLTPro-Black',fontWeight:'normal',justifyContent:'center'}]}>{enter_details}</Text>
                        </View>
                    </View>
                    <View style={{ marginTop: 80 }}>
                    <Text style={[styles.label, { fontSize:scale(16), fontFamily:'VAGRoundedLTPro-Black',fontWeight:'normal',marginEnd:scale(20),marginLeft:scale(20),marginStart:scale(20), marginBottom:scale(10),alignSelf:'center'}]}>Por favor seleccione el tipo de documento el numero de documento</Text>
                    </View>
                    </View>
                </ImageBackground>
                <View style={{ justifyContent: 'center', margin: scale(40) }}>
                    <ScrollView keyboardShouldPersistTaps="handled">
                        <KeyboardAvoidingView enabled>
                            <View style={styles.inputContainer}>
                                <Text style ={styles.labeltext}>{enter_doc_type}:</Text>
                                <RNPickerSelect
                                    onValueChange={(label) =>  console.log(label)}
                                    value ={this.state.nombre}
                                    // pickerProps={{
                                    //     accessibilityLabel:  ,
                                    // }}
                                    style={{marginTop:scale(10)}}
                                    items={[
                                        { label: 'Passport', value: 'Passport' },
                                        { label: 'Cedula', value: 'Cedula' },
                                        // { label: 'Hockey', value: 'hockey' },
                                    ]}
                                />
                                {/* <View style={{ borderWidth: 1,borderColor:'#333333' }} /> */}
                                <View style={{ borderWidth: 0.33,borderColor:'#333333' }} />
                                <View style={{ marginTop: scale(20) }}>
                                    <Text style={styles.labeltext}>{doc_name}</Text>
                                    <TextInput
                                    style={styles.TextInput}
                                    placeholder={'Número del Documento'}
                                    />
                                    <View style={{ borderWidth: 0.33,borderColor:'#333333' }} />
                                </View>
                                <View style={{marginTop:scale(90)}}>
                                    <TouchableOpacity 
                                    //  onPress={()=>this.login()}
                                    onPress={() => this.props.navigation.navigate('OTP')}
                                        style={{ height: scale(50), width: scale(230), alignSelf: 'center', backgroundColor:'#669E08' , borderWidth: 1, borderRadius: scale(50), marginTop: 30, borderColor: '#fff' }} >
                                        <Text style={{ alignSelf: 'center', fontSize: scale(18), color: '#fff', marginTop: scale(15) , fontFamily:'VAGRoundedLTPro-Black',fontWeight:'bold'}}>Enviar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    image: {
        height: scale(190),
        paddingTop:scale(10)
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        // fontFamily:'poppins_medium',
        fontFamily:'VAGRoundedLTPro-Black',
    },
    labeltext:{
        color:'#888686',
        fontSize:scale(15),
        // fontFamily:'poppins_bold',
        fontWeight:'bold',
        fontFamily:'VAGRoundedLTPro-Black',
    },
    TextInput :{
    fontSize:scale(15),
    marginTop:scale(10)
    },
    inputContainer: {
        marginTop : scale(70)
    }

});