import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, StatusBar } from 'react-native';

import { NativeStackScreenProps } from '@react-navigation/native-stack';


type RootStackParamList = {
  HomeScreen: undefined;
  LoginScreen: undefined;
  CustomSplashScreen : undefined;
};
type HomeProps = NativeStackScreenProps<RootStackParamList, 'HomeScreen'>;

const HomeScreen: React.FC<HomeProps> = ({ navigation }:HomeProps) =>{
  useEffect(() => {
    setTimeout(() => {
      ; // Navigate to WelcomeScreen
    }, 2000); // 2-second delay
  }, [navigation]);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#FFF" />
      <Image
        source={require('./assets/splashscreen.png')}
        style={styles.logo}
      />
      <Text style={styles.brandText}>
        <Text style={styles.brandTextMain}>MARK  </Text>
        <Text style={styles.brandTextHighlight}>ITUP</Text>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    position: 'absolute',
  },
  brandText: {
    marginTop: 200,
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
  brandTextMain: { color: '#000' },
  brandTextHighlight: { color: '#00E5FF' },
});

export default HomeScreen;
