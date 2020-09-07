import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Appcontainer from './src/navig/Appcontainer';
import {StatusBar} from 'react-native';
import R from './src/res/R';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor={R.colors.trans} />
      <Appcontainer />
    </NavigationContainer>
  );
}
