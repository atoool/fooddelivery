import * as React from 'react';
import {View, Text, StyleSheet, ScrollView, Image} from 'react-native';
import R from '../res/R';
import {Button} from 'react-native-elements';

const icon1 = {name: 'remove', type: 'fontAwesome', size: 15, color: '#bbbfca'};
const icon2 = {name: 'add', type: 'fontAwesome', size: 15, color: '#bbbfca'};
export default CartList = ({list, updateCart, updateTotalPrice}) => {
  const onQtyChange = (indx, val) => {
    let tempList = list;
    tempList[indx].qty = tempList[indx].qty + val;
    if (tempList[indx].qty == 0) {
      let temp = tempList.filter((i) => i.name != tempList[indx].name);
      tempList = [...temp];
    }
    updateCart(tempList);
    let totalPrice = 0;
    tempList.map((i) => {
      let tempVal = i.qty * i.price;
      totalPrice = totalPrice + tempVal;
    });
    updateTotalPrice(JSON.parse(totalPrice.toFixed(2)));
  };
  return (
    <ScrollView style={styles.container}>
      {list &&
        list.map((itm, indx) => (
          <View key={indx} style={styles.listView}>
            <View style={styles.row}>
              <Image style={styles.img} source={{uri: itm.imgs}} />
              <View>
                <Text style={styles.mainText}>{itm.name}</Text>
                <Text style={styles.capText}>{itm.price}</Text>
              </View>
            </View>
            <View style={[styles.row, {right: 20}]}>
              <Button
                icon={icon1}
                buttonStyle={styles.qtyBut}
                onPress={() => onQtyChange(indx, -1)}
              />
              <Text style={styles.mainText}>{itm.qty}</Text>
              <Button
                icon={icon2}
                buttonStyle={styles.qtyBut}
                onPress={() => onQtyChange(indx, 1)}
              />
            </View>
          </View>
        ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  listView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  row: {flexDirection: 'row', alignItems: 'center'},
  img: {width: 45, height: 40, borderRadius: 5},
  mainText: {
    color: R.colors.tabIcon,
    fontFamily: 'Montserrat-Bold',
    marginHorizontal: 10,
  },
  capText: {
    color: R.colors.caption,
    fontFamily: 'Montserrat-Bold',
    marginLeft: 10,
  },
  qtyBut: {
    borderRadius: 35,
    height: 30,
    width: 30,
    padding: 0,
    backgroundColor: '#eff8ff',
  },
});
