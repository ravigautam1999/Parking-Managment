/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react'
import { View, Text, Alert, Image } from 'react-native'
import { Button,TextInput, Checkbox } from 'react-native-paper'
import {useNavigation, useRoute,} from '@react-navigation/native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'


const CardPage = () => {

    const [checked, setChecked] = useState(false)
    return (
            <View
            style={{
                flex: 1,
                flexDirection:'column',
                overflow:'hidden'

            }}
            >
                <View
                style={{
                    flex:3,

                    flexDirection:'row',
                    marginBottom:10,
                    marginEnd:5,
                    marginStart:5,
                    marginTop: 0,
                    borderBottomRightRadius:15,
                    borderBottomLeftRadius:15,
                    padding:10,
                    minHeight:100,
                    maxHeight:200,

                    shadowColor: '#000',
                    shadowOffset: { width: 1, height: 1 },
                    shadowOpacity:  0.4,
                    shadowRadius: 5,
                    elevation: 7,



                }}
                >
                    <View
                    style={{
                     flex:5,

                    }}
                    >
                        <Image
                        style={{width:156, height:170,}}
                        resizeMethod='auto'
                        source={require('./images/carparking.webp')
                        }/>
                    </View>

                    <View
                    style={{
                        flex:6,

                        padding:10

                    }}
                    >
                    <View style={{flex:1}}><Text style={{fontSize:15, textAlign:'center'}}>Shivajinagar: Apartment</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:12,textAlign:'center'}}>Tasker town</Text></View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <View style={{flex:1, padding:2}}><Text>1.7km</Text></View>
                        <View style={{flex:1, flexDirection:'row'}}>

                                                <View style={{flex: 1}}><Text>|</Text></View>
                                                <View style={{flex:2}}><TextInput.Icon
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
                            <View style={{padding:2}}><Text>3.4/5</Text></View>
                            <View><TextInput.Icon
                              name="star"
                              color="red"
                              /></View>
                            </View>
                    </View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Start time:13Mar'20, 01:10AM</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>End time:14Mar'20, 05:10PM</Text></View>


                    </View>


                </View>


                <View
                style={{
                    flex:4,


                }}

                >
                <ScrollView>
                <View>
                    <View>
                    <TextInput


                   right={
                       <TextInput.Icon
                           style={{marginTop:12}}
                           name="gift"
                           onPress={() => {}}
                       />}
                   mode="outlined"
                   label="Enter Promo code"
                   style={{height: 35, marginRight: 30, marginLeft: 30, marginBottom: 5, marginTop: 10}}
                   passwordRules={true}
                   keyboardAppearance="dark"
                   onChangeText={(Text) => {SetUserName(Text)}}

                   />
                   <TextInput


                   right={
                       <TextInput.Icon
                           style={{marginTop:12}}
                           name="account"
                           onPress={() => {}}
                       />}
                   mode="outlined"
                   label="Full Name"
                   style={{height: 35, marginRight: 30, marginLeft: 30, marginBottom: 5, marginTop: 0}}
                   passwordRules={true}
                   keyboardAppearance="dark"
                   onChangeText={(Text) => {SetUserName(Text)}}

                   />
                   <TextInput


                   right={
                       <TextInput.Icon
                           style={{marginTop:12}}
                           name="email"
                           onPress={() => {}}
                       />}
                   mode="outlined"
                   label="Email Id"
                   style={{height: 35, marginRight: 30, marginLeft: 30, marginBottom: 5, marginTop: 0}}
                   passwordRules={true}
                   keyboardAppearance="dark"
                   onChangeText={(Text) => {SetUserName(Text)}}

                   />
                   <TextInput


                   right={
                       <TextInput.Icon
                           style={{marginTop:12}}
                           name="phone"
                           onPress={() => {}}
                       />}
                   mode="outlined"
                   label="Mobile No"
                   style={{height: 35, marginRight: 30, marginLeft: 30, marginBottom: 5, marginTop: 0}}
                   passwordRules={true}
                   keyboardAppearance="dark"
                   onChangeText={(Text) => {SetUserName(Text)}}

                   />
                   <TextInput


                   right={
                       <TextInput.Icon
                           style={{marginTop:12,}}
                           name="car"


                           onPress={() => {}}
                       />}
                   mode="outlined"
                   label="Vehicle No"
                   style={{height: 35, marginRight: 30, marginLeft: 30, marginBottom: 5, marginTop: 0}}
                   passwordRules={true}
                   keyboardAppearance="dark"
                   onChangeText={(Text) => {SetUserName(Text)}}

                   />
                    </View>

                 <View style={{padding: 10, margin:10}}><Text style={{fontSize: 20, fontWeight:'bold'}}>Bill Details</Text></View>
                 <View
                style={{
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
                    marginBottom: 10,

                }}


             />
                 <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 0}}><View style={{flex: 1}}><Text>Total</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>0.0</Text></View></View>
                 <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 0}}><View style={{flex: 1}}><Text>Discount</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>0.0</Text></View></View>
                 <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 0}}><View style={{flex: 1}}><Text>Taxes and charges</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>0.0</Text></View></View>
                 <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 0}}><View style={{flex: 1}}><Text>To Pay</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>0.0</Text></View></View>



                <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 25, marginBottom: 30}}>

                    <View style={{flex: 1,flexDirection: 'row',padding: 10, marginRight:5, borderTopStartRadius: 10,borderBottomStartRadius: 10, backgroundColor: 'white', height: 60, justifyContent: 'center', alignContent:'center'}}>
                    <View style={{flex: 1,}}>
                        <Checkbox
                            status= {checked ? 'checked': 'unchecked'}
                            onPress={() => {
                                setChecked(!checked)
                            }}

                        />
                    </View>
                    <View style={{flex: 3,}}>
                        <Text>Agree to TnC</Text>
                        <Text style={{fontWeight: 'bold'}} onPress={() => {

                                Alert.alert(
                                    "Terms and Conditions",
                                    "All Terms and conditions here!!",
                                    [
                                        {
                                        text: "Cancel",
                                        onPress: () => console.log("Cancel Pressed"),
                                        style: "cancel"
                                        },
                                        { text: "OK", onPress: () => console.log("OK Pressed") }
                                    ]
                                    );
                        }}>Tab to see</Text>
                    </View>

                    </View>
                    <View style={{flex: 1}}>
                        <TouchableOpacity style={{ flex: 1,  borderTopEndRadius: 10, borderBottomEndRadius: 10, backgroundColor: 'grey', height: 60, justifyContent: 'center', alignContent:'center'}}><Text style={{padding: 10, fontWeight:'bold'}}>Proceed To Book</Text></TouchableOpacity>
                    </View>
                </View>
                </View>


                </ScrollView>

                </View>

            </View>
    )
}

export default CardPage;
