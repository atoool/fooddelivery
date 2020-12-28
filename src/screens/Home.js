import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableNativeFeedback,
  Dimensions,
  Image,
} from 'react-native';
import ItemCards from '../comp/ItemCards';
import R from '../res/R';
import data from '../res/appData.json';
import BottomView from '../comp/BottomView';
import TabContent from '../comp/TabContent';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {Menu, Divider, Provider, DefaultTheme} from 'react-native-paper';
import {Button} from 'react-native-elements';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import CartList from '../comp/CartList';
import {ContextStates} from '../func/ContextStates';

const tabArray = [
  {label: 'What?', icon: 'utensils'},
  {label: 'When?', icon: 'clock'},
  {label: 'Where?', icon: 'map-marker-alt'},
];

const {width, height} = Dimensions.get('window');

export default Home = () => {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: '#fff',
    },
  };
  const context = React.useContext(ContextStates);
  const [open, setOpen] = React.useState(false);
  const [tab, setTab] = React.useState({});
  const [visible, setVisible] = React.useState(false);
  let [totalPrice, setTotalPrice] = React.useState(0);
  const [cartArray, setCartArray] = React.useState([]);
  const openMenu = () => setVisible(true);

  const closeMenu = () => setVisible(false);
  const onTabPress = (itm) => {
    setOpen(true);
    setTab(itm);
  };

  const addToCart = (item) => {
    const tempObj = {...item, qty: 1};
    const tempArray = [...cartArray, tempObj];
    setCartArray(tempArray);
    tempArray.map((i) => {
      let tempVal = i.qty * i.price;
      totalPrice = totalPrice + tempVal;
      setTotalPrice(JSON.parse(totalPrice.toFixed(2)));
    });
  };

  return (
    <Provider theme={theme}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>I want to eat...</Text>
          <Text style={styles.caption}>find your favourite food here</Text>
        </View>
        <ItemCards
          items={data.data[context.reduState.category].list}
          addToCart={addToCart}
          cartArray={cartArray}
        />
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
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('lightgrey')}
          useForeground={true}
          onPress={openMenu}>
          <View style={styles.cartview}>
            {cartArray.length != 0 && (
              <View
                style={{
                  position: 'absolute',
                  height: 15,
                  width: 15,
                  borderRadius: 15,
                  right: 10,
                  top: 5,
                  backgroundColor: '#28df99',
                  zIndex: 10,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{fontFamily: 'Montserrat-Bold', fontSize: 7}}>
                  {cartArray.length}
                </Text>
              </View>
            )}
            <Icon
              name="shopping-cart"
              color="#fff"
              size={23}
              style={{alignSelf: 'center', marginVertical: (50 - 23) / 2}}
            />
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              style={{width: '95.5%'}}
              anchor={{x: Dimensions.get('window').width, y: 120}}>
              <CartList
                list={cartArray}
                updateCart={(list) => setCartArray([...list])}
                updateTotalPrice={(price) => setTotalPrice(price)}
              />
              <Divider />
              <Button
                title={`order for $${totalPrice}`}
                titleStyle={{fontFamily: 'Montserrat-Bold'}}
                buttonStyle={styles.checkoutBut}
                disabled={cartArray.length == 0}
              />
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
    height: 70,
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
  checkoutBut: {
    margin: 20,
    backgroundColor: '#000',
    borderRadius: 10,
  },
});
