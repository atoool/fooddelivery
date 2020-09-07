import * as React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import RBSheet from 'react-native-modalbox';
import R from '../res/R';
import TopNavig from '../navig/TopNavig';

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
      backdrop={false}>
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
});
