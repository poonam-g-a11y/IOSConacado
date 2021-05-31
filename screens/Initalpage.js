import React from 'react'
import { View, Text, ImageBackground, Image, StatusBar ,Alert,Modal,Pressable,TouchableHighlight} from 'react-native'
import { styles } from '../src/Styles/Initialpage'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { register_as_merchant } from './common/Constant'
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
} from 'react-native-responsive-screen';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


let popup = true
const image = require('../android/app/src/main/assests/images/background_image.jpg')
export default class Initialpage extends React.Component {

  componentWillMount() {
    listenOrientationChange(this);
    console.log(this)
  }

  componentWillUnMount() {
    removeOrientationListener();
  }

  constructor(props) {
    super(props);
    this.state =
    {
      popup: true,
      modalVisible: false
    }
  }

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
    const { modalVisible } = this.state;
    return(
      <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
        this.setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={() => this.setModalVisible(!modalVisible)}
          >
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
    )
  }

  render() {
    const mystyles = styles
    const { modalVisible } = this.state;
    return (
      <View style={mystyles.container} >
        <StatusBar hidden={false} backgroundColor='#669E08'/>

        <ImageBackground source={image} style={mystyles.image}>

          <ScrollView>
            <View style={mystyles.view}>
              <View style={{marginTop:scale(20)}}>
                <Text style={mystyles.label}>Bienvenido a</Text>
              </View>
              <View style={{marginTop:15}}>
                <Text style={mystyles.labeltext}>Conacado</Text>
              </View>
              <View style={{ marginTop: 35 }}>
                <Image style={{ height: scale(130), width: scale(130) }} source={require('../android/app/src/main/assests/images/conacado_logo.png')} />
              </View>
              <View style={{ flexDirection: 'row', padding: 20, marginTop:36 }}>
                <Image style={{ height: scale(50), width: scale(70) }} source={require('../android/app/src/main/assests/images/dominican_republic.jpg')} />

                <Image style={{ marginLeft: 20, height: scale(43), width: scale(90) }} source={require('../android/app/src/main/assests/images/republic_digital.jpg')} />
              </View>

            </View>
            <View>
         
            </View>
            <View style={{ height: heightPercentageToDP('50%') }}>
              <TouchableOpacity
                style={mystyles.Regestrarsecomo}
                // onPress={this.setModalVisible(true)}>
                onPress={() => this.props.navigation.navigate('LoginScreen')}> 

                <Text style={[mystyles.label, { fontSize: scale(16) }]} >
                  {/* Regestrarse como cliente */}
                  Regestrarse como cliente
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[mystyles.Regestrarsecomo, { marginTop: 30 }]}
                onPress={() => this.props.navigation.navigate('LoginScreen')}>
                <Text style={[mystyles.label, { fontSize: scale(16) }]} >
                  
                  {register_as_merchant}
                      </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </ImageBackground>

      </View>

    )
  }
}