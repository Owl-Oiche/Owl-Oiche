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
        <Text>
          {this.props.activeTab}
        </Text>
        <TextInput style={styles.searchInput} onChangeText={(text)=> this.searchUpdate(text)} />
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
    backgroundColor: '#00245e',
    paddingTop: 0.15 * Dimensions.get('window').height,
  },
  searchInput: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'black',
  },
});
