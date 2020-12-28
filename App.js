import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Appcontainer from './src/navig/Appcontainer';
import {StatusBar} from 'react-native';
import R from './src/res/R';
import {init, reducer} from './src/func/Reducer';
import {ContextStates} from './src/func/ContextStates';

export default class App extends React.PureComponent {
  state = {
    appData: null,
    category: 0,
  };
  componentDidMount = async () => {
    const data = await init(this.state);
    await this.dispatch({type: 'init', payload: data});
  };

  dispatch = async (action) => {
    this.setState(await reducer(this.state, action));
  };

  render() {
    return (
      <ContextStates.Provider
        value={{dispatch: this.dispatch, reduState: this.state}}>
        <NavigationContainer>
          <StatusBar translucent backgroundColor={R.colors.trans} />
          <Appcontainer />
        </NavigationContainer>
      </ContextStates.Provider>
    );
  }
}
