import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';

import reducers from '../Reducers';
import Tabs from './Tabs';
import Header from './Header';

const store = createStore(
  reducers
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <View>
          <Header />
          <Tabs />
        </View>
      </Provider>
    );
  }
}
