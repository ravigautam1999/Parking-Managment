/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { View, Text, Image, Animated } from 'react-native';
import React, {useEffect, useRef} from 'react';




const WelcomePage = ({navigation}) => {
   // const fadeAnim = useRef(new Animated.Value(0)).current;
       
   setTimeout(()=>{
       navigation.navigate('Login')
   }, 5000);
     
    return (
        <View style={{flex: 1, justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Image source={require('../images/ParkingManglogo.png')} width={100} height={100}/>
          </View>
            
        </View>
    )
}

export default WelcomePage;
