import React, { Component } from 'React';
import axios from 'axios';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, Dimensions } from 'react-native';

import { updateBusiness } from '../Actions/updateBusiness';

class DetailPage extends Component {
  componentDidMount() {
    const business = this.props.businessHours;
    const businessId = this.props.onDetailPage.id;
    const businessDetail = business.filter(business => business.id === businessId)[0];
    if (businessDetail) {
      return;
    } else {
      return axios.get(`https://owl-oiche-yelp-api.herokuapp.com/api/yelpIdResults?id=${businessId}`)
      .then(response => response.data.hours[0].open)
      .then(hours => this.props.updateBusiness(businessId, hours))
      .catch(error => console.log(error));
    }
  };

  decideBusinessToDisplay() {
    const businessId = this.props.onDetailPage.id;
    if (this.props.activeTab === 'Restaurants') {
      return this.props.businesses.restaurants.filter(business => business.id === businessId)[0];
    }

    if (this.props.activeTab === 'Pharmacies') {
      return this.props.businesses.pharmacies.filter(business => business.id === businessId)[0];
    }

    if (this.props.activeTab === 'Wifi') {
      return this.props.businesses.wifiSpots.filter(business => business.id === businessId)[0];
    } else {
      return this.props.businesses.misc.filter(business => business.id === businessId)[0];
    }
  }

  renderHours() {
    const business = this.props.businessHours;
    const businessId = this.props.onDetailPage.id;
    const businessDetail = business.filter(business => business.id === businessId)[0];
    if (businessDetail) {
      const hours = businessDetail.hours;
      const day = new Date().getDay();
      const hoursToDisplay = hours.filter(hour => hour.day === day)[0];
      if (!hoursToDisplay) {
        return 'Sorry, this business is not open today :(';
      }

      hoursToDisplay.start = parseInt(hoursToDisplay.start);
      hoursToDisplay.end = parseInt(hoursToDisplay.end);
      if (hoursToDisplay.start >= 1300) {
        hoursToDisplay.start = hoursToDisplay.start - 1200;
      };

      if (String(hoursToDisplay.start).length === 2) {
        hoursToDisplay.start = '12' + String(hoursToDisplay.start);
      }

      if (hoursToDisplay.end >= 1300) {
        hoursToDisplay.end = hoursToDisplay.end - 1200;
      };

      if (String(hoursToDisplay.end).length === 2) {
        hoursToDisplay.end = '12' + String(hoursToDisplay.end);
      }
      console.log('hoursToDisplay ----> ', hoursToDisplay);
      return `${String(hoursToDisplay.start).slice(0, 2)}:${String(hoursToDisplay.start).slice(2)} AM - ${String(hoursToDisplay.end).slice(0, 2)}:${String(hoursToDisplay.end).slice(2)} PM`;
    } else {
      return 'Please wait a moment while we see what hours the business is open';
    }
  }

  render() {
    const business = this.decideBusinessToDisplay();
    return (
      <View>
        <Image source={{ uri: business.image_url }} style={styles.image} />
        <Text>{business.name}</Text>
        <Text>{business.display_phone}</Text>
        <Text>{business.location.display_address[0]}</Text>
        <Text>{this.renderHours()}</Text>
      </View>
    );
  }
}

function mapStateToProps({ activeTab, businessHours, businesses, onDetailPage }) {
  return { activeTab, businessHours, businesses, onDetailPage };
}

export default connect(mapStateToProps, { updateBusiness })(DetailPage);

const { height, width } = Dimensions.get('window');
const styles = StyleSheet.create({
  image: {
    height: height * 0.50,
    width: width * 0.50,
  },
});
