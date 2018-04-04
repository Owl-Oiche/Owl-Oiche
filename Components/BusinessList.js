import React, { Component } from 'react';
import { Image,
         Text,
         View,
         TouchableHighlight,
         FlatList,
         StyleSheet,
         Dimensions, }
from 'react-native';
import { connect } from 'react-redux';

import { setOnDetailPage } from '../Actions/onDetailPage.js';

class BusinessList extends Component {

  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={[

          ]}
          renderItem={({ item }) => (
            
          )}
        />
      </View>
    )
  }
}
