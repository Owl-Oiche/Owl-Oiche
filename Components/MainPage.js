import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image, Dimensions, TouchableWithoutFeedback, Keyboard, ActivityIndicator } from 'react-native';

import BusinessList from './BusinessList';
import Header from './Header';
import Tabs from './Tabs';
import img from '../assets/nasa-43569-unsplash.jpg';

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={{ backgroundColor: '#744516' }}>
          <Header />
          <Tabs />
          { this.props.isLoading ? (
            <ActivityIndicator size='large' color='white' />
          ) : (
             this.props.businesses.restaurants.length > 0 ? (
              <BusinessList businesses={businesses} />
            ) : (
              <View>
                <Text style={{ color: 'white' }}>We need to know your location, please enter a city above.</Text>
                <Image source={ img }
                  style={{ height: Dimensions.get('window').height, width: Dimensions.get('window').width }} />
              </View>
            )
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps({ businesses, activeTab, isLoading }) {
  return { businesses, activeTab, isLoading };
}

export default connect(mapStateToProps)(MainPage);
