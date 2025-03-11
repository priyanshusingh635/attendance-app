import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';



type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  CustomSplashScreen : undefined;
};

type LoginProps = NativeStackScreenProps<RootStackParamList, 'LoginScreen'>;

const LoginScreen: React.FC<LoginProps> = ({ navigation }:LoginProps) => {

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Logo Section */}
      <View style={styles.logoContainer}>
        <Image
          source={require('./assets/new.png')} // Replace with your actual logo
          style={styles.logo}
        />
        <Text style={styles.logoText}>MARKITUP</Text>
      </View>

      {/* Login Box */}
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Login</Text>

        {/* Email Input */}
        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter your email" />

        {/* Password Input */}
        <Text style={styles.label}>Password</Text>
        <View style={styles.passwordContainer}>
          <Image
            source={require('./assets/Lock.png')} // Lock icon
            style={styles.icon1}
          />
          <TextInput
            style={styles.passwordInput}
            placeholder="Enter your password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)}>
            <Image
              source={
                passwordVisible
                  ? require('./assets/eye-open-icon.png') // Replace with your eye-open image
                  : require('./assets/eyeClosedIcon.png') // Replace with your eye-closed image
              }
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        <TouchableOpacity style={styles.button}
        onPressIn={() => navigation.navigate('CustomSplashScreen')}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '60%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    backgroundColor: '#fff',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    overflow: 'hidden',
    resizeMode: 'cover',
    marginBottom: 10,
  },
  logoText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  loginContainer: {
    flex: 1,
    backgroundColor: '#007AFF',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -30,
  },
  loginText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 15,
    color: '#000',
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  passwordInput: {
    flex: 1,
    padding: 12,
    color: '#000',
  },
  icon: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  icon1: {
    width: 20,
    height: 50,
    marginHorizontal: 5,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default LoginScreen;
