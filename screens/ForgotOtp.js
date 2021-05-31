import React from 'react'
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView, TextInput, KeyboardAvoidingView, Image } from 'react-native'
// import LinearGradient from 'react-native-linear-gradient';
// import { Icon } from 'native-base'
import {Icon } from 'react-native-vector-icons/AntDesign'
import Customkeyboard from './common/Customkeyboard'
import {
    please_enter_the_otp,
    please_wait_for_60s_to_resend_otp,
    Resend_OTP
} from './common/Constant'
import { gray } from './common/Colors'

export default class Initialpage extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <LinearGradient colors={['#d3d8e0', '#C3FFFFFF',]} style={styles.linearGradient}> */}
                    <View style={{ height: '70%' }}>
                        <View style={styles.headcontainer}>
                            <Text style={styles.label}>{please_enter_the_otp}</Text>
                            {/* <Image style={{ height:5,width:5}} source={require('../android/app/src/main/assests/images/republic_digital.jpg')} /> */}
                            <TouchableOpacity style={{ paddingLeft: 20, width: '10%' }}
                                onPress={() => this.props.navigation.goBack()}>
                                <Icon name="down" size={70} style={{ color: '#000', paddingTop: 5, fontWeight: 'bold' }} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-evenly', marginTop: 20 }}>
                            <View style={styles.otpview} />
                            <View style={[styles.otpview, { marginLeft: 10 }]} />
                            <View style={[styles.otpview, { marginLeft: 10 }]} />
                            <View style={[styles.otpview, { marginLeft: 10 }]} />
                        </View>
                        <View style={{ justifyContent: 'center', marginTop: 30 }}>
                            <Text style={{ alignSelf: 'center' }}>{please_wait_for_60s_to_resend_otp}</Text>
                        </View>

                        <View style={{ justifyContent: 'center', marginTop: 30 }}>
                            <Text style={{ alignSelf: 'center' }}>{Resend_OTP}</Text>
                        </View>
                    </View>
                    <View>
                        <Customkeyboard style={{ width: '100%' }} />
                    </View>
                {/* </LinearGradient> */}
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: '100%'
    },
    image: {
        height: 200
    },
    headcontainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        // height:'20%',
        marginTop: 10
    },
    label: {
        color: gray,
        fontSize: 14,
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
    linearGradient: {
        flex: 1,
        // justifyContent:'center',
        paddingLeft: 15,
        paddingRight: 15,
        // borderRadius: 5
    },

    otpview: {
        borderWidth: 1,
        height: 10,
        width: 25,
        borderColor: gray,
        backgroundColor: gray,
        justifyContent: 'space-evenly'

    }
});