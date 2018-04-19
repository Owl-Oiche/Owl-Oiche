import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, Image, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';

import { setSearchValue } from '../Actions/searchBar';
import { isLoading } from '../Actions/isLoading';
import img from '../assets/Owl-Oiche-logo.png';
import { setOnDetailPage } from '../Actions/onDetailPage';
import { Entypo } from '@expo/vector-icons';

class Header extends Component {

  searchUpdate(text) {
    this.props.setSearchValue(text);
  }

  handleArrowClick() {
    this.props.setOnDetailPage(-1);
  }

  render() {
    if (this.props.onDetailPage.onDetailPage) {
      return (
        <View >
          <View style={styles.topBuffer}>
            <View />
          </View>
          <View style={styles.header}>
            <Image source={ img }
              style={styles.siteTitle} />
              <Text style={styles.siteTitleText}>
                Owl Oíche
              </Text>
            </View>
            <View style={styles.header}>
              <TouchableHighlight onPress={() => this.handleArrowClick()} underlayColor='#23131e'>
                <Entypo name='arrow-bold-left' size={32} color='white'/>
              </TouchableHighlight>
              <Text style={styles.currentTab}>
                {this.props.activeTab}
              </Text>
            </View>
          </View>
        );
    } else {
      return (
        <View>
          <View style={styles.topBuffer}>
            <View />
          </View>
          <View style={styles.header}>
            <Image source={ img }
              style={styles.siteTitle} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.siteTitleText}>
                  Owl Oíche
                </Text>
                <Text style={styles.catchPhrase}>
                  For folks who like to keep theatrical hours,
                </Text>
                <Text style={styles.catchPhrase}>
                  AKA Night Owls
                </Text>
              </View>
            </View>
            <View style={styles.header}>
              <Text style={styles.currentTab}>
                {this.props.activeTab}
              </Text>
              <TextInput placeholder='Enter City'
                style={styles.searchInput}
                onChangeText={(text)=> this.searchUpdate(text)}
                onSubmitEditing={(submit) => this.props.searchSubmit(submit)}
                spellCheck={true}
                value={this.props.searchBar}
              />
            </View>
          </View>
        );
    }
  }
}

function mapStateToProps({ activeTab, searchBar, onDetailPage }) {
  return { activeTab, searchBar, onDetailPage };
}

const actions = {
  setSearchValue,
  setOnDetailPage,
};
export default connect(mapStateToProps, actions)(Header);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  topBuffer: {
    backgroundColor: '#3b2133',
    paddingTop: 0.15 * height,
  },
  header: {
    backgroundColor: '#3b2133',
    flexDirection: 'row',
    height: 0.10 * height,
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  siteTitle: {
    height: .10 * height,
    marginLeft: 15,
    width: .17 * width,
  },
  headerTextContainer: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  siteTitleText: {
    color: 'white',
    fontSize: 21,
  },
  catchPhrase: {
    color: 'white',
    fontSize: 11,
  },
  currentTab: {
    color: 'white',
    width: .33 * width,
  },
  searchInput: {
    paddingLeft: 10,
    backgroundColor: '#d2d6d7',
    height: 0.05 * height,
    width: .45 * width,
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
});
