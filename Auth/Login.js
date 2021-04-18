/* eslint-disable quotes */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from 'react';
import { Button, Colors} from 'react-native-paper';
import {Text, View, ScrollView, TouchableOpacity, ToastAndroid, StyleSheet, ImageBackground, TextInput} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';

import SignUp from './SignUp';


const Login = ({navigation}) => {
    const [Email, SetEmail] = React.useState('');
    const [Password, SetPassword] = React.useState('');



    const LoginUser = () => {
        auth()
        .signInWithEmailAndPassword(Email, Password)
        .then(() => {
            console.log('user signIn');
            navigation.navigate('Details');

        })
        .catch(error => {
            if (error.code === 'email not present') {
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              console.log('That email address is invalid!');
            }

            console.error(error);
          });


    };

    const UserSignOut = () => {
        auth()
            .signOut()
            .then(() => console.log('User Sign Out'));
    };
    return (

        <View style={{flex: 1, backgroundColor:Colors.green200}}>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 25}}>Login</Text></View>
            <View style={{flex: 4, margin: 20}}>
             <View
                style={{
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
                    marginBottom: 20,
                }}


             />
            <View>

            <View style={{
              alignSelf:'center',
              flexDirection: 'row',
              backgroundColor: Colors.lightBlue200,
              width: `80%`,
              borderRadius: 20,
              shadowColor: Colors.black900,
                        shadowOffset: {
                            width: 5,
                            height: 15,
                        },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 9,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="enter Name"  onChangeText={(text) => SetEmail(text)}/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="user" size={20} /></View>

            </View>

            <View style={{
             marginTop: 10,
              alignSelf:'center',
              flexDirection: 'row',
              backgroundColor: Colors.lightBlue200,
              width: `80%`,
              borderRadius: 20,
              shadowColor: Colors.black900,
                        shadowOffset: {
                            width: 5,
                            height: 15,
                        },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 15,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Password"  onChangeText={(text) => SetPassword(text) }/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="lock" size={20} /></View>

            </View>







                <Button
                    mode="contained"
                    color={Colors.blue500}
                    style={{
                        alignSelf:'center',
                        borderRadius:27,
                        width:`50%`,
                        marginTop: 20,
                        marginLeft: 10,
                        marginRight: 10,

                        shadowColor: Colors.black900,
                        shadowOffset: {
                            width: 5,
                            height: 15,
                        },
                        shadowOpacity: 0.58,
                        shadowRadius: 16.00,
                        elevation: 18,
                    }}
                    //onPress={() =>ToastAndroid.show("Login Successful !!", ToastAndroid.LONG)}
                    onPress={() => navigation.navigate('GoogleSignIn')}
                    >Login</Button>

                <View style={{
                    padding: 10,
                    marginTop: 20,
                    marginStart: 10,
                }}>
                    <Text>
                        Not a member yet?
                        <Text
                        style={{
                            fontWeight:'bold',
                        }}
                        onPress={()=> navigation.navigate('Signup')}
                        > Register Now</Text>
                    </Text>
                </View>
            </View>



          </View>
        </View>


    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center",
    },
    text: {
      color: "white",
      fontSize: 42,
      fontWeight: "bold",
      textAlign: "center",
      backgroundColor: "#000000a0",
    },
  });
