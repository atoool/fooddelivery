import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from '../res/R';
import Calendar from 'react-native-calendar-strip';
import {WheelPicker} from 'react-native-wheel-picker-android';
import {useFocusEffect} from '@react-navigation/native';

let wheelPickerData = [
  '09.00',
  '10.00',
  '11.00',
  '12.00',
  '13.00',
  '14.00',
  '15.00',
  '16.00',
  '17.00',
  '18.00',
];

export default When = () => {
  const [selectedTime, setSelectedTime] = React.useState(0);
  const onTimeSelected = (selectedItem) => {
    setSelectedTime(selectedItem);
  };
  useFocusEffect(() => {
    let timeNow = new Date().toLocaleTimeString().slice(0, 2);
    let hourNow = JSON.parse(timeNow);
    let hourAfter = hourNow + 2;
    console.warn(hourAfter);

    let data = wheelPickerData.filter(
      (itm, i) => `${hourAfter}` < itm.slice(0, 2),
    );
    wheelPickerData = [...data];
  }, []);
  return (
    <View style={styles.container}>
      <Calendar
        scrollable
        style={{
          height: 150,
          paddingTop: 20,
          paddingBottom: 10,
          borderRadius: 20,
          width: '100%',
        }}
        calendarColor={R.colors.primary}
        calendarHeaderStyle={{
          color: R.colors.button,
          fontSize: 18,
          fontFamily: 'Montserrat-Bold',
        }}
        dateNumberStyle={{
          color: R.colors.button,
          fontSize: 15,
          fontFamily: 'Montserrat-Bold',
        }}
        dateNameStyle={{
          color: R.colors.button,
          fontSize: 10,
          fontFamily: 'Montserrat-Bold',
        }}
        iconContainer={{flex: 0.1}}
        selectedDate={new Date()}
        minDate={new Date()}
        highlightDateNumberStyle={{color: R.colors.theme}}
        highlightDateNameStyle={{color: R.colors.theme}}
      />
      <WheelPicker
        selectedItem={selectedTime}
        data={wheelPickerData}
        onItemSelected={onTimeSelected}
        selectedItemTextFontFamily="Montserrat-Bold"
        selectedItemTextColor={R.colors.theme}
        itemTextFontFamily="Montserrat-Bold"
        indicatorColor={R.colors.caption}
        indicatorWidth={0.5}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.primary,
    padding: 20,
    alignItems: 'center',
  },
});
