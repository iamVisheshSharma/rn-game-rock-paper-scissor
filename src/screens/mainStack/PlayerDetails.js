import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import InputField from '../../components/InputField';
import RadioButton from '../../components/RadioButton';
import CustomButton from '../../components/CustomButton';

export default function PlayerDetails() {
  const [playerName, setPlayerName] = React.useState('');
  const [gender, setGender] = React.useState('');
  const [ageSection, setAgeSection] = React.useState('');

  return (
    <SafeAreaView style={{flex: 1, padding: 40}}>
      <View style={{flex: 1, borderWidth: 0}}>
        <View>
          <Text
            style={{fontSize: 24, fontFamily: 'Roboto-Bold', color: 'black'}}>
            Player Details
          </Text>
        </View>
        <View style={{borderWidth: 0, marginTop: 25}}>
          <InputField label={`Your Name`} />
        </View>
        <View style={{borderWidth: 0, marginTop: 25}}>
          <Text
            style={{
              paddingVertical: 10,
              fontFamily: 'Roboto-Regular',
              color: 'black',
            }}>
            Are you ??
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <RadioButton label={`Male`} />
            <RadioButton label={`Female`} />
          </View>
        </View>
        <View style={{borderWidth: 0, marginTop: 25}}>
          <Text
            style={{
              paddingVertical: 10,
              fontFamily: 'Roboto-Regular',
              color: 'black',
            }}>
            Are you ??
          </Text>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <RadioButton label={`Below 18`} />
            <RadioButton label={`Above 18`} />
          </View>
        </View>
        <View
          style={{
            borderWidth: 0,
            flex: 1,
            flexDirection: 'column-reverse',
            alignSelf: 'flex-end',
            width: '40%',
          }}>
          <CustomButton label={`Next`} />
        </View>
      </View>
    </SafeAreaView>
  );
}
