import React from 'react';
import {Colors}  from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Text,TextInput, View} from 'react-native';


function InputText() {
    return (
       
            
            <View style={{
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
               <View style={{flex: 1}}><TextInput style={{paddingTop: 10, paddingBottom: 10, paddingStart: 20}} placeholder="enter Name"  /></View>
               <View style={{flex: 1, paddingTop: 15, paddingBottom: 5, paddingEnd: 20, }}><Icon style={{alignSelf: 'flex-end'}} name="user" size={20} /></View>
              
            </View>  
        
    )
}

export default InputText
