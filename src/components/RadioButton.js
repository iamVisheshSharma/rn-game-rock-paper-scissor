import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

export default function RadioButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#eeeee4',
        padding: 15,
        borderRadius: 10,
        marginBottom: 30,
				borderWidth: 1,
				borderColor: 'black',
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: 'black',
          fontSize: 16,
          fontFamily: 'Roboto-Medium',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
