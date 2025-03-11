import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator<RootStackParamList>();
import Home from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import CustomSplashScreen from './screens/CustomSplashScreen';




type RootStackParamList = {
    HomeScreen: undefined;
    LoginScreen: undefined;
    CustomSplashScreen : undefined;
  };

  const App = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen
            name="HomeScreen"
            component={Home}
            options={{ headerShown: false }} // Hide header for this screen
          />
          <Stack.Screen
            name="LoginScreen"
            component={LoginScreen}
            options={{ headerShown: true, title: 'Login' }} // Show header with a custom title
          />
          <Stack.Screen
            name="CustomSplashScreen"
            component={CustomSplashScreen}
            options={{ headerShown: true, title: 'Mark Attendance' }} // Show header with a custom title
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };
export default App;