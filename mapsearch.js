/* eslint-disable prettier/prettier */
/* eslint-disable react/self-closing-comp */
import { View, Text, TextInput } from 'react-native';
import React from 'react';
import Placesearch from 'react-native-placesearch';
import {Icon} from 'native-base';



function MapSearch() {
    return (
        <View style={{flex: 1}}>
            <Placesearch 
                apikey='AIzaSyD6BLFMaEH6dW4u-kbTOcnn1rPTVuGuZeU' // required *
                SelectedAddress={(data)=>console.log(data)} // required *
                country ="in" //optional
               
                // coordinate={true} //optional
                // removeImg = {true} //optional
                // InputContainer = {{'your style goes here'}} //optional
                // MainContainer = {{'your style goes here'}} //optional
                // ListStyle = {{}} //optional
                //ListTextStyle = {{}} //optional
                // ListIconStyle = {{'your style goes here'}} //optional
                // ImgStyle = {{'your style goes here'}} //optional
                // Img = {{'your style goes here'}} //optional
                // textInput = {{'your style goes here'}} //optional
                // placeHolder = {{'type any textInput placeholder as you like'}} //optional
                />
        </View>
    )
}

export default MapSearch;
