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

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isInputValid = email.length > 0 && password.length > 0;
  const [isLogin, setIsLogin] = useState(false);
  const handleLogin = () => {
    setIsLogin(true);
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setIsLogin(false);

        Alert.alert('Login Successful', 'You are now logged in!');
        navigation.navigate('Home');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        Alert.alert('Error', error.message);
      })
      .finally(() => {
        setEmail('');
        setPassword('');
        setIsLogin(false);
      });
  };
  const navigateToSignup = () => {
    navigation.navigate('Register');
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
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <View style={styles.inputFlex}>
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

        <View style={styles.inputFlex}>
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

          {password.length > 0 && 
           
            (
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
              {isLogin ? (
                <ActivityIndicator size="large" color="#0000ff" />
              ) : (
                <TouchableOpacity style={styles.LoginButton} onPress={handleLogin}>
          <Text style={styles.LoginButtonText}>Login</Text>
        </TouchableOpacity>
              )}
            </View>
       
      )}

      <Text style={styles.loginLink} onPress={navigateToSignup}>
        Don't have an account? Signup
      </Text>
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
    width: 330,
    paddingHorizontal: 10,
    marginBottom: 10,
    color: 'white',
  },
  inputFlex: {
    flexDirection: 'row',
    
  },
  cancle: {
    width: 20,
    height: 20,
    marginTop: 10,
    
  },
  LoginButton: {
    backgroundColor: 'blue',
    width: '80%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginTop: 10,
    padding:8
  },
  LoginButtonText: {
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

export default Login;
