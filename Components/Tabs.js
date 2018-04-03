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
          { title: 1, key: 'item1' },
          { title: 2, key: 'item2' },
          { title: 3, key: 'item3' },
          { title: 4, key: 'item4' },
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
    backgroundColor: '#00245e',
    width: 0.25 * Dimensions.get('window').width,
    height: 25,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#00245e',
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: '#e0e800',
    borderTopColor: '#00245e',
    borderRightColor: '#00245e',
    borderLeftColor: '#00245e',
    height: 25,
    width: 0.25 * Dimensions.get('window').width,
    alignItems: 'center',
  },
  text: {
    color: 'white',
  },
  selectedText: {
    color: '#e0e800',
  },
});
