import React, {Component} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {WIDTH, HEIGHT} from '../../../utils/Dimension';

export default class Bounce extends Component {
  state = {
    animation: new Animated.Value(20),
    ballWidth: new Animated.Value(100),
    ballFadeOut: new Animated.Value(1),
    logoFadeIn: new Animated.Value(0),
    isLogoVisible: false,
    isTextVisible: false,
  };

  componentDidMount() {
    this.handlePress();
  }

  handlePress = () => {
    /**
     * First animation is for make the object bouncy
     * Second animation is used to stretch the object width according to device screen width.
     * Second animation execute after 3sec delay.
     */
    Animated.spring(this.state.animation, {
      toValue: HEIGHT('38%'),
      friction: 0.5,
      tension: 1,
      useNativeDriver: false,
    }).start();

    setTimeout(() => {
      Animated.timing(this.state.ballWidth, {
        duration: 1000,
        toValue: WIDTH('90%'),
        useNativeDriver: false,
      }).start(finished => {
        if (finished.finished) this.setState({isTextVisible: true});
        setTimeout(() => {
          Animated.timing(this.state.ballFadeOut, {
            duration: 4000,
            toValue: 0,
            useNativeDriver: false,
          }).start(finished => {
            if (finished.finished) this.setState({isLogoVisible: true});
            Animated.parallel([
              Animated.timing(this.state.logoFadeIn, {
                duration: 4000,
                toValue: 1,
                useNativeDriver: false,
              }),
              Animated.timing(this.state.ballFadeOut, {
                duration: 4000,
                toValue: 0,
                useNativeDriver: false,
              }),
            ]).start();
          });
        }, 1000);
      });
    }, 3000);
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            borderWidth: 5,
            margin: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Animated.View
            style={{
              width: this.state.ballWidth,
              height: 100,
              borderRadius: 50,
              backgroundColor: 'tomato',
              alignSelf: 'center',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: this.state.ballFadeOut,
              position: 'absolute',
              top: 0,
              transform: [
                {
                  translateY: this.state.animation,
                },
              ],
            }}>
            {this.state.isTextVisible ? (
              <Text style={{fontSize: 16, fontWeight: 'bold'}}>
                Welcome to meme world.
              </Text>
            ) : null}
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.logoFadeIn,
              height: 150,
              width: 300,
              borderWidth: 3,
              borderRadius: 10,
              alignSelf: 'center',
              backgroundColor: 'yellow',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, fontFamily: 'Roboto-Bold',}}>RN-Game</Text>
          </Animated.View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  ball: {},
  button: {
    width: 150,
    height: 70,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#fc5c65',
    marginVertical: 50,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
