import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import What from '../screens/What';
import When from '../screens/When';
import Where from '../screens/Where';
import {StyleSheet, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import R from '../res/R';

const Tab = createMaterialTopTabNavigator();
const {width, height} = Dimensions.get('window');
export default function TopNavig() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        style: styles.bottomBar,
        showIcon: true,
        labelStyle: styles.tabLabel,
        activeTintColor: R.colors.button,
        inactiveTintColor: R.colors.tabIcon,
        indicatorStyle: {backgroundColor: R.colors.button},
      }}>
      <Tab.Screen
        name="What"
        component={What}
        options={{
          tabBarLabel: 'What?',
          tabBarIcon: ({color}) => (
            <Icon name="utensils" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="When"
        component={When}
        options={{
          tabBarLabel: 'When?',
          tabBarIcon: ({color}) => (
            <Icon name="clock" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Where"
        component={Where}
        options={{
          tabBarLabel: 'Where?',
          tabBarIcon: ({color}) => (
            <Icon name="map-marker-alt" size={20} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    elevation: 20,
    height: height - 120,
    width,
    overflow: 'hidden',
  },
  bottomBar: {
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
    height: 80,
    width: '100%',
    backgroundColor: R.colors.primary,
    // position: 'absolute',
    top: 0,
    justifyContent: 'space-evenly',
  },
  tabIcon: {
    bottom: 5,
  },
  tabLabel: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 12,
  },
});
