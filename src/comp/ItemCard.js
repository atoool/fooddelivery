import * as React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import R from '../res/R';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Button} from 'react-native-elements';

const {width, height} = Dimensions.get('window');

export default ItemCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.price}>{item.price}</Text>
      <Image style={styles.img} source={{uri: item.imgs}} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.caption}>{item.desc}</Text>
      <Button
        title="ADD TO CART"
        titleStyle={styles.btnTitle}
        buttonStyle={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: R.colors.primary,
    width: (width - 60) / 2,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 20,
    marginBottom: 20,
    elevation: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    color: R.colors.title,
    fontSize: 15,
    marginTop: 10,
    marginBottom: 5,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  caption: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: R.colors.caption,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    color: R.colors.primary,
    fontSize: 12,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
    backgroundColor: R.colors.button,
    width: 60,
    height: 30,
    borderBottomLeftRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    elevation: 20,
  },
  img: {width: (width - 60) / 2, height: (width - 60) / 2},
  button: {
    borderRadius: 10,
    backgroundColor: R.colors.button,
    marginBottom: 10,
    paddingHorizontal: 20,
  },
  btnTitle: {fontFamily: 'Montserrat-Medium', fontSize: 12},
});
