import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, } from 'react-native'
// import { Icon } from 'native-base'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/AntDesign'
import RNPickerSelect from 'react-native-picker-select';
import { light_black } from './common/Colors'
import {
    verify_otp,
    confirma_tus_datos_y_verifica_otp,
    Otp_sent,

} from './common/Constant'

const image = require('../android/app/src/main/assests/images/bg_dashboard.png')
export default class VerifyOtp extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={image} style={styles.image}>
                    <View style={{ height: scale(190) ,marginTop:scale(20)}}>
                        <View style={{ flexDirection: 'row', marginTop:scale(10) }}>
                            <TouchableOpacity style={{ paddingLeft: scale(20), width: '10%' }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Icon name="left" size={scale(20)} style={{ color: '#fff', paddingTop: 5, fontWeight: 'bold' }} />
                            </TouchableOpacity>
                            <View style={{ alignSelf: 'center', width: '80%' }}>
                                <Text style={[styles.label, { fontSize: moderateScale(18) }]}>
                                    {verify_otp}
                                </Text>
                            </View>
                        </View>
                        <View style={{ marginTop: scale(90) }}>
                            <Text style={[styles.label, { fontSize: scale(16), }]}>{confirma_tus_datos_y_verifica_otp}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={{ justifyContent: 'center', margin: scale(40) }}>
                    <View style={{marginTop:scale(20)}}>
                        <Text style={{color:'#666666',     fontFamily:'VAGRoundedLTPro-Black',fontSize:scale(17)}}>{Otp_sent}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: scale(20) }}>
                        <Text style={{ color: '#666666', fontSize: scale(14),      fontFamily:'VAGRoundedLTPro-Black',}}>Correo :</Text>
                        <Text></Text>
                    </View>
                    <View style={{ marginTop: scale(10) }}>
                        <Text style={{ color: '#666666', fontSize: scale(14),      fontFamily:'VAGRoundedLTPro-Black', }}>Número de móvil : </Text>
                        <Text></Text>
                    </View>

                </View>
                <View style={{ marginTop: scale(90) }}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Verify')}
                        style={{ height: scale(50), width: scale(230), alignSelf: 'center', backgroundColor:'#669E08' , borderWidth: 1, borderRadius: scale(50), marginTop: scale(30), borderColor: '#fff' }} >
                                        <Text style={{ alignSelf: 'center', fontSize: scale(16), color: '#fff', marginTop: scale(15) , fontFamily:'VAGRoundedLTPro-Black',fontWeight:'bold'}}>{verify_otp}</Text>

                    </TouchableOpacity>
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
        height: 200
    },
    label: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        // fontFamily: 'poppins_medium',
        fontFamily:'VAGRoundedLTPro-Black',
    },
    labeltext: {
        color: '#888686',
        fontSize: 15,
        // fontFamily: 'poppins_bold',
        fontWeight: 'bold',
        fontFamily:'VAGRoundedLTPro-Black',
    },
    TextInput: {

    }

});