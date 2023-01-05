import React from 'react';
import { TouchableOpacity, Text,  } from 'react-native';
export default function CustomButton({label, onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: '#AD40AF',
        padding: 20,
        borderRadius: 10,
        marginBottom: 30,
      }}>
      <Text
        style={{
          textAlign: 'center',
          color: '#fff',
          fontSize: 16,
          fontFamily: 'Roboto-Medium',
        }}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}
