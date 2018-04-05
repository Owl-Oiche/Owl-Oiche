import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import BusinessList from './BusinessList';
import Header from './Header';
import Tabs from './Tabs';

class MainPage extends Component {

  decideBusinessesToDisplay() {
    if (this.props.activeTab === 'Restaurants') {
      return this.props.businesses.restaurants;
    }

    if (this.props.activeTab === 'Pharmacies') {
      return this.props.businesses.pharmacies;
    }

    if (this.props.activeTab === 'Wifi') {
      return this.props.businesses.wifiSpots;
    } else {
      return this.props.businesses.misc;
    }
  }

  render() {
    const businesses = this.decideBusinessesToDisplay();
    return (
      <View>
        <Header />
        <Tabs />
        { this.props.businesses.restaurants.length > 0 ? (
          <BusinessList businesses={businesses} />
        ) : (
          <Text>We need to know your location, please enter a city above.</Text>
        )}
      </View>
    );
  }
}

function mapStateToProps({ businesses, activeTab }) {
  return { businesses, activeTab };
}

export default connect(mapStateToProps)(MainPage);
