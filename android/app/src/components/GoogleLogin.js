import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { useNavigation } from '@react-navigation/native';

const GoogleLogin = () => {
  const navigation = useNavigation();

  // useEffect(() => {
  //   GoogleSignin.configure({webClientId:});
  // }, []);

  const signinWithGoogle = async () => {
    try {
       
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      // setState({ userInfo });
    

      // If login is successful, show welcome alert and navigate to the home page
      Alert.alert('Welcome!', `Hello ${userInfo.user.name}`);
    //   navigation.navigate('Home');
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={signinWithGoogle}>
        <Text style={styles.googleButton}>Login with Google</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 50,
  },
  googleButton: {
    backgroundColor: 'blue',
    width: 300,
    padding: 10,
    textAlign: 'center',
    color: 'white',
    borderRadius: 10,
    marginTop: 10,
  },
});

export default GoogleLogin;
