import React from 'react';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';

export default function InputField({
  label,
  icon,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        paddingBottom: 8,
        marginBottom: 25,
				width: '100%'
      }}>
      {icon}
      <TextInput
        placeholder={label}
        keyboardType={keyboardType}
        style={{flex: 1, paddingVertical: 0}}
      />
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text
          style={{
            color: '#AD40AF',
            fontWeight: '700',
            fontFamily: 'Roboto-Bold',
          }}>
          {fieldButtonLabel}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
