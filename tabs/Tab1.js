/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */

import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {TextInput, Colors} from 'react-native-paper'
const Tab1 = () => {
     
     const [lists, setLists] = useState([
         {id: 1, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},
         {id: 2, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},
         {id: 3, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},
         {id: 4, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},
         {id: 5, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},
         {id: 6, ParkingName: "Big Bazar", StartTime: "13 Mar'20, 01:10AM", EndTime: "14 Mar'20, 05:10PM", BookingId: "1234", VehicleNo: "2344", Amount: "3445Rs"},


     ]); 

    return (
        <View style={{flex: 1}}>
         <ScrollView horizontal={false} style={{flex: 1}}>

         {lists.map(list => (
            <View
                key={list.id}
                style={{
                    flex:2,
                      
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
                        style={{width:165, height:170,}}
                        resizeMethod='auto'
                        source={require('../images/carpark.jpg')
                        }/>
                    </View>

                    <View
                    
                    style={{
                        flex:6,

                        padding:10

                    }}
                    >
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Parking Name: {list.ParkingName} </Text></View>
                    
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Start time: {list.StartTime}</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>End time: {list.EndTime}</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Booking Id: {list.BookingId}</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Vehicle No: {list.VehicleNo}</Text></View>
                    <View style={{flex:1}}><Text style={{fontSize:14}}>Amount: {list.Amount}</Text></View>
                    
                    
                    

                    </View>


                </View>

          ))}
         </ScrollView>
          
            
        </View>
    )
}

export default Tab1;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'baseline'
    }
});

