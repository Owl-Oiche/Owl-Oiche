import React, { Component } from 'react';
import { StyleSheet,
         FlatList,
         View,
         Text,
         TouchableHighlight,
         Dimensions, }
from 'react-native';
import { connect } from 'react-redux';
import { Ionicons, MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';

import { setActiveTab } from '../Actions/activeTabs';
import { setOnDetailPage } from '../Actions/onDetailPage';

class Tabs extends Component {

  _onPress(event) {
    if (this.props.onDetailPage.onDetailPage) {
      this.props.setOnDetailPage(-1);
    }

    this.props.setActiveTab(event.title);
  }

  iconlib(icon) {
    if (icon === 'pharmacy') {
      return <MaterialCommunityIcons name={icon} size={32} color='#744516' />;
    } else if (icon === 'ellipsis-h') {
      return <FontAwesome name={icon} size={32} color='#744516' />;
    } else {
      return <Ionicons name={icon} size={32} color='#744516' />;
    }
  }

  render() {
    return (
      <View>
        <FlatList
          horizontal={true}
          data={[
          { title: 'Restaurants', key: 'item1', icon: 'ios-restaurant' },
          { title: 'Pharmacies', key: 'item2', icon: 'pharmacy' },
          { title: 'Wifi', key: 'item3', icon: 'ios-wifi-outline' },
          { title: 'Miscellaneous', key: 'item4', icon: 'ellipsis-h' },
          ]}
          renderItem={({ item }) => (
            item.title === this.props.activeTab ? (
              <TouchableHighlight
                onPress={() => this._onPress(item)}>
                <View style={styles.selected}>
                  {this.iconlib(item.icon)}
                </View>
              </TouchableHighlight>
            ) : (
              <TouchableHighlight
                onPress={() => this._onPress(item)}>
                <View style={styles.notSelected}>
                  {this.iconlib(item.icon)}
                </View>
              </TouchableHighlight>
            )
          )}
        />
      </View>
    );
  }
}

function mapStateToProps({ activeTab, onDetailPage }) {
  return { activeTab, onDetailPage };
}

export default connect(mapStateToProps, { setActiveTab, setOnDetailPage })(Tabs);

const styles = StyleSheet.create({
  notSelected: {
    backgroundColor: '#d2d6d7',
    width: 0.25 * Dimensions.get('window').width,
    height: 40,
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#4d5b62',
    borderStyle: 'solid',
    borderWidth: 5,
    borderBottomColor: '#3b2133',
    borderTopColor: '#4d5b62',
    borderRightColor: '#4d5b62',
    borderLeftColor: '#4d5b62',
    height: 40,
    width: 0.25 * Dimensions.get('window').width,
    alignItems: 'center',
  },
  text: {
    color: '#744516',
  },
  selectedText: {
    color: 'white',
  },
});
