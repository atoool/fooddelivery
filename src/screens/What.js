import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableNativeFeedback,
} from 'react-native';
import R from '../res/R';
import Icon from 'react-native-vector-icons/FontAwesome5';
import data from '../res/appData.json';
import {ContextStates} from '../func/ContextStates';

export default What = () => {
  const context = React.useContext(ContextStates);
  let {category} = context.reduState;
  const {dispatch} = context;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.data}
        keyExtractor={(item, index) => index.toString()}
        horizontal={false}
        numColumns={2}
        extraData={category}
        renderItem={({item, index}) => (
          <View style={styles.category}>
            <TouchableNativeFeedback
              useForeground
              onPress={async () =>
                await dispatch({
                  type: 'changeCategory',
                  payload: index,
                })
              }>
              <View
                style={[
                  styles.iconView,
                  {
                    borderWidth: 2,
                    borderColor: category == index ? '#000' : R.colors.trans,
                  },
                ]}>
                <Icon
                  name={
                    item.category == 'Pizza'
                      ? 'pizza-slice'
                      : item.category == 'Cake'
                      ? 'birthday-cake'
                      : item.category == 'Burger'
                      ? 'hamburger'
                      : 'cookie-bite'
                  }
                  size={25}
                  color={category == index ? '#000' : R.colors.tabIcon}
                />
              </View>
            </TouchableNativeFeedback>
            <Text
              style={[
                styles.iconTxt,
                {color: category == index ? '#000' : R.colors.tabIcon},
              ]}>
              {item.category}
            </Text>
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
    overflow: 'hidden',
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
