import {StyleSheet, Text, View, Flatlist} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from './screens/Home';
import Profile from './screens/Profile';
import Messege from './screens/Messege';

const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

const MenuTab = () => {
  return (
    <Tabs.Navigator screenOptions={{tabBarActiveTintColor: 'blue'}}>
      <Tabs.Screen
        name="Beranda"
        component={Home}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="home" size={size} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        component={Profile}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account-box" size={size} color="black" />
          ),
        }}
      />
      <Tabs.Screen
        name="Pesan"
        component={Messege}
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="message" size={size} color="black" />
          ),
        }}
      />
    </Tabs.Navigator>
  );
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Tab"
          component={MenuTab}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const style = StyleSheet.create({});