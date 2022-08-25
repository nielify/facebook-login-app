import React, { useState } from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  Dimensions,
} from 'react-native';

import RadialGradient from 'react-native-radial-gradient';

const SCREEN = Dimensions.get('screen');
const CENTER_OF_GRADIENT = [SCREEN.width / 2, SCREEN.height / 2];
const FACEBOOK_STRING = "Facebook";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginHandler = () => {
    let alertMessage = '';

    if (!email || !password) {
      alertMessage = 'Both email and password is required.';
    }
    else if (!isEmailValid(email)) {
      alertMessage = 'Invalid email address.';
    }
    else {
      alertMessage = 'Logged in successfully.';
    }

    Alert.alert(FACEBOOK_STRING, alertMessage);
  }

  const isEmailValid = (email) => {
    const regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    return (regexp.test(email) === true) ? true : false;
  }

  const alertHandler = (value) => {
    Alert.alert(FACEBOOK_STRING, `Directing to ${value} page...`);
  }

  return (
    <RadialGradient 
      style={styles.radialGradient}
      colors={['#fff', '#2d4b89d9']}
      stops={[0.2,0.4,0.3,0.75]}
      center={CENTER_OF_GRADIENT}
      radius={270}
    >
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Image style={styles.logo} source={require('../assets/facebook_name_white.png')} />
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Email"
              keyboardType='email-address'
              onChangeText={setEmail}
              value={email}
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput 
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={loginHandler}>
            <Text style={styles.buttonText}>Log In</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => alertHandler('signup')}>
            <Text style={styles.signup}>Sign Up for Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => alertHandler('help')}>
            <Text style={styles.help}>?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </RadialGradient>
  );
};

const styles = StyleSheet.create({
  radialGradient: {
    width:'100%',
    height:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#2d4b89d9',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    marginVertical: 50,
    width: 170,
    height: 35,
    resizeMode: 'contain',
  },
  loginContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 3,
    width: 320,
    height: 40,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
    margin: 5,
  },
  button: {
    borderRadius: 3,
    width: 320,
    backgroundColor: '#223b73d9',
    paddingVertical: 9,
    marginTop: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signup: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: .8,
    fontSize: 13,
  },
  help: {
    color: '#fff',
    backgroundColor: '#26437ad9',
    fontSize: 17,
    textAlign: 'center',
    width: 23,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center'
  }
});

export default LoginScreen;