// import {View, Text} from 'react-native';
// import React from 'react';
// import {Provider} from 'react-redux';
// import store from './android/app/src/store/store';
// import StackNavigator from './android/app/src/stackScreens/StackNavigator';

// const App = () => {
//   return (
//     <Provider store={store}>
//       <StackNavigator />
//     </Provider>
//   );
// };

// export default App;

import {View, Text} from 'react-native';
import React from 'react';
import StackNavigator from './android/app/src/stackScreens/StackNavigator';
import {Provider} from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './android/app/src/store/store';
const App = () => {
  return (
   
    <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
      <StackNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;

