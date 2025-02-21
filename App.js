import React from 'react';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MainPage from './Components/MainPage';
import LoginPage from './Components/LoginPage';
import RegisterPage from './Components/RegisterPage';
import RegisterStudent from './Components/RegisterStudent';
import RegisterEmployer from './Components/RegisterEmployer';
import StudentMainPage from './Components/StudentMainPage';
import StudentPostCv from './Components/StudentPostCv';
import EmployerMainPage from './Components/EmployerMainPage';
import EmployerPostJob from './Components/EmployerPostJob';

import StudentJobView from './Components/StudentJobView';
import EmployerCvView from './Components/EmployerCvView';


const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />

        <Stack.Navigator >
          <Stack.Screen name=" " component={LoginPage} options={{ headerShown: false}} />
          <Stack.Screen name="MainPage" component={MainPage} options={{ headerShown: false}} />
          <Stack.Screen name="RegisterPage" component={RegisterPage} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="RegisterStudent" component={RegisterStudent} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="RegisterEmployer" component={RegisterEmployer} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="StudentMainPage" component={StudentMainPage} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="StudentPostCv" component={StudentPostCv} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="EmployerMainPage" component={EmployerMainPage} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="EmployerPostJob" component={EmployerPostJob} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="StudentJobView" component={StudentJobView} /*options={{ headerShown: false}}*/ />
          <Stack.Screen name="EmployerCvView" component={EmployerCvView} /*options={{ headerShown: false}}*/ />
        </Stack.Navigator>
    

    </NavigationContainer>
  </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
