import React, { PureComponent } from 'react';
import { Text,
         Image,
         View,
         TouchableHighlight,
         StyleSheet,
         Dimensions,
         ActivityIndicator }
from 'react-native';
import { OptimizedFlatList as FlatList } from 'react-native-optimized-flatlist';
import { connect } from 'react-redux';

import { setOnDetailPage } from '../Actions/onDetailPage';

class BusinessList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
    };
  }

  _onPress(id) {
    this.props.setOnDetailPage(id);
  }

  renderSeparator() {
    return (
      <View style={styles.separator} />
    );
  }

  renderFooter() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size='large' color='white' />
        <View style={styles.footer} />
      </View>
    );
  }

  handleRefresh() {
    this.setState({
      refreshing: true,
    }, () => {
      this.props.fetchData();
      this.setState({
        refreshing: false,
      });
    });
  }

  handleLoadMore() {
    this.props.fetchData();
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.businesses}
          keyExtractor={(item, index) => item + index}
          ItemSeparatorComponent={this.renderSeparator}
          ListFooterComponent={() => this.renderFooter()}
          refreshing={this.state.refreshing}
          onRefresh={() => this.handleRefresh()}
          onEndReached={() => this.handleLoadMore()}
          onEndThreshold={3000}
          renderItem={({ item, index, section }) => (
            <TouchableHighlight
              id={item.id}
              onPress={() => this._onPress(item.id)}
              underlayColor='#593510' >
              <View style={styles.container}>
                <Text style={styles.text}>{item.name}</Text>
                { item.image_url ? (
                  <Image style={styles.images}
                         source={{ uri: item.image_url }}
                  />
                ) : (
                  <Image style={styles.images}
                         source={{ uri: 'http://lequytong.com/Content/Images/no-image-02.png' }}
                  />
                ) }
              </View>
            </TouchableHighlight>
          )}
        />
      </View>
    );
  }
}

export default connect(null, { setOnDetailPage })(BusinessList);

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  images: {
    height: 0.3 * height,
    width: width,
  },
  text: {
    color: 'white',
    fontSize: height * 0.05,
  },
  separator: {
    backgroundColor: '#CED0CE',
    height: 1,
    width: '100%',
  },
  footer: {
    backgroundColor: '#744516',
    paddingVertical: height * .67,
  },
});
