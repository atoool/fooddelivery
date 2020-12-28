import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RBSheet from 'react-native-modalbox';
import R from '../res/R';
import TopNavig from '../navig/TopNavig';
import {Button} from 'react-native-elements';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const {width, height} = Dimensions.get('window');
const tabArray = [
  {label: 'What?', icon: 'utensils'},
  {label: 'When?', icon: 'clock'},
  {label: 'Where?', icon: 'map-marker-alt'},
];

export default BottomView = (props) => {
  let refRBSheet = React.useRef();
  return (
    <RBSheet
      ref={refRBSheet}
      backdropPressToClose={false}
      position="bottom"
      style={styles.container}
      isOpen={props.open}
      onClosed={props.onClosed}
      swipeArea={110}
      backButtonClose={true}
      backdropContent={
        <Button
          onPress={props.onClosed}
          buttonStyle={styles.closeBut}
          useForeground
          icon={{name: 'close', color: '#000', size: 20}}
        />
      }
      backdrop={true}>
      <View style={styles.swipeArea}>
        <FontAwesome5Icon
          name="chevron-down"
          color={R.colors.tabIcon}
          size={15}
        />
      </View>
      <TopNavig />
    </RBSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 20,
    height: height - 120,
    width,
    overflow: 'hidden',
  },
  closeBut: {
    height: 30,
    width: 30,
    marginLeft: 15,
    marginTop: 40,
    backgroundColor: R.colors.border,
    borderRadius: 30,
    padding: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  swipeArea: {padding: 10, width: '100%', alignItems: 'center'},
});
