// import React from 'react'
// import {View , Text, } from 'react-native'


// export default class SwipeModal extends React.Component {
//     render(){
//       return(
//           <View>
//               <Text>DJDJ</Text>
//           </View>
//       )
//     }
// }




import React, { Component } from 'react';
import { StyleSheet, Text, View, Picker } from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down-fix';

export default class SwipeModal extends Component{
  constructor(props) {
    super(props);

    this.state = {
      animation: "easeInEaseOut"
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to{'\n'}react-native-swipe-up-down</Text>
        <Text style={{ margin: 20 }} onPress={() => this.swipeUpDownRef.showFull()}>
          Tap to open panel
        </Text>
        <Picker
          selectedValue={this.state.animation}
          style={{ width: 200 }}
          onValueChange={(itemValue, itemIndex) =>
            this.setState({animation: itemValue})
          }>
          <Picker.Item label="linear" value="linear"/>
          <Picker.Item label="spring" value="spring"/>
          <Picker.Item label="easeInEaseOut" value="easeInEaseOut"/>
          <Picker.Item label="none" value="none"/>
        </Picker>
        <SwipeUpDown
          hasRef={ref => (this.swipeUpDownRef = ref)}
          style ={{height:50}}
          itemMini={
            <View style={{ alignItems: 'center' }}>
              <Text>This is the mini view, swipe up!</Text>
            </View>
          }
          itemFull={
            <View style={styles.panelContainer}>
              <Text style={styles.instructions}>
                Swipe down to close
              </Text>
            </View>
          }
          swipeHeight = {40}
          onShowMini={() => console.log('mini')}
        //   onShowFull={() => console.log('full')}
          disablePressToShow={false}
          style={{ backgroundColor: '#ccc' }}
          animation={this.state.animation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  panelContainer: {
    // flex: 1,
    justifyContent: 'center',
    height:40
  },
});