import { Row } from 'native-base';
import { Platform, StyleSheet ,Dimensions ,PixelRatio} from 'react-native'
import {
    widthPercentageToDP,
    heightPercentageToDP,
    listenOrientationChange,
    removeOrientationListener
  } from 'react-native-responsive-screen';
  import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
  import {white} from '../../screens/common/Colors'


// const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const { width: WIDTH } = Dimensions.get('window')
export const styles = StyleSheet.create({
    container:{
     flex:1,
    //  justifyContent:'center',
    //  backgroundColor:'green',
    flexDirection:'row',
     height:'100%'

    },
    view: {
          paddingTop: 20,
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          //height: height - 24,
          width: '100%',
          height: '60%',
        },
    Regestrarsecomo:{
        // width:'100%',
        height: scale(40),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25,
        backgroundColor:'#669E08',
        // marginEnd:40,
        // marginHorizontal:30
        width: WIDTH - scale(70),
        marginLeft:30,

        // height:45,
        // backgroundColor: '#ffff',
        // borderRadius: 25,
        // justifyContent: 'center',
        marginVertical: 5,
    },

    Regestrarsecomo2:{
        width: 230,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        backgroundColor:'blue',
        // marginLeft:40
    },
    label:{
        alignSelf:'center',
        fontWeight:'bold',
        fontSize:scale(20),
        color:'#fff',
        fontFamily:'VAGRoundedLTPro-Black',
        // elevation:20
        //  fontFamily:'gothic'
        
    },
    labeltext:{
        alignSelf:'center',
        fontWeight:'900',
        fontSize:scale(40),
        color:white,
        elevation:8,
        // fontFamily:'poppins_medium'
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
      },
      buttonOpen: {
        backgroundColor: "#F194FF",
      },
      buttonClose: {
        backgroundColor: "#2196F3",
      },
      textStyle: {
        color: "#000",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

// import { StyleSheet, Dimensions, Platform } from 'react-native';
// import { COLOR_WHITE, COLOR_BLUE } from './colors';

// const { height } = Dimensions.get('window');

// export default StyleSheet.create({
//   buttonsContainer: {
//     width: '70%',
//     alignItems: 'center',
//     marginTop: 'auto'
//   },
//   accessButton: {
//     alignItems: 'center',
//     display: 'flex',
//     justifyContent: 'center',
//     height: 48,
//     borderRadius: 24,
//     width: '70%',
//     marginTop: height / 4,
//   },
//   btnText: {
//     fontFamily: "Gotham-Medium",
//     color: COLOR_WHITE,
//     fontSize: 18,
//   },
//   tokenButton: {
//     marginTop: 20,
//   },
//   view: {
//     paddingTop: 20,
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'column',
//     //height: height - 24,
//     width: '100%',
//     height: '70%',
//   },
//   preview: {
//     color: COLOR_BLUE,
//     fontWeight: 'bold',
//     fontSize: 18,
//     marginBottom: 30,
//   },
//   arrow: {
//     alignItems: 'flex-start',
//   },
//   main: {
//     flex: 1
//   },
//   fondo: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-end'
//   },
//   textWhite: {
//     color: '#FFF',
//     fontSize: Platform.OS === 'ios' ? 14 : 19,
//   },
//   btnToken: {
//     marginTop: 20
//   }
// });
