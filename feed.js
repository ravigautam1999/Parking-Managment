/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native-paper'
import { Navigation,Container } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const Feed = ({navigation}) => {
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

           <Button mode="contained" uppercase={true} onPress={() => navigation.navigate('Details')}>Goto Details Page</Button>

           <View style={{margin: 5}}><Button mode="contained" onPress={() => navigation.navigate('Login')}>Goto Login Page</Button></View>
           <View ><Button mode="contained" onPress={() => navigation.navigate('Signup')}>Goto SignUp Page</Button></View>
        </View>
    );
};

export default Feed;

