/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, Text, Alert,TextInput as ReactInput, Image,  } from 'react-native'
import { Button,TextInput, Checkbox } from 'react-native-paper'
import {useNavigation, useRoute,} from '@react-navigation/native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'



function CardLayout() {

    const myIcon = <Icon name="rocket" size={30} color="#900" />;

    return (
        <View style={{flex: 1}}>
           <View
                style={{
                    flex:2,

                    flexDirection:'row',
                    marginBottom:10,
                    marginEnd:5,
                    marginStart:5,
                    marginTop: 0,
                    borderRadius:15,

                    padding:20,
                    minHeight:100,
                    maxHeight:200,

                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity:  0.4,
                    shadowRadius: 5,
                    elevation: 3,




                }}
                >
                    {/* <View
                    style={{
                     flex:5,

                    }}
                    >
                        <Image
                        style={{width:165, height:170,}}
                        resizeMethod='auto'
                        source={require('../images/carparking.webp')
                        }/>
                    </View> */}

                    <View
                    style={{
                        flex:1,

                        padding:10

                    }}
                    >
                    <View style={{flex:1}}><Text style={{fontSize:16, textAlign: 'center'}}>Shivajinagar: Apartment</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:12,textAlign:'center'}}>Tasker town</Text></View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1, padding:2}}><Text>1.7km</Text></View>
                        <View style={{flex:1, flexDirection:'row'}}>

                                                <View style={{flex: 1}}><Text>|</Text></View>
                                                <View style={{flex:2}}>

                                                <TextInput.Icon
                                                   style={{}}
                                                   name="car"
                                                   color="blue"
                                                    />
                                                    </View>
                                                        <View style={{flex: 1}}>
                                                        <Text>|</Text>
                                                        </View>
                                                    </View>
                        <View style={{flex:1, flexDirection:'row'}}>
                            <View style={{padding:2}}><Text>Rs. 50.0/-</Text></View>
                            <View><TextInput.Icon
                              name="star"
                              color="red"
                              style={{marginLeft: 30}}
                              /></View>
                            </View>
                    </View>
                    <View style={{flex:1}}><Text style={{fontSize:14, textAlign:'center'}}>Min. Duration: Month</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14, textAlign:'center'}}>Slots Available: 0/1</Text></View>


                    </View>


                </View>


        </View>
    )
}

export default CardLayout;

