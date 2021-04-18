import React, {useState} from 'react';
import {View, Button, Platform, Text, TextInput} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {Colors} from 'react-native-paper'
import Icon from 'react-native-vector-icons/FontAwesome'

export default function DateAndTime() {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [currentDate, setCurrentDate] = useState(date)
  const [currentDate1, setCurrentDate1] = useState("")

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
    setCurrentDate1(date.toUTCString())
  };

  const showTimepicker = () => {
    showMode('time');
  };

  const onPressHandler = () => {
      showMode('date')
      showMode('time')
  }

  
  console.log(date.toUTCString())
  
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
    <View style={{flex: 1}}>
        <View>
            <Button onPress={showDatepicker} title="Show date picker!" />
          </View>
          <View>
            <Button onPress={showTimepicker} title="Show time picker!" />
          </View>

          <View>
            <Text>{currentDate.getTime()}</Text>
            <Text>{currentDate.getDay()}</Text>
            <Text>{currentDate.getHours()}</Text>
            <Text>{currentDate.getMonth()}</Text>
            <Text>{currentDate.getDate()}</Text>
            <Text>{currentDate1}</Text>
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
        </View>

        
      
    </View>
  );
};