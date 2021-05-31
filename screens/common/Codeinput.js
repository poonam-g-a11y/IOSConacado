import React from 'react'
import { TextInput, View,StyleSheet } from 'react-native'
import { 
  CustomTextInput,
  register,
  insertText,
  backSpace,
  uninstall,
  hideKeyboard,
} from 'react-native-custom-keyboard-kit';
// import { CodeInput as styles } from '../../styles'

const CodeInput = ({ position, positionFocus, onWrite, values }) => (
  <View style={styles.view}>
    {/* <TextInput
      ref={(input) => { (positionFocus === position && input) ? input.focus() : '' }}
      onChangeText={(text) => onWrite(text, position)}
      {...values}
      secureTextEntry={true}
      underlineColorAndroid='transparent'
      style={styles.textCode}
      keyboardType='numeric'
      maxLength={1}
      selectTextOnFocus={true} */}
    {/* /> */}
    {/* <CustomTextInput
          customKeyboardType="price"
          value={this.state.value}
          onChangeText={this.onChangeText}
          // style={styles.input}
        /> */}
  </View>
)

export default CodeInput;
const styles = StyleSheet.create({
    view: {
      width: 35,
      height: 35,
      marginLeft: 5,
      marginRight: 5,
      borderWidth:1,
      borderColor: '#669E08',
      borderRadius: 25,
      alignItems: 'center',
      position: 'relative'
    },
    textCode: {
      fontSize: 32,
      marginTop: -5,
      width: 50,
      height: 60,
      borderWidth:0,
      textAlign: 'center'
    }
  });
