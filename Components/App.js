import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StyleSheet, Text, View } from 'react-native';

import reducers from '../Reducers';
import MainPage from './mainPage';

const store = createStore(
  reducers
);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={ store }>
        <MainPage />
      </Provider>
    );
  }
}
