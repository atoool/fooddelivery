import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import R from '../res/R';
import Calendar from 'react-native-calendar-strip';
import {WheelPicker} from 'react-native-wheel-picker-android';

const wheelPickerData = [
  '09.00 AM',
  '10.00 AM',
  '11.00 AM',
  '12.00 PM',
  '01.00 PM',
  '02.00 PM',
  '03.00 PM',
  '04.00 PM',
  '05.00 PM',
  '06.00 PM',
];

export default When = () => {
  const [selectedTime, setSelectedTime] = React.useState(0);
  const onTimeSelected = (selectedItem) => {
    setSelectedTime(selectedItem);
  };
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
