/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import {View, Text ,Button,TextInput, ToastAndroid, ActivityIndicator} from 'react-native';
import auth from '@react-native-firebase/auth'
import {
    GoogleSigninButton,
    GoogleSignin,
    statusCodes,


} from '@react-native-google-signin/google-signin';

GoogleSignin.configure();

function Googlesingin() {
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
          setIsSigninInProgress(true)
          console.log(userInfo)
          ToastAndroid.show("Sign In Successful", ToastAndroid.LONG)
          this.setState({ userInfo });
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
              console.log('user cancelled the login flow')
            // user cancelled the login flow
          } else if (error.code === statusCodes.IN_PROGRESS) {
              console.log('operation (e.g. sign in) is in progress already')
            // operation (e.g. sign in) is in progress already
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
              console.log('play services not available or outdated')
            // play services not available or outdated
          } else {
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

    return (
        
        <View style={{flex: 1, backgroundColor:'green', margin: 20}}>
            
            <View style={{flex: 1, justifyContent: 'center', alignContent:'center', alignItems: 'center',backgroundColor:'red'}}>
            <GoogleSigninButton
                style={{ width: 192, height: 48 }}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Dark}
                onPress={signIn}
                disabled={isSigninInProgress} />
            </View>
            <View style={{flex: 1, backgroundColor:'green'}}>
                <Button
                    title="check User Login"
                    onPress={isSignedIn}
                />
            </View>
            <View style={{flex: 1, backgroundColor:'green'}}>
                <Button
                    title="Current User"
                    onPress={getCurrentUser}
                />
            </View>
            <View style={{flex: 1, backgroundColor:'green'}}>
                <Button
                    title="Log Out"
                    onPress={signOut}
                />
            </View>
            <View style={{flex: 1, backgroundColor:'green'}}>
               <ActivityIndicator
                   size='large'
                   color='red'
                   animating={ifLoginProgress}
               />
            </View>

            
            
        </View>
    )
}

export default Googlesingin;
