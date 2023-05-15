import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './app/pages/LoginScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './app/pages/HomeScreen';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Register from './app/pages/RegisterScreen';
import JobDetail from './app/pages/JobDetailScreen';
import AddFeedback from './app/pages/AddFeedBack';
const Stack = createNativeStackNavigator();
import React from 'react';
import { Provider } from 'react-redux';
import store from './app/store/index';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Inter-Bold': require('./assets/fonts/Inter-Bold.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
    'Roboto-BoldItalic': require('./assets/fonts/Roboto-BoldItalic.ttf'),
    'Roboto-Italic': require('./assets/fonts/Roboto-Italic.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-MediumItalic': require('./assets/fonts/Roboto-MediumItalic.ttf'),
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return (
      <SafeAreaProvider>
        <AppLoading />
      </SafeAreaProvider>
    )
  } else {
    return (
      <Provider store={store}>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={Register} options={{ headerShown: false }} />
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="JobDetail" component={JobDetail} options={{ headerShown: false }} />
            <Stack.Screen name="AddFeedback" component={AddFeedback} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>

      </Provider>
    );
  }
}
