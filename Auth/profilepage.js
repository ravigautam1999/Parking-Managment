/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TextInput, Button, Colors, shadow, Avatar} from 'react-native-paper';
import {Text, View, ScrollView,TouchableOpacity } from 'react-native';



const Profilepage = () => {
    return (
        <View style={{flex: 1, flexDirection: 'column', backgroundColor:Colors.lightBlue200}}>
            <View style={{  flex: 2,
                            flexDirection: 'row',
                            backgroundColor:Colors.green200,
                            borderBottomLeftRadius:30,
                            borderBottomRightRadius: 30,
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.73,
                            shadowRadius: 4.51,

                            elevation: 8,

                            }}>
                <View style={{
                    flex: 3,
                    padding: 20,

                    }}>
                     <TouchableOpacity><Avatar.Image size= {170} source={require('../images/accountmale.png')}
                         style={{
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.73,
                            shadowRadius: 4.51,

                            elevation: 20,
                         }}
                     />
                     </TouchableOpacity>
                </View>
                <View style={{flex: 2}}>
                    <View style={{flex: 1, justifyContent:'center', alignItems:'center'}}><Text>Name</Text></View>
                    <View style={{flex:1, justifyContent:'flex-start', alignItems:'center'}}><TouchableOpacity style={{
                        width: 100,
                        backgroundColor: Colors.red200,
                        height: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 30,
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,

                        elevation: 20,

                    }}>
                        <Text>Sign Out</Text>
                    </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{flex: 3}}>
            <ScrollView>

                <View style={{flex: 1}}>

                <View style={{padding: 10, margin:10}}><Text style={{fontSize: 20, fontWeight:'bold'}}>User Details</Text></View>
                <View
                style={{
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
                    marginBottom: 20,
                }}


             />
                    <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5, padding: 10}}><View style={{flex: 1}}><Text>User Name</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>--</Text></View></View>
                    <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5, padding: 10}}><View style={{flex: 1}}><Text>Email Id</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>--</Text></View></View>
                    <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5, padding: 10}}><View style={{flex: 1}}><Text>Mobile No</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>--</Text></View></View>
                    <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 5, padding: 10}}><View style={{flex: 1}}><Text>Vehicle No</Text></View><View style={{flex: 1}}><Text style={{textAlign:'right'}}>--</Text></View></View>


                </View>

                <View style={{padding: 10, margin:10}}><Text style={{fontSize: 20, fontWeight:'bold'}}>Settings</Text></View>
                <View
                style={{
                    borderBottomColor:'black',
                    borderBottomWidth: 1,
                    marginBottom: 20,
                }}


             />
             <View style={{flex:1, flexDirection: 'row', alignContent:'space-between', marginLeft: 20, marginRight: 20, marginTop: 5, marginBottom: 30, padding: 10}}><View style={{flex: 1, padding: 10}}><Text>Rent out</Text></View><View style={{flex: 1}}>
             <TouchableOpacity style={{
                        width: 100,
                        backgroundColor: Colors.blue500,
                        height: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius: 30,
                        alignSelf:'flex-end',
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,

                        elevation: 20,


                    }}>
                        <Text style={{color: 'black'}}>Rent</Text>
                    </TouchableOpacity>
             </View></View>
            </ScrollView>

            </View>
        </View>
    )
}

export default Profilepage;


