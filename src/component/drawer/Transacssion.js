import React, {Component} from 'react';
import {View, StyleSheet, Image, ScrollView} from 'react-native';
import {
  Text,
  Container,
  Content,
  Card,
  CardItem,
  List,
  ListItem,
  Right,
  Left,
} from 'native-base';
import {CustomHeader} from '../CustomHeader';
// import { styles } from '../../Styles/Initialpage';

export class Setting extends Component {
  constructor(){
    super();
    this.state ={
      data :[
        {'id' : 1},{'id' : 2},{'id' : 3} ,{'id' : 4} ,{'id' : 5},{'id' : 6},{'id' : 7},{'id' : 8}
      ]
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <CustomHeader title="Transacciones" navigation={this.props.navigation} />
        <Content>
          {this.state.data.map((data,i)=>
         <ScrollView>
          <View
            style={{justifyContent: 'center', alignItems: 'center', margin: 0}}>
            {/* <Text>Settings Screen</Text> */}
            <Card style={styles.cardview}>
              <CardItem style={styles.CardItem}>
                <View>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <View style={{width: '80%'}}>
                      <Text>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting
                      </Text>
                    </View>

                    <View style={{width: '20%', marginLeft: 0}}>
                      <Image
                        source={require('../../assets/fonts/image/wallet_incoming.png')}
                        resizeMode="contain"
                        style={{width: 30, height: 30}}
                      />
                      <Text style={{marginLeft: 0}}>RD$ 2.00</Text>
                    </View>
                  </View>
                  <View style={{flexDirection: 'row'}}>
                    <Text>movil:</Text>
                    <Text>897398309380830</Text>
                  </View>
                  <Text>kksks</Text>
                </View>
              </CardItem>
            </Card>
          </View>
          </ScrollView>
           )}
        </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardview: {
    width: '100%',
    margin: 10,
    height: 100,
    marginHorizontal: 10,
    flexDirection: 'row',
  },
  CardItem: {
    // margin:5,
  },
});
