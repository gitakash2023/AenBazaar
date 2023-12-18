import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, ScrollView } from 'react-native';

const Profile = () => {
  const [name, setName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [country, setCountry] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [currentAddress, setCurrentAddress] = useState('');
  const [landmark, setLandmark] = useState('');
  const [pinCode, setPinCode] = useState('');

const handleUpdateProfile=()=>{

  }

  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('../assets/images/myProfileFill.png')}
        style={{ width: 50, height: 50, alignSelf: 'center', marginTop: 10 }}
      />

      {inputFieldWithIcon(require('../assets/images/account.png'), 'Name', name, setName)}
      {inputFieldWithIcon(require('../assets/images/mobile.png'), 'Mobile Number', mobileNumber, setMobileNumber)}
      {inputFieldWithIcon(require('../assets/images/country.png'), 'Country', country, setCountry)}
      {inputFieldWithIcon(require('../assets/images/state.png'), 'State', state, setState)}
      {inputFieldWithIcon(require('../assets/images/city.png'), 'City', city, setCity)}
      {inputFieldWithIcon(require('../assets/images/address.png'), 'Current Address', currentAddress, setCurrentAddress)}
      {inputFieldWithIcon(require('../assets/images/landmark.png'), 'Landmark', landmark, setLandmark)}
      {inputFieldWithIcon(require('../assets/images/pincode.png'), 'Pin Code', pinCode, setPinCode)}

      <Button title="Update Profile" onPress={handleUpdateProfile} />
    </ScrollView>
  );
};

const inputFieldWithIcon = (iconSource, placeholder, value, onChangeText) => (
  <View style={styles.inputContainer}>
    <Image source={iconSource} style={styles.icon} />
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={(text) => onChangeText(text)}
      style={styles.input}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
    marginBottom: 10,
    padding: 8,
  },
  input: {
    flex: 1,
    height: 40,
    marginLeft: 8,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});

export default Profile;
