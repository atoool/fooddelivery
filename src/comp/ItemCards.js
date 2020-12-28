import * as React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import ItemCard from './ItemCard';
import R from '../res/R';

export default ItemCards = ({items, addToCart, cartArray}) => {
  return (
    <FlatList
      data={items}
      contentContainerStyle={styles.container}
      numColumns={2}
      horizontal={false}
      keyExtractor={(item, index) => item + index.toString()}
      renderItem={({item, index}) => (
        <ItemCard item={item} addToCart={addToCart} cartArray={cartArray} />
      )}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: R.colors.background,
    paddingLeft: 20,
    paddingTop: 20,
  },
});
