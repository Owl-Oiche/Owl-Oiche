import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View,
         Text,
         Image,
         Dimensions,
         TouchableWithoutFeedback,
         Keyboard,
         ActivityIndicator,
         StyleSheet } from 'react-native';
import moment from 'moment';
import { setLoading } from '../Actions/isLoading';

import { makeQuery } from '../utils/makeQuery';
import BusinessList from './BusinessList';
import Header from './Header';
import Tabs from './Tabs';
import DetailPage from './DetailPage';
import img from '../assets/nasa-43569-unsplash.jpg';
import {
  fetchRestaurantsRequest,
  fetchPharmaciesRequest,
  fetchWifiSpotsRequest,
  fetchGasStationsRequest,
  fetchGroceriesRequest,
  fetchLaundromatsRequest,
} from '../Actions/yelpRequests';

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

  fetchBusinesses() {
    const hour = moment().hour();
    if (hour >= 0 && hour <= 4) {
      this.props.fetchRestaurantsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'restaurant', open_now: true, offset: this.props.offSetCount })}`);
      this.props.fetchPharmaciesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'pharmacy', open_now: true, offset: this.props.offSetCount })}`);
      this.props.fetchWifiSpotsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'wifi', open_now: true, offset: this.props.offSetCount })}`);
      this.props.fetchGasStationsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'gas', open_now: true, offset: this.props.offSetCount })}`);
      this.props.fetchGroceriesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'grocery', open_now: true, offset: this.props.offSetCount })}`);
      this.props.fetchLaundromatsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'laundry', open_now: true, offset: this.props.offSetCount })}`);
    } else {
      const year = moment().year();
      const month = moment().month();
      const day = moment().date();
      const unixTime = new Date(year, month, day + 1, 0, 15).getTime() / 1000;
      this.props.fetchRestaurantsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'restaurant', open_at: unixTime, offset: this.props.offSetCount })}`);
      this.props.fetchPharmaciesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'pharmacy', open_at: unixTime, offset: this.props.offSetCount })}`);
      this.props.fetchWifiSpotsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'wifi', open_at: unixTime, offset: this.props.offSetCount })}`);
      this.props.fetchGasStationsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'gas', open_at: unixTime, offset: this.props.offSetCount })}`);
      this.props.fetchGroceriesRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'grocery', open_at: unixTime, offset: this.props.offSetCount })}`);
      this.props.fetchLaundromatsRequest(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpResults${makeQuery({ location: this.props.searchBar, term: 'laundry', open_at: unixTime, offset: this.props.offSetCount })}`);
    }
  }

  searchSubmit() {
    if (this.props.businesses.restaurants.length === 0) {
      this.props.setLoading(true);
    }

    this.fetchBusinesses();
  }

  render() {
    const businesses = this.decideBusinessesToDisplay();
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.pageBackground}>
          <Header searchSubmit={() => this.searchSubmit()} />
          <Tabs />
          { this.props.isLoading ? (
            <View>
              <ActivityIndicator size='large' color='white' />
              <View style={styles.loadingBackground} />
            </View>
          ) : (
             this.props.onDetailPage.onDetailPage ? (
               <DetailPage />
             ) : (
               this.props.businesses.restaurants.length > 0 ? (
                 <BusinessList businesses={businesses} fetchData={() => this.fetchBusinesses()} />
               ) : (
                 <View>
                   <Text style={styles.text}>We need to know your location, please enter a city above.</Text>
                   <Image source={ img }
                     style={styles.homeImage} />
                </View>
                )
             )
          )}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

function mapStateToProps({ businesses, activeTab, isLoading, onDetailPage, searchBar, offSetCount }) {
  return { businesses, activeTab, isLoading, onDetailPage, searchBar, offSetCount };
}

const actions = {
  fetchRestaurantsRequest,
  fetchPharmaciesRequest,
  fetchWifiSpotsRequest,
  fetchGasStationsRequest,
  fetchGroceriesRequest,
  fetchLaundromatsRequest,
  setLoading,
};

export default connect(mapStateToProps, actions)(MainPage);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  pageBackground: {
    backgroundColor: '#744516',
  },
  loadingBackground: {
    backgroundColor: '#744516',
    height,
  },
  text: {
    color: 'white',
  },
  homeImage: {
    height: height,
    width: width,
  },
});
