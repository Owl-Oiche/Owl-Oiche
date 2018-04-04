import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import createSagaMiddleware from 'redux-saga';

import mySaga from '../sagas';
import reducers from '../Reducers';
import Tabs from './Tabs';
import Header from './Header';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducers,
  applyMiddleware(
    sagaMiddleware
  )
);

sagaMiddleware.run(mySaga);

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
