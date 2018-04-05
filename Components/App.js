import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { View } from 'react-native';
import createSagaMiddleware from 'redux-saga';

import mySaga from '../sagas';
import reducers from '../Reducers';
import MainPage from './MainPage';

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
          <MainPage />
        </View>
      </Provider>
    );
  }
}
