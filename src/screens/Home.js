import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
} from 'react-native';
import ItemCards from '../comp/ItemCards';
import R from '../res/R';
import data from '../res/appData.json';
import BottomView from '../comp/BottomView';
import TabContent from '../comp/TabContent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Menu, Divider, Provider} from 'react-native-paper';
import {Button} from 'react-native-elements';

const tabArray = [
  {label: 'What?', icon: 'utensils'},
  {label: 'When?', icon: 'clock'},
  {label: 'Where?', icon: 'map-marker-alt'},
];

const {width, height} = Dimensions.get('window');

export default Home = () => {
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState({});
  const [visible, setVisible] = React.useState(false);

  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onTabPress = (itm) => {
    setOpen(true);
    setTab(itm);
  };
  return (
    <Provider>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>I want to eat...</Text>
          <Text style={styles.caption}>find your favourite food here</Text>
        </View>
        <ItemCards items={data.data[0].list} />
        <View style={styles.bottomBar}>
          {/* <View
          style={{
            position: 'absolute',
            top: 0,
            right: (width - 18) / 2,
          }}>
          <Icon name="chevron-up" size={18} />
        </View> */}
          {tabArray.map((itm, key) => (
            <TouchableNativeFeedback
              key={key}
              onPress={() => onTabPress(itm)}
              background={TouchableNativeFeedback.Ripple(
                'rgba(0,0,0,0.1)',
                true,
                70,
              )}>
              <View>
                <TabContent itm={itm} />
              </View>
            </TouchableNativeFeedback>
          ))}
        </View>
        <BottomView open={open} itm={tab} onClosed={() => setOpen(false)} />
        <TouchableNativeFeedback onPress={openMenu}>
          <View style={styles.cartview}>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              anchor={{x: Dimensions.get('window').width - 0, y: 70}}>
              <Menu.Item onPress={() => {}} title="Item 1" />
              <Menu.Item onPress={() => {}} title="Item 2" />
              <Divider />
              <Menu.Item onPress={() => {}} title="Item 3" />
            </Menu>
          </View>
        </TouchableNativeFeedback>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.background,
  },
  title: {
    fontSize: 20,
    fontFamily: 'Montserrat-Bold',
    color: R.colors.title,
  },
  caption: {
    fontSize: 15,
    fontFamily: 'Montserrat-Bold',
    color: R.colors.caption,
  },
  header: {
    width: '100%',
    height: 120,
    justifyContent: 'flex-end',
    left: 25,
    marginBottom: 10,
    backgroundColor: R.colors.background,
  },
  bottomBar: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    height: 90,
    width: '100%',
    backgroundColor: R.colors.primary,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flexDirection: 'row',
  },
  cartview: {
    position: 'absolute',
    top: 70,
    right: 0,
    elevation: 20,
    width: 70,
    height: 50,
    borderTopLeftRadius: 40,
    borderBottomLeftRadius: 40,
    backgroundColor: R.colors.button,
    overflow: 'hidden',
  },
  menubutton: {height: '100%', backgroundColor: R.colors.trans},
});
