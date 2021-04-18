/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';


import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  ToastAndroid,
  StatusBar,
} from 'react-native';

import { 
  Button, 
  Colors, 
  Appbar, 
} from 'react-native-paper'

import Details from './details';
import Feed from './feed';

import BottomTab1 from './bottomtabs/tab1';
import BottomTab2 from './bottomtabs/tab2';
import BottomTab3 from './bottomtabs/tab3';

import Tab1 from './tabs/Tab1';
import Tab2 from './tabs/Tab2';
import Tab3 from './tabs/Tab3';

import Screen1 from './drawer/screen1';
import Screen2 from './drawer/screen2';
import Screen3 from './drawer/screen3';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Header } from 'react-native/Libraries/NewAppScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();
const MaterialTopTab = createMaterialTopTabNavigator();



import Login from './Auth/Login';
import SignUp from './Auth/SignUp';
import Home from './pages/Home'
import CardPage from './CardPage';
import Profilepage from './Auth/profilepage';
import CardLayout from './Auth/cardLayout';
import MapPage from './Auth/mappage';
import DateAndTime from './Auth/dateandtime';
import MapPage2 from './Auth/mappage2';
import InputText from './Auth/inputtext';
import MapSearch from './mapsearch';
import WelcomePage from './pages/welcomePage';
import Googlesingin from './Auth/googleSignIn';
const App = () => {

  const createHomeStack = ({navigation}) =>{ 
    return <Stack.Navigator>
      <Stack.Screen 
          name = "Feed" 
          component ={Feed}
          
          options={{
            title: "Home"  , 
            headerTintColor: 'red', 
            headerShown: true,
            headerRight: () => <MaterialCommunityIcons name="dots-vertical" size={26} onPress={() => ToastAndroid.show("menu button click", ToastAndroid.SHORT) }/>,
            headerLeft: () => <MaterialCommunityIcons name="menu" size={26} onPress={() => navigation.openDrawer() } style={{padding:8, color: Colors.green700}}/>,

          }}
          />
          <Stack.Screen 
              name = "Details" 
              component ={Details}
              options={{title: 'Details Page', headerTitleAlign: 'center'}}
              />
          <Stack.Screen name = "Bottom Tabs" children ={createBottomTabs} />   
          <Stack.Screen name = "Bottom Tabs1" children ={createBottomTabs1} /> 
          <Stack.Screen name = "Top Tabs" children ={createTopTabs} />
          <Stack.Screen name = "Login" component = {Login} />
          <Stack.Screen name = "Signup" component = {SignUp} />
          <Stack.Screen name = "CardPage" component = {CardPage} />
          <Stack.Screen name = "ProfilePage" component = {Profilepage} />
          <Stack.Screen name = "CardLayout" component = {CardLayout} />
          <Stack.Screen name = "MapPage" component = {MapPage} />
          <Stack.Screen name = "DateAndTime" component = {DateAndTime} />
          <Stack.Screen name = "MapPage2" component = {MapPage2} />
          <Stack.Screen name = "InputText" component = {InputText} />
          <Stack.Screen name = "MapSearch" component = {MapSearch} />

    </Stack.Navigator>

  }

  const createTopTabs = () => {
    return <MaterialTopTab.Navigator>
      <MaterialTopTab.Screen name="Past" component={Tab1} />
      <MaterialTopTab.Screen name="Current" component={Tab2} />
      <MaterialTopTab.Screen name="Upcoming" component={Tab3} />
    </MaterialTopTab.Navigator>
  }

  const createBottomTabs = () => {
    return <MaterialBottomTab.Navigator
           shifting={true}
           labeled={true}
           activeColor={Colors.red900}
           barStyle ={{backgroundColor: Colors.amber700, padding: 4}}
           
           
    >
      <MaterialBottomTab.Screen 
          name="B Tab 1" 
          component={MapPage}
          options={{
            tabBarLabel: 'Home',
            tabBarColor: Colors.brown200,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="home" color={color} size={26}/>
            ),
          }}
          />
      <MaterialBottomTab.Screen 
          name="B Tab 2" 
          component={createTopTabs}
          options={{
            tabBarLabel: 'Booking',
           // tabBarBadge: 2, //true ot number or string
            tabBarColor: Colors.blue300,
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons name="calendar" color={color} size={26}/>
            ),
          }}
          />
      <MaterialBottomTab.Screen 
          name="B Tab 3" 
          component={Profilepage}
          
          options={{
            tabBarLabel: 'Profile',
            tabBarColor: Colors.green400,
            
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons 
                    name="account" 
                    color={color} 
                    size={26}
                    />
            ),
          }}
          />
    </MaterialBottomTab.Navigator>
    };


    const createBottomTabs1 = () => {
      return <MaterialBottomTab.Navigator
             shifting={true}
             labeled={true}
      
             activeColor={Colors.red900}
             barStyle ={{backgroundColor: Colors.amber700, padding: 4}}
             
             
      >
        <MaterialBottomTab.Screen 
            name="B Tab 1" 
            component={BottomTab1}
            options={{
              tabBarLabel: 'Past',
              tabBarColor: Colors.brown200,
              
              
            }}
            />
        <MaterialBottomTab.Screen 
            name="B Tab 2" 
            component={BottomTab2}
            options={{
              tabBarLabel: 'Current',
              tabBarBadge: 2, //true ot number or string
              tabBarColor: Colors.blue300,
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons name="bell" color={color} size={26}/>
              ),
            }}
            />
        <MaterialBottomTab.Screen 
            name="B Tab 3" 
            component={BottomTab3}
            
            options={{
              tabBarLabel: 'Upcoming',
              tabBarColor: Colors.green400,
              
              tabBarIcon: ({color}) => (
                <MaterialCommunityIcons 
                      name="account" 
                      color={color} 
                      size={26}
                      />
              ),
            }}
            />
      </MaterialBottomTab.Navigator>
      };
  
  
  

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            options={
              {
                headerShown: false,
              }
            } 
            name="WelcomePage" 
            component={WelcomePage} />
        <Stack.Screen 
          name = "Feed" 
          component ={Feed}
          
          options={{
            title: "Home"  , 
            headerTintColor: 'red', 
            headerShown: true,
            headerRight: () => <MaterialCommunityIcons name="dots-vertical" size={26} onPress={() => ToastAndroid.show("menu button click", ToastAndroid.SHORT) }/>,
            headerLeft: () => <MaterialCommunityIcons name="menu" size={26} onPress={() => navigation.openDrawer() } style={{padding:8, color: Colors.green700}}/>,

          }}
          />
          <Stack.Screen 
              name = "Details" 
              component ={Details}
              options={{title: 'Details Page', headerTitleAlign: 'center'}}
              />
          <Stack.Screen name = "Bottom Tabs" children ={createBottomTabs} />   
          <Stack.Screen name = "Bottom Tabs1" children ={createBottomTabs1} /> 
          <Stack.Screen name = "Top Tabs" children ={createTopTabs} />
          <Stack.Screen 
              name = "Login" 
              options = {{
                headerShown: false,
              }}
              component = {Login} />
          <Stack.Screen 
              name = "Signup" 
              options = {{
                headerShown: false,
              }}
              component = {SignUp} />
          <Stack.Screen name = "CardPage" component = {CardPage} />
          <Stack.Screen name = "ProfilePage" component = {Profilepage} />
          <Stack.Screen name = "CardLayout" component = {CardLayout} />
          <Stack.Screen name = "MapPage" component = {MapPage} />
          <Stack.Screen name = "DateAndTime" component = {DateAndTime} />
          <Stack.Screen name = "MapPage2" component = {MapPage2} />
          <Stack.Screen name = "InputText" component = {InputText} />
          <Stack.Screen name = "MapSearch" component = {MapSearch} />
          <Stack.Screen name = "GoogleSignIn" component = {Googlesingin} />
      </Stack.Navigator>
    </NavigationContainer>
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
