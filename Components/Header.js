import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions } from 'react-native';
import { connect } from 'react-redux';

import { setSearchValue } from '../Actions/searchBar';

class Header extends Component {

  searchUpdate(text) {
    this.props.setSearchValue(text);
  }

  render() {
    return (
      <View>
        <View style={styles.topBuffer}>
          <View />
        </View>
        <View style={styles.header}>
          <Text style={styles.currentTab}>
            {this.props.activeTab}
          </Text>
          <TextInput placeholder='Enter City'
                     style={styles.searchInput}
                     onChangeText={(text)=> this.searchUpdate(text)}
          />
        </View>
      </View>
    );
  }
}

function mapStateToProps({ activeTab, searchBar }) {
  return { activeTab, searchBar };
}

export default connect(mapStateToProps, { setSearchValue })(Header);

const styles = StyleSheet.create({
  topBuffer: {
    backgroundColor: '#3b2133',
    paddingTop: 0.15 * Dimensions.get('window').height,
  },
  header: {
    backgroundColor: '#3b2133',
    flexDirection: 'row',
    height: 0.10 * Dimensions.get('window').height,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  currentTab: {
    color: 'white',
    width: .25 * Dimensions.get('window').width,
  },
  searchInput: {
    backgroundColor: '#d2d6d7',
    height: 0.05 * Dimensions.get('window').height,
    width: .45 * Dimensions.get('window').width,
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
});
