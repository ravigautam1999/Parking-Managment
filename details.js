/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text, Alert } from 'react-native';
import { Button } from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';



const Details = ({navigation}) => {
    const Navigation = useNavigation();
    const route = useRoute();
    
    setTimeout(() => {
        navigation.navigate('Login')
    }, 5000);
    
    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems:'center'}}>
            <Text style={{fontSize: 30}}>Details Page</Text>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('Bottom Tabs')}>Bottom Navigation</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('Top Tabs')}>Top Navigation</Button>
            <View>
                <Button mode="text" uppercase={false} onPress={() => Navigation.goBack()}>Go Back</Button>
                <Button mode="text" uppercase={false} onPress={() => Alert.alert(route.name)}>Root Parent</Button>
            </View>

            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('CardPage')}>Card Page</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('ProfilePage')}>Profile Page</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('CardLayout')}>Card Layout</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('MapPage')}>Map Page</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('DateAndTime')}>Date And Time</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('MapPage2')}>Map Page2</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('InputText')}>InputText</Button>
            <Button mode="text" uppercase={false} onPress={() => navigation.navigate('MapSearch')}>Map Search</Button>
        </View>
    );
};

export default Details;
