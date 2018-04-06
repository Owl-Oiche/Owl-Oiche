import React, { PureComponent } from 'react';
import { Image,
         Text,
         View,
         TouchableHighlight,
         FlatList,
         StyleSheet,
         Dimensions,
         Platform }
from 'react-native';
import { connect } from 'react-redux';

import { setOnDetailPage } from '../Actions/onDetailPage.js';

class BusinessList extends PureComponent {

  _onPress() {
    this.props.setOnDetailPage(true);
  }

  _keyExtractor(item, index) {
    return item.id;
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.props.businesses}
          keyExtractor={this._keyExtractor}
          renderItem={({ item }) => (
            <TouchableHighlight id={item.id} onPress={() => this._onPress(item)} style={styles.imageCard} >
              <View style={styles.container}>
                <Text>{item.name}</Text>
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

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageCard: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderBottomColor: 'grey',
  },
  images: {
    height: 0.25 * Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  },
});
