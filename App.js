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
import Sound from 'react-native-sound'

export default class App extends Component<{}> {
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
    const whoosh = new Sound('putapp.mp3', Sound.MAIN_BUNDLE, (error) => {
      if (error) {
        console.log('failed to load the sound', error)
      } else {
        whoosh.setNumberOfLoops(-1)
        whoosh.play()
      }
    })
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

