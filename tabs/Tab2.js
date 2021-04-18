import React from 'react'
import {View, Text, StyleSheet} from 'react-native'
const Tab2 = () => {
    return (
        <View style={styles.container}>
            <Text>Tab2</Text>
        </View>
    )
}

export default Tab2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
