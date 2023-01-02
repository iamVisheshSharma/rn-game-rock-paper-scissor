import React from 'react';
import {
  SafeAreaView,
  Animated,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

export default function SplashScreen() {
  const value = React.useState(new Animated.ValueXY({x: 0, y: 0}))[0];

  function move() {
    Animated.timing(value, {
      toValue: {x: 0, y: -300},
      duration: 250,
      useNativeDriver: false,
    }).start();
  }

  React.useEffect(() => {
    move()
  })

  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'flex-end',
          height: '100%',
        }}>
        <Animated.View style={value.getLayout()}>
          <View
            style={{
              borderRadius: 100 / 2,
              height: 100,
              width: 100,
              backgroundColor: 'red',
            }}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}
