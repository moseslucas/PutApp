import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Alert,
  Image
} from 'react-native'


export default class App extends Component<{}> {
  componentDidMount () {
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._handlePress}>
          <Image source={require('./assets/img/click_me.png')}/>
        </TouchableOpacity>
      </View>
    );
  }

  _handlePress () {
    Alert.alert(
      'PUTANGINA KA',
      '',
      [
        {text: 'Putangina mo din', onPress: () => Alert.alert('PUTANGINA MO')},
        {text: 'PUTA AKO', onPress: () => Alert.alert('OO, PUTA KA TALAGA')}
      ], { cancelable: false }
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  }
});

