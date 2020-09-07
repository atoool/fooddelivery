import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import R from '../res/R';

export default TabContent = ({itm}) => {
  return (
    <View style={styles.container}>
      <Icon
        name={itm.icon}
        size={20}
        style={styles.tabIcon}
        color={R.colors.tabIcon}
      />
      <Text style={styles.tabLabel}>{itm.label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 90,
    height: 90,
    borderRadius: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontFamily: 'Montserrat-Medium',
    textAlign: 'center',
    fontSize: 12,
    color: R.colors.tabIcon,
  },
  tabIcon: {
    bottom: 10,
  },
});
