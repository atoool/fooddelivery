import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import R from '../res/R';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default What = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={['Pizza', 'Cake', 'Snacks', 'Burger']}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
        renderItem={({item, index}) => (
          <View style={styles.category}>
            <View style={styles.iconView}>
              <Icon name="pizza-slice" size={25} />
            </View>
            <Text style={styles.iconTxt}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.primary,
    paddingVertical: 20,
    alignItems: 'center',
    paddingRight: 20,
  },
  iconView: {
    height: 120,
    width: 120,
    borderRadius: 120,
    backgroundColor: R.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  iconTxt: {
    fontFamily: 'Montserrat-Medium',
    color: R.colors.caption,
    fontSize: 12,
  },
  category: {
    alignItems: 'center',
    paddingLeft: 30,
    paddingTop: 30,
  },
});
