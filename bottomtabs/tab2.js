/* eslint-disable prettier/prettier */
import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

const BottomTab2 = () => {
    return (
        <View style={styles.container}>
          <Text>BottomTab2</Text>  
        </View>
    )
}

export default BottomTab2;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
