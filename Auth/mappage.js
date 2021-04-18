/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';
import {Colors} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons'
import DateTimePicker from '@react-native-community/datetimepicker';

import {FOOD, MOVIE, LEGO, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,l13, l14, l15, l16, l17, l18, l19, l20, l21, l22} from '../Auth/allvenue';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, MapViewAnimated } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import { set } from 'react-native-reanimated';
import { ScrollView } from 'react-native-gesture-handler';

const MapPage = ({navigation}) => {

    const [lists, setLists] = useState([
        {id: 1, image: "", name: "", loc: l1},
        {id: 2, image: "", name: "", loc: l2},
        {id: 3, image: "", name: "", loc: l3},
        {id: 4, image: "", name: "", loc: l4},
        {id: 5, image: "", name: "", loc: l5},

    ])

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
    const [state1, setState1] = useState({
        date1:date,
        date2:date,
    })

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = (currentMode) => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker1 = () => {
        showMode('date');
       
        
    };
    const showDatepicker2 = () => {
        showMode('date');
        
        
    };

    const showTimepicker = () => {
        showMode('time');
    };





    const [val, setVal] = useState(0.0524)
    const [state, setState] = useState(
        {
            latitude: 28.669155,
            longitude: 77.453758,
            latitudeDelta: 0.2105,
            longitudeDelta: 0.2105,

        }
    )   

    const zoomIn = () => {
         setState({
             latitude: state.latitude,
             longitude: state.longitude,
             longitudeDelta: Math.abs(state.latitudeDelta - 0.0524),
             latitudeDelta: Math.abs(state.latitudeDelta - 0.0524),
         }) 
    }

    const zoomOut = () => {
        setState({
            latitude: state.latitude,
            longitude: state.longitude,
            longitudeDelta: Math.abs(state.latitudeDelta + 0.0524),
            latitudeDelta: Math.abs(state.latitudeDelta + 0.0524),
        }) 
   }

    return (
        <View style={{flex: 1}}>
            <View style={{flex: 5}}><MapView 
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
                latitude: state.latitude,
                longitude: state.longitude,
                latitudeDelta: state.latitudeDelta,
                longitudeDelta: state.longitudeDelta,
            }}
            >
            <Marker coordinate={FOOD}/>
            <Marker coordinate={MOVIE}/>
            <Marker coordinate={LEGO}/>
            <Marker coordinate={l1}/>
            <Marker coordinate={l2}/>
            <Marker coordinate={l3}/>
            <Marker coordinate={l4}/>
            <Marker coordinate={l5}/>
            <Marker coordinate={l6}/>
            <Marker coordinate={l7}/>
            <Marker coordinate={l8}/>
            <Marker coordinate={l9}/>
            <Marker coordinate={l10}/>
            <Marker coordinate={l11}/>
            <Marker coordinate={l12}/>
            <Marker coordinate={l13}/>
            <Marker coordinate={l14}/>
            <Marker coordinate={l15}/>
            <Marker coordinate={l16}/>
            <Marker coordinate={l17}/>
            <Marker coordinate={l18}/>
            <Marker coordinate={l19}/>
            <Marker coordinate={l20}/>
            <Marker coordinate={l21}/>
            <Marker coordinate={l22}/>
            


            </MapView>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-end', alignItems:'flex-end'}}>
                <View><TouchableOpacity
                 onPress={zoomIn}
                 style={{
                            width:30 ,
                            backgroundColor: 'white',
                            height: 30,
                            justifyContent: 'center',
                            alignItems:'center',
                            borderBottomStartRadius:30,
                            borderTopStartRadius:30,
                            
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.73,
                            shadowRadius: 4.51,
                            
                            elevation: 20,
                            
                        }}>
                            <Text>+</Text>
                        </TouchableOpacity>
                        </View>
                    <View><TouchableOpacity 
                    onPress={zoomOut}
                    style={{
                        width:30 ,
                        backgroundColor: 'white',
                        height: 30,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderBottomEndRadius:30,
                        borderTopEndRadius:30,
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,

                        elevation: 20,

                    }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
            </View>
        <View style={{flex: 4, marginTop: 10, marginLeft: 5, marginRight: 5, backgroundColor: Colors.green200}}>

        <View style={{flex:1,flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}>
                <View style={{flex: 5}}><TouchableOpacity
                 onPress={() => {}}
                 style={{
                             
                            backgroundColor: Colors.grey300,
                            height: 50,
                            justifyContent: 'center',
                            alignItems:'center',
                            borderBottomStartRadius:8,
                            borderTopStartRadius:8,
                            
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.73,
                            shadowRadius: 4.51,
                            
                            elevation: 3,
                            
                        }}>
                            <Text style={{fontSize: 18}}>Search Parking Area</Text>
                        </TouchableOpacity>
                        </View>
                    <View style={{flex: 1}}><TouchableOpacity 
                    onPress={()=> {}}
                    style={{
                       
                        backgroundColor: Colors.grey300,
                        height: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderBottomEndRadius:8,
                        borderTopEndRadius:8,
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,
                        
                        elevation: 4,

                    }}>
                        <Icon.Button style={{flex: 1}} onPress={() => console.log("search")} name="my-location" backgroundColor= {Colors.grey300} color="black"/>
                    </TouchableOpacity>
                    </View>
                </View>
            <View style={{flex: 1,padding: 4, flexDirection: 'row'}}>
                    <View style={{flex: 1}}><Text>{date.toUTCString()}</Text></View>
                    <View style={{flex: 1}}><Text>{date.toUTCString()}</Text></View>
                    <View style={{flex: 1}}></View>

            </View>
            <View style={{flex:1,flexDirection:'row', justifyContent:'flex-start', alignItems:'flex-start'}}>
                <View style={{flex: 1}}><TouchableOpacity
                 onPress={showDatepicker1}
                 style={{
                             
                            backgroundColor: Colors.grey300,
                            height: 50,
                            justifyContent: 'center',
                            alignItems:'center',
                            borderRadius:8,
                            
                            
                            shadowColor: Colors.black,
                            shadowOffset:{
                                width: 0,
                                height: 7,
                            },
                            shadowOpacity: 0.73,
                            shadowRadius: 4.51,
                            
                            elevation: 3,
                            
                        }}>
                            <Text style={{}}>Start Time</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}><TouchableOpacity 
                    onPress={showDatepicker2}
                    style={{
                       
                        backgroundColor: Colors.grey300,
                        height: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius:8,
                        marginLeft: 4,
                        marginRight: 4,
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,
                        
                        elevation: 4,

                    }}>
                        <Text>End Time</Text>
                    </TouchableOpacity>
                    </View>

                    <View style={{flex: 1}}><TouchableOpacity 
                    onPress={() => navigation.navigate('MapPage2')}
                    style={{
                       
                        backgroundColor: Colors.blue400,
                        height: 50,
                        justifyContent: 'center',
                        alignItems:'center',
                        borderRadius:8,
                        
                        shadowColor: Colors.black,
                        shadowOffset:{
                            width: 0,
                            height: 7,
                        },
                        shadowOpacity: 0.73,
                        shadowRadius: 4.51,
                        
                        elevation: 4,

                    }}>
                        <Text>Book</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
              
                    {show && (
                        <DateTimePicker
                        testID="dateTimePicker"
                        value={date}
                        mode={mode}
                        is24Hour={false}
                        display="spinner"
                        onChange={onChange}
                        onTouchCancel={console.log('cancel')}
                        
                        />
                    )}

                    <View style={{flex: 2}}>
                        
                        <ScrollView
                        horizontal={true}
                        style={{paddingTop: 10, paddingBottom: 10}}
                        > 
                        {lists.map(list => (
                            <TouchableOpacity 
                            onPress={() => 
                                setState({
                                    latitude: list.loc.latitude,
                                    longitude: list.loc.longitude,
                                    latitudeDelta: list.loc.latitudeDelta,
                                    longitudeDelta: list.loc.longitudeDelta,
                                })
                            }
                            key={list.id} style={{width:159,marginLeft: 5, height: `100%`, backgroundColor:Colors.blueGrey400, borderRadius:10, justifyContent:'center', alignItems: 'center',
                             
                            shadowColor: Colors.black,
                                shadowOffset:{
                                    width: 0,
                                    height: 7,
                                },
                                shadowOpacity: 0.73,
                                shadowRadius: 4.51,
                                
                                elevation: 4,
                            }}>
                          <Text> name of the place</Text>
                       </TouchableOpacity>
                        ))} 

                       

                       



                        </ScrollView>
                    </View>

           
        </View>
   </View>
    )
}

export default MapPage;

const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      height: 400,
      width: 400,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
   });
   
