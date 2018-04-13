import React, { Component } from 'React';
import axios from 'axios';
import { connect } from 'react-redux';
import { View, Image, Text, StyleSheet, Dimensions, TouchableWithoutFeedback } from 'react-native';
import call from 'react-native-phone-call';

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
      .then(hours => {
        const formattedHours = this.formatTime(hours);
        this.props.updateBusiness(businessId, formattedHours);
      })
      .catch(error => console.log(error));
    }
  };

  formatTime(hoursArr) {
    const day = new Date().getDay();
    const hoursToDisplay = hoursArr.filter(hour => hour.day === day)[0];
    hoursToDisplay.start = parseInt(hoursToDisplay.start);
    hoursToDisplay.end = parseInt(hoursToDisplay.end);

    if (hoursToDisplay.start >= 1300) {
      hoursToDisplay.start = hoursToDisplay.start - 1200;
      hoursToDisplay.start = String(hoursToDisplay.start) + ' PM';
    } else {
      hoursToDisplay.start = String(hoursToDisplay.start) + ' AM';
    }

    if (hoursToDisplay.end >= 1300) {
      hoursToDisplay.end = hoursToDisplay.end - 1200;
      hoursToDisplay.end = String(hoursToDisplay.end) + ' PM';
    } else {
      hoursToDisplay.end = String(hoursToDisplay.end) + ' AM';
    }

    if (String(hoursToDisplay.start).length === 2) {
      hoursToDisplay.start = '12' + String(hoursToDisplay.start) + ' AM';
    }

    if (String(hoursToDisplay.end).length === 2) {
      hoursToDisplay.end = '12' + String(hoursToDisplay.end) + ' AM';
    }

    if (hoursToDisplay.start.length === 6) {
      hoursToDisplay.start = hoursToDisplay.start.slice(0, 1) + ':' + hoursToDisplay.start.slice(1);
    } else {
      hoursToDisplay.start = hoursToDisplay.start.slice(0, 2) + ':' + hoursToDisplay.start.slice(2);
    }

    if (hoursToDisplay.end.length === 6) {
      hoursToDisplay.end = hoursToDisplay.end.slice(0, 1) + ':' + hoursToDisplay.end.slice(1);
    } else {
      hoursToDisplay.end = hoursToDisplay.end.slice(0, 2) + ':' + hoursToDisplay.end.slice(2);
    }

    return { start: hoursToDisplay.start, end: hoursToDisplay.end };
  }

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
    const businessHours = this.props.businessHours;
    const businessId = this.props.onDetailPage.id;
    const filteredHours = businessHours.filter(business => business.id === businessId)[0];
    if (filteredHours) {
      if (!filteredHours.hours.start) {
        return 'Sorry, this business is not open today :(';
      }

      return filteredHours.hours.start + ' - ' + filteredHours.hours.end;
    } else {
      return 'One Moment....';
    }
  }

  handlePhoneClick() {
    const phoneNumber = this.decideBusinessToDisplay().display_phone;
    const args = { number: phoneNumber, promt: true };
    call(args).catch(console.log);
  }

  render() {
    const business = this.decideBusinessToDisplay();
    return (
      <View style={styles.container}>
        <Image source={{ uri: business.image_url }} style={styles.image} />
        <Text style={styles.text}>{business.name}</Text>
        <TouchableWithoutFeedback onPress={() => this.handlePhoneClick()}>
          <View>
           <Text style={{ color: '#0000EE', textDecorationLine: 'underline', marginBottom: 5 }}>{business.display_phone}</Text>
          </View>
        </TouchableWithoutFeedback>
        <Text style={{ color: 'white' }}>{business.location.display_address[0]}</Text>
        <Text style={styles.text}>{business.location.display_address[1]}</Text>
        <Text style={styles.text}>{this.renderHours()}</Text>
        <Text style={styles.text}>{business.categories[0].title}</Text>
        <View style={ styles.footer} />
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
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    marginBottom: 5,
  },
  image: {
    height: height * 0.30,
    marginTop: 20,
    marginBottom: 20,
    width: width,
  },
  footer: {
    backgroundColor: '#744516',
    paddingVertical: 700,
  },
});
