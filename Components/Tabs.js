import React, { Component } from 'react';
import { StyleSheet,
         FlatList,
         View,
         Text,
         TouchableHighlight,
         Dimensions, }
from 'react-native';
import { connect } from 'react-redux';
import { setActiveTab } from '../Actions/activeTabs';

class Tabs extends Component {

  _onPress(event) {
    this.props.setActiveTab(event.title);
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={[
          { title: 'Restaurants', key: 'item1' },
          { title: 'Pharmacies', key: 'item2' },
          { title: 'Wifi', key: 'item3' },
          { title: 'Miscellaneous', key: 'item4' },
          ]}
          renderItem={({ item }) => (
            item.title === this.props.activeTab ? (
              <TouchableHighlight
                onPress={() => this._onPress(item)}>
                <View style={styles.selected}>
                  <Text style={styles.selectedText}>{item.title}</Text>
                </View>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                onPress={() => this._onPress(item)}>
                <View style={styles.notSelected}>
                  <Text style={styles.text}>{item.title}</Text>
                </View>
              </TouchableHighlight>
            )
          )}
        />
      </View>
    );
  }
}

function mapStateToProps({ activeTab }) {
  return { activeTab };
}

export default connect(mapStateToProps, { setActiveTab })(Tabs);

const styles = StyleSheet.create({
  notSelected: {
    backgroundColor: '#d2d6d7',
    width: 0.25 * Dimensions.get('window').width,
    height: 25,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#4d5b62',
    borderStyle: 'solid',
    borderWidth: 5,
    borderBottomColor: '#136b7b',
    borderTopColor: '#4d5b62',
    borderRightColor: '#4d5b62',
    borderLeftColor: '#4d5b62',
    height: 25,
    width: 0.25 * Dimensions.get('window').width,
    alignItems: 'center',
  },
  text: {
    color: '#136b7b',
  },
  selectedText: {
    color: 'white',
  },
});
