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

  _onPress() {
    this.props.setOnDetailPage(true);
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={this.props.businesses}
          renderItem={({ item }) => (
            <TouchableHighlight onPress={() => this._onPress(item)} >
              <View>
                <Image source={{ uri: item.image_url }} />
                <Text>{item.name}</Text>
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default connect(null, { setOnDetailPage })(BusinessList);
