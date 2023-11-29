import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './android/app/src/stackScreens/StackNavigator';
import {Provider} from 'react-redux';
import store from './android/app/src/store/store';
const App = () => {
  return (
    <Provider store={store}>
      <StackNavigator />
    </Provider>
  );
};

export default App;
