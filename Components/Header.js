import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet, Dimensions, Image } from 'react-native';
import { connect } from 'react-redux';

import { setSearchValue } from '../Actions/searchBar';
import img from '../assets/Owl-Oiche-logo.png';
import {
  fetchRestaurantsRequest,
  fetchPharmaciesRequest,
  fetchWifiSpotsRequest,
  fetchGasStationsRequest,
  fetchGroceriesRequest,
  fetchLaundromatsRequest,
} from '../Actions/yelpRequests';

import { makeQuery } from '../utils/makeQuery';

class Header extends Component {

  searchUpdate(text) {
    this.props.setSearchValue(text);
  }

  searchSubmit() {
    this.props.fetchRestaurantsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'restaurant' })}`);
    this.props.fetchPharmaciesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'pharmacy' })}`);
    this.props.fetchWifiSpotsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'wifi' })}`);
    this.props.fetchGasStationsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'gas' })}`);
    this.props.fetchGroceriesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'grocery' })}`);
    this.props.fetchLaundromatsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'laundry' })}`);
  }

  render() {
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
            <Text style={styles.currentTab}>
              {this.props.activeTab}
            </Text>
            <TextInput placeholder='Enter City'
              style={styles.searchInput}
              onChangeText={(text)=> this.searchUpdate(text)}
              onSubmitEditing={(submit) => this.searchSubmit(submit)}
            />
          </View>
        </View>
    );
  }
}

function mapStateToProps({ activeTab, searchBar }) {
  return { activeTab, searchBar };
}

const actions = {
  setSearchValue,
  fetchRestaurantsRequest,
  fetchPharmaciesRequest,
  fetchWifiSpotsRequest,
  fetchGasStationsRequest,
  fetchGroceriesRequest,
  fetchLaundromatsRequest,
};
export default connect(mapStateToProps, actions)(Header);

const styles = StyleSheet.create({
  topBuffer: {
    backgroundColor: '#3b2133',
    paddingTop: 0.15 * Dimensions.get('window').height,
  },
  siteTitle: {
    height: .10 * Dimensions.get('window').height,
    width: .17 * Dimensions.get('window').width,
  },
  siteTitleText: {
    color: 'white',
    fontSize: 21,
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
    width: .33 * Dimensions.get('window').width,
  },
  searchInput: {
    paddingLeft: 10,
    backgroundColor: '#d2d6d7',
    height: 0.05 * Dimensions.get('window').height,
    width: .45 * Dimensions.get('window').width,
    borderStyle: 'solid',
    borderRadius: 7,
    borderWidth: 1,
    borderColor: 'black',
  },
});
