/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Animated} from 'react-native';
import {Colors,TextInput} from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/FontAwesome5';
import {FOOD, MOVIE, LEGO, l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12,l13, l14, l15, l16, l17, l18, l19, l20, l21, l22} from '../Auth/allvenue';
import MapView, { PROVIDER_GOOGLE, Marker, AnimatedRegion, MapViewAnimated } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {ScrollView} from 'react-native-gesture-handler'
const MapPage2 = ({navigation}) => {

      const [items, setItems] = useState([
          {id:1,  loc: l1, name:"Shvajinagar Apartment", town:"Tasker", distance: "1.7km", price: 50, duration: 'Month', slot: '0/1'},
          {id:2,  loc: l2, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:3,  loc: l3, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:4,  loc: l4, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:5,  loc: l5, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:6,  loc: l6, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:7,  loc: l7, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:8,  loc: l8, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:9,  loc: l9, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:10, loc: l10, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:11, loc: l11, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:12, loc: l12, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:13, loc: l13, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:14, loc: l14, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:15, loc: l15, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:16, loc: l16, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:17, loc: l17, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:18, loc: l18, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:19, loc: l19, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:20, loc: l20, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:21, loc: l21, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
          {id:22, loc: l22, name:"", town:"", distance: "", price: 0, duration: 'Month', slot: '0/1'},
      ])



    const list = items.map((item) => {




    });





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

   const onSelect = (page) => {

    console.log( `${page.id}`)
    console.log( `${page.loc.latitude}`)
   }

    return (
        <View style={{flex: 1, backgroundColor: Colors.green200}} >
            <View style={{flex: 8}}><MapView
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
                <View>
                <TouchableOpacity
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

                            elevation: 7,

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

                        elevation: 7,

                    }}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    </View>
                    </View>
            </View>
        <View style={{flex: 4}}>
            <ScrollView horizontal={true} style={{flex: 1, padding: 10, margin:5}}>

                 {items.map(item =>
                 (<View key={item.id}>
                        <TouchableOpacity style={{width: 350, height: `100%`, }} key={item.id}


                        //onPress={() => onSelect(item)}

                        onPress={() => navigation.navigate("CardPage") }
                        >
                            <View
                            style={{
                                flex:2,
                                backgroundColor: Colors.lightBlue200,
                                flexDirection:'row',
                                marginBottom:10,
                                marginEnd:4,
                                marginStart:0,
                                marginTop: 0,
                                borderRadius:15,

                                padding:3,
                                minHeight:100,
                                maxHeight:200,

                                shadowColor: '#000',
                                shadowOffset: { width: 1, height: 1 },
                                shadowOpacity:  0.4,
                                shadowRadius: 3,
                                elevation: 7,




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

                                    padding:10,

                                }}
                                >
                                <View style={{flex:1}}><Text style={{fontSize:18, textAlign: 'center'}}>Shivajinagar: Apartment</Text></View>
                                <View style={{flex:1}}><Text style={{fontSize:12,textAlign:'center'}}>Tasker town</Text></View>
                                <View style={{flex:1, flexDirection:'row'}}>
                                    <View style={{flex:1, padding:2, flexDirection: 'row'}}>
                                        <View style={{flex: 1}}><Text>1.7km</Text></View>
                                        <View style={{flex:1 }}><Icon1 name="walking" size={20} color="blue"/></View>
                                    </View>
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
                                        <View style={{marginLeft: 10 }}>
                                            <Icon name="dollar" size={20} color="blue" />
                                        </View>
                                        </View>
                                </View>
                                <View style={{flex:1}}><Text style={{fontSize:14, textAlign:'center'}}>Min. Duration: Month</Text></View>
                                <View style={{flex:1}}><Text style={{fontSize:14, textAlign:'center'}}>Slots Available: 0/1</Text></View>


                                </View>


                            </View>
                        </TouchableOpacity>
                 </View>)
                 )}

            </ScrollView>





        </View>
   </View>
    )
}

export default MapPage2;

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

