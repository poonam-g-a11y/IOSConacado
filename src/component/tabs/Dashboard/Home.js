import React, {Component} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  StyleSheet,
  Dimensions,
  Animated,
  TouchableOpacity,
} from 'react-native';
import {Button, Content} from 'native-base';
import {CustomHeader} from '../../CustomHeader';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import SwipeUpDown from 'react-native-swipe-up-down-fix';

const windowHeight = Dimensions.get('window').height;
import SwipeUpDownModal from 'react-native-swipe-modal-up-down';
export class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coverheight: new Animated.Value(windowHeight - 100),
      formopacity: 1,
      animation: 'easeInEaseOut',
    };
  }

  componentDidMount() {
    Animated.timing(this.state.coverheight, {
      toValue: windowHeight / 3,
      duration: 600,
    }).start();
  }
  render() {
    const {coverheight, formopacity} = this.state;
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={false} backgroundColor="#669E08" />
        <CustomHeader
          isHome={true}
          title="Hogar"
          navigation={this.props.navigation}
        />

        {/* <Animated.View style={{justifyContent: 'center', alignItems: 'center' ,height: coverheight,backgroundColor:'blue'}}> 
        <Image style={{}} source={require('../../../../android/app/src/main/assests/images/conacado_logo.png')} />
      </Animated.View> */}
        <View
          style={{
            flexDirection: 'row',
            margin: 15,
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={{height: 20, width: 20}}
              source={require('../../../../android/app/src/main/assests/images/conacado_logo.png')}
            />
            <Text
              style={{
                marginLeft: 10,
              }}>
              Saldo de Billetra
            </Text>
          </View>

          <Text>Consultar saldo</Text>
        </View>
        <SwipeUpDown
          hasRef={ref => (this.swipeUpDownRef = ref)}
          style={{height: 100, backgroundColor: 'blue'}}
          itemMini={
            <View style={{alignItems: 'center'}}>
              <Text>This is the mini view, swipe up!</Text>
            </View>
          }
          itemFull={
            <View style={{flex: 1, justifyContent: 'center'}}>
              {/* <Text style={styles.instructions}>
            Swipe down to close
          </Text> */}
              <View
                style={{
                  justifyContent: 'space-around',
                  margin: 10,
                  flexDirection: 'row',
                }}>
                   <TouchableOpacity onPress ={()=>this.props.navigation.navigate('FeedDetail')}>
                   <View>
                  <Image
                    style={{height: 100, width: 100}}
                    source={require('../../../assets/fonts/image/qr_code.png')}
                  />
                  <Text
                    style={{alignSelf: 'center', marginTop: 5, color: '#ffff'}}>
                    Escanear
                  </Text>
                </View>
                    </TouchableOpacity>
                
                <TouchableOpacity>
                <View>
                  <Image
                    style={{height: 100, width: 100}}
                    source={require('../../../assets/fonts/image/bank.png')}
                  />
                  <Text
                    style={{alignSelf: 'center', marginTop: 5, color: '#ffff'}}>
                    Pagar
                  </Text>
                </View>
                    </TouchableOpacity>
              
              </View>
              <View
                style={{
                  justifyContent: 'space-around',
                  margin: 10,
                  flexDirection: 'row',
                  marginTop: 30,
                }}>
                  <TouchableOpacity>
                  <View>
                  <Image
                    style={{height: 100, width: 100}}
                    source={require('../../../assets/fonts/image/wallet_image.png')}
                  />
                  <Text
                    style={{alignSelf: 'center', marginTop: 5, color: '#ffff'}}>
                    Completar
                  </Text>
                  </View>
                  </TouchableOpacity>
                

                <TouchableOpacity>
                <View>
                  <Image
                    style={{height: 100, width: 100}}
                    source={require('../../../assets/fonts/image/piggy_bank.png')}
                  />
                  <Text
                    style={{alignSelf: 'center', marginTop: 5, color: '#ffff'}}>
                    Transferir
                  </Text>
                </View>     
                    </TouchableOpacity>
               
              </View>
            </View>
          }
          disablePressToShow={true}
          style={{backgroundColor: '#ccc', height: 40,}}
          animation={this.state.animation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92BBD9',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  containerContent: {
    flex: 1,
    marginTop: '50%',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    backgroundColor: 'blue',
  },
  Modal: {
    backgroundColor: '#005252',
    marginTop: 0,
  },
});
