import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import GoogleLogin from '../components/GoogleLogin';
import FacebookLogin from '../components/FacebookLogin';

const Register = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isInputValid = email.length > 0 && password.length > 0;
  const [isSignup, setIsSignup] = useState(false);
  const handleSignUp = () => {
    setIsSignup(true);
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(res => {
        setIsSignup(false);
        navigation.navigate('Home');
        Alert.alert('User account created and signed in successfully!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use.');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid.');
        }
      })
      .finally(() => {
        setEmail('');
        setPassword('');
        setIsSignup(false);
      });
  };
  const navigateToLogin = () => {
    navigation.navigate('Login');
  };
  // handleEmptyEmail
  const handleEmptyEmail = () => {
    setEmail('');
  };
  // handleEmptyPassword
  const handleEmptyPassword = () => {
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputmail}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email"
              placeholderTextColor="black"
              value={email}
              onChangeText={text => setEmail(text)}
              keyboardType="email-address"
            />
          </View>

          {email.length > 0 && (
            <View>
              <TouchableOpacity onPress={handleEmptyEmail}>
                <Image
                  source={require('../assets/images/cancel.png')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>

        <View style={styles.inputpassword}>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Password"
              placeholderTextColor="black"
              value={password}
              onChangeText={text => setPassword(text)}
              secureTextEntry
            />
          </View>

          {password.length > 0 && (
            <View>
              <TouchableOpacity onPress={handleEmptyPassword}>
                <Image
                  source={require('../assets/images/cancel.png')}
                  style={styles.cancle}
                />
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>

      {isInputValid && (
        <View>
          {isSignup ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <TouchableOpacity
              style={styles.signupButton}
              onPress={handleSignUp}>
              <Text style={styles.signupButtonText}>Sign Up</Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      <Text style={styles.loginLink} onPress={navigateToLogin}>
        Already have an account? Log in
      </Text>
      <View>
      
        <GoogleLogin />
      </View>
      <View>
        <FacebookLogin />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#818589',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    height: 40,
    width: 'full',
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  inputmail: {
    flexDirection: 'row',
    // backgroundColor: 'green',
    justifyContent: 'space-between',
  },
  inputpassword: {
    flexDirection: 'row',
    // backgroundColor: 'red',
    justifyContent: 'space-between',
  },
  cancle: {
    width: 20,
    height: 15,
    marginTop: 10,
  },
  signupButton: {
    backgroundColor: 'blue',
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    padding: 8,
  },
  signupButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLink: {
    marginTop: 20,
    color: 'blue',
    fontSize: 20,
  },
});

export default Register;
