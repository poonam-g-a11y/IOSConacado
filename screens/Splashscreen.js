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
import { View, Text, ImageBackground, Image, StatusBar } from 'react-native'
import { styles } from '../src/Styles/Initialpage'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { register_as_merchant } from './common/Constant'
import {
  widthPercentageToDP,
  heightPercentageToDP,
  listenOrientationChange,
  removeOrientationListener
} from 'react-native-responsive-screen';


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
      popup: true
    }
  }

  renderPopup() {
    // this.setState({popup:true})
    if (popup) {
      console.log('JFK')
      return (
        <View style={{ backgroundColor: '#fff', height: '70%', justifyContent: 'center', alignSelf: 'center' }}>
          <Text style={{ color: '#000', fontSize: 16, }}>KH</Text>
          <View>
            <Text style={{ color: '#000', fontSize: 16, }}>KJK</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            {/* <CheckBox /> */}
            <Text style={{ color: '#000', fontSize: 16, }}>;L;L</Text>
          </View>
          <View style={{ alignContent: 'center' }}>
            <TouchableOpacity>
              <Text>Continuar</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
  render() {
    const mystyles = styles
    return (
      <View style={mystyles.container} >
        <StatusBar hidden={true} />

        <ImageBackground source={image} style={mystyles.image}>
            <View style={{justifyContent:'center'}}>
              <View style={{ alignSelf:'center' }}>
                <Image style={{ height: 130, width: 130 }} source={require('../android/app/src/main/assests/images/conacado_logo.png')} />
              </View>
              <View style={{ flexDirection: 'row', padding: 20, marginTop:36,justifyContent:'center' }}>
                <Image style={{ height: 50, width: 70 }} source={require('../android/app/src/main/assests/images/dominican_republic.jpg')} />

                <Image style={{ marginLeft: 20, height: 43, width: 90 }} source={require('../android/app/src/main/assests/images/republic_digital.jpg')} />
             </View>
            </View>
        </ImageBackground>

      </View>

    )
  }
}