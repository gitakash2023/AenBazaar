import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const Setting = () => {
  const navigation = useNavigation();
  const [isLoadingLogout, setIsLoadingLogout] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in
        setCurrentUser(user);
      } else {
        // No user is signed in
        setCurrentUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    setIsLoadingLogout(true);

    // Logout from Firebase
    try {
      await auth().signOut();
      Alert.alert('Logged out from Firebase');
    } catch (error) {
      Alert.alert('Error logging out from Firebase:', error.message);
    }

    // Logout from Google
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      Alert.alert('Logged out from Google');
    } catch (error) {
      console.error('Error logging out from Google authentication:', error);
    } finally {
      setIsLoadingLogout(false); // Clear the logout in progress, whether it succeeded or failed
      navigation.navigate('Login');
    }
  };

  return (
    <>
      <View style={{ alignSelf: 'flex-end' }}>
        <View>
          {isLoadingLogout ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <View>
              {currentUser && (
                <Text style={styles.userName}>{`Welcome, ${currentUser.displayName}`}</Text>
              )}
              <TouchableOpacity onPress={handleLogout}>
                <Image
                  source={require('../assets/images/logout.png')}
                  style={styles.logoutButton}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  logoutButton: {
    width: 30,
    height: 30,
    marginTop: 10,
    marginRight: 20,
  },
});

export default Setting;
