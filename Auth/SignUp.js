/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable quotes */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React,{useState} from 'react';
import {Button, Colors, shadow} from 'react-native-paper';
import {Text, View, ScrollView,TouchableOpacity, TextInput, ToastAndroid } from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes,


} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

const SignUp = ({navigation}) => {

    const [isSigninInProgress, setIsSigninInProgress]= useState(false);
    const [ifLoginProgress, setIfLoginProgress]=useState(true);
    const [userInfo, setUserInfo]=useState(
        {
            idToken: "",
            serverAuthCode: "",
            scopes: [], // on iOS this is empty array if no additional scopes are defined
            user: {
              email: "",
              id: "",
              givenName: "",
              familyName: "",
              photo: "", // url
              name: "" // full name
            }
          }
    ); 
    const [state, setState] = useState({})
    const signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          ToastAndroid.show('user account created', ToastAndroid.SHORT);
          navigation.navigate('Login');
          setIsSigninInProgress(true)
          console.log(userInfo)
          
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              ToastAndroid.show('user cancelled the login flow', ToastAndroid.SHORT);
              console.log('user cancelled the login flow')
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
              ToastAndroid.show('sign in is in progress already', ToastAndroid.SHORT);
              console.log('operation (e.g. sign in) is in progress already')
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            ToastAndroid.show('play services not available or outdated', ToastAndroid.SHORT);
              console.log('play services not available or outdated')
            // play services not available or outdated
          } else {
            ToastAndroid.show('some other error happened', ToastAndroid.SHORT);
              console.log('some other error happened')
            // some other error happened
          }
        }
      };

      const isSignedIn = async () => {
        const isSignedIn = await GoogleSignin.isSignedIn();
        console.log(isSignedIn)
        
      };


      const getCurrentUserInfo = async () => {
        try {
          const userInfo = await GoogleSignin.signInSilently();
          setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_REQUIRED) {
            // user has not signed in yet
          } else {
            // some other error
          }
        }
      };

      const getCurrentUser = async () => {
        const currentUser = await GoogleSignin.getCurrentUser();
        console.log(currentUser)
        //ToastAndroid.show(currentUser, ToastAndroid.LONG)
       // this.setState({ currentUser });
      };

      const signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
          ToastAndroid.show("Sign Out Successful", ToastAndroid.LONG)
          setIsSigninInProgress(false)
          //this.setState({ user: null }); // Remember to remove the user from your app's state as well
        } catch (error) {
          console.error(error);
        }
      };


    const [UserName, SetUserName] = React.useState('');
    const [Email, SetEmail] = React.useState('');
    const [Password, SetPassword] = React.useState('');
    const [RePassword, SetRePassword] = React.useState('');

    const CreateUser = async () => {
        auth()
        .createUserWithEmailAndPassword(Email, Password)
        .then(() => {
           ToastAndroid.show('user account created', ToastAndroid.SHORT);
            navigation.navigate('Login');
            console.log('user account created');
        })
        .catch(error => {
            if (error.code === 'auth/email-already-in-use') {
              ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT);
              console.log('That email address is already in use!');
            }

            if (error.code === 'auth/invalid-email') {
              ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT);
              console.log('That email address is invalid!');
            }

            console.error(error);
          });


    };


    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: Colors.green200 }}>
        <ScrollView>
            <View style={{flex: 1, justifyContent: 'center', alignItems:'center', marginBottom: 20}}><Text style={{fontSize: 30 }}>Sign Up</Text></View>
            <View style={{flex: 4, margin: 20}}>


            <View
                style={{
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
                    marginBottom: 20,
                }}


             />

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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="User Name"  onChangeText={(text) => SetEmail(text)}/></View>
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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Full Name"  onChangeText={(text) => SetPassword(text) }/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="user-circle-o" size={20} /></View>

            </View>

            <View style={{
              alignSelf:'center',
              flexDirection: 'row',
              backgroundColor: Colors.lightBlue200,
              width: `80%`,
              marginTop: 10,
              borderRadius: 20,
              shadowColor: Colors.black900,
                        shadowOffset: {
                            width: 5,
                            height: 15,
                        },
              shadowOpacity: 0.58,
              shadowRadius: 16.00,
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Password"  onChangeText={(text) => SetEmail(text)}/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="lock" size={20} /></View>

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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Email Id"  onChangeText={(text) => SetPassword(text) }/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon1 style={{alignSelf: 'flex-end'}} name="email" size={20} /></View>

            </View>


            <View style={{
              alignSelf:'center',
              flexDirection: 'row',
              marginTop: 10,
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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Mobile No"  onChangeText={(text) => SetEmail(text)}/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="phone" size={20} /></View>

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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="Vehicle No"  onChangeText={(text) => SetPassword(text) }/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon style={{alignSelf: 'flex-end'}} name="car" size={20} /></View>

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
              elevation: 6,
              }}>
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="City"  onChangeText={(text) => SetPassword(text) }/></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20 }}><Icon1 style={{alignSelf: 'flex-end'}} name="city" size={20} /></View>

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
                                shadowColor: Colors.blue800,
                                shadowOffset: {
                                    width: 5,
                                    height: 15,
                                },
                                shadowOpacity: 0.18,
                                shadowRadius: 16.00,

                                elevation: 15,


                            }}
                   onPress={CreateUser}
                   >Sign Up</Button>

            <View style={{flexDirection: 'row', marginTop: 5,}}>
                <Text style={{marginTop: 10, marginLeft: 10}}>Already have account? </Text>
                <TouchableOpacity>
                    <Text
                        style={{
                            marginTop: 10,
                            color: Colors.black,
                            fontWeight:'bold',
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.43,
                            shadowRadius: 9.51,

                            elevation: 15,
                        }}
                        onPress={() => navigation.navigate('Login')}

                        > login</Text>
                </TouchableOpacity>
                </View>
                <View style={{alignSelf:'center', marginTop: 10}}>
                    <GoogleSigninButton
                    style={{ width: 192, height: 48 }}
                    size={GoogleSigninButton.Size.Wide}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={signIn}
                    disabled={isSigninInProgress} />
            
                </View>
            </View>



            {/* <View style={{ margin: 20}}>

            </View> */}
           </ScrollView>
        </View>
    );
};

export default SignUp;
