/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Button} from 'react-native-paper';
import { View, Text, Alert } from 'react-native';

const Home = () => {
    return (
        <View style={{flex: 1, justifyContent: 'space-between'}}>
           <Text>Login Successful!!</Text>
           <Button
                mode="contained"
                icon="logout"
                style={{
                    margin: 10,
                    width: '50%',
                    alignSelf: 'center',
                }}
                onPress={() => Alert.alert('Logout Successful!!')}
                >Logout</Button>
        </View>
    );
};

export default Home;
