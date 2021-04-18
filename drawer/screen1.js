/* eslint-disable prettier/prettier */
import React from 'react'
import { View, Text, FlatList } from 'react-native'

const Screen1 = () => {

    
    return (
        <View>
           <FlatList
    style={styles.videos_flatList}
    horizontal={true}
    data={data1}
    renderItem={({item}) => 
    

        <RowItem/>
    }

    ItemSeparatorComponent={() => {
        return (
            <View
                style={{
                height: "100%",
                width: 20,
                backgroundColor: "#CED0CE",

                }}
            />
        );
    }}

    keyExtractor={(item, index) => index.toString()}
/>
        </View>
    )
}

export default Screen1
