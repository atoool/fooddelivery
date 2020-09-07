import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import R from '../res/R';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {RadioButton} from 'react-native-paper';

export default Where = () => {
  const [checked, setChecked] = React.useState();
  return (
    <View style={styles.container}>
      <View style={styles.head}>
        <Icon name="store" color={R.colors.tabIcon} size={30} />
        <View>
          <Text style={styles.headTitle}>Which shop?</Text>
          <Text style={styles.headCaption}>
            Take away your favourite food from here
          </Text>
        </View>
      </View>

      <View style={styles.radiobutton}>
        <RadioButton.Group>
          <RadioButton.Item
            value="0"
            label="Ally's Baking house, puthennveetil building,colg. junc p.o, kothamangalam"
            labelStyle={styles.labelStyle}
            status={checked === '0' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
            color={R.colors.tabIcon}
            uncheckedColor={R.colors.tabIcon}
            style={{marginVertical: 20}}
          />
        </RadioButton.Group>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.primary,
  },
  head: {
    flexDirection: 'row',
    marginTop: 30,
    margin: 20,
  },
  headTitle: {
    fontFamily: 'Montserrat-Bold',
    color: R.colors.tabIcon,
    fontSize: 14,
    marginLeft: 10,
  },
  headCaption: {
    fontFamily: 'Montserrat-Medium',
    color: R.colors.tabIcon,
    fontSize: 12,
    marginLeft: 10,
  },
  radiobutton: {
    margin: 20,
    marginTop: 10,
    elevation: 5,
    backgroundColor: R.colors.primary,
    borderRadius: 15,
    overflow: 'hidden',
  },
  labelStyle: {
    position: 'absolute',
    marginLeft: 60,
    fontFamily: 'Montserrat-Bold',
    color: R.colors.tabIcon,
    fontSize: 14,
    width: Dimensions.get('window').width - 120,
  },
});
