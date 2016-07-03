'use strict';

import React, { Component } from 'react';

import {
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';

import {
  formatCardNameForImageLookup,
  formatCardNameForAPI,
  urlForQueryAndPage
} from './Util';

var CardViewHeader  = require('./CardViewHeader');
var styles          = require('./Styles');

var screenWidth     = Dimensions.get('window').width; //full width
var screenHeight    = Dimensions.get('window').height; //full height

class CardView extends Component {

  constructor(props) {
    super(props);

    var transformedCardName = formatCardNameForImageLookup(this.props.card.name);

    this.state = {
        name: this.props.card.name,
        price: this.props.card.price,
        high: this.props.card.high,
        low: this.props.card.low,
        transformedCardName: transformedCardName,
        img_url: 'http://static.api3.studiobebop.net/ygo_data/card_images/' + encodeURIComponent(transformedCardName) + '.jpg',
        type: '',
        family: '',
        atk: '',
        def: '',
        text: '',
        level: '',
        active: 'stats'
    };

    var query = urlForQueryAndPage(this.state.name);
    this._executeQuery(query);
  }

  _executeQuery(query) {
    fetch(query)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      this._handleResponse(responseData);
    });
  }

  _handleResponse(response) {
    if (response.status === 'success') {
      this.setState({
        name: response.data.name,
        card_type: response.data.card_type,
        type: response.data.type,
        family: response.data.family,
        atk: response.data.atk,
        def: response.data.def,
        text: response.data.text,
        level: response.data.level
      });
    } else {
      console.log('error, API lookup failed' + JSON.stringify(response));
    }
  }

  onStatsPressed() {
    this.setState({ active: 'stats'} );
  }

  onPricesPressed() {
    this.setState({ active: 'prices'} );
  }

  subMenuItemStyle(active) {
    if(active === this.state.active) {
      return {
        color: '#f36',
        fontStyle: 'italic',
        fontWeight: '500',
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10
      };
    } else {
      return {
        color: '#666',
        fontWeight: '500',
        fontSize: 20,
        marginRight: 10,
        marginLeft: 10
      };
    }
  }

  priceData() {
    return [
      <View key="1" style={styles.statContainer}>
        <Text style={styles.statTitle}>Average Price</Text>
        <Text style={styles.statValue}>${this.state.price}</Text>
      </View>,
      <View key="2" style={styles.statContainer}>
        <Text style={styles.statTitle}>High</Text>
        <Text style={styles.statValue}>${this.state.high}</Text>
      </View>,
      <View key="3" style={styles.statContainer}>
        <Text style={styles.statTitle}>Low</Text>
        <Text style={styles.statValue}>${this.state.low}</Text>
      </View>
    ];
  }

  statsData() {
    return [
      <View key="1" style={styles.statContainer}>
        <Text style={styles.statTitle}>Name</Text>
        <Text style={styles.statValue}>{this.state.name}</Text>
      </View>,
      <View key="2" style={styles.statContainer}>
        <Text style={styles.statTitle}>Text</Text>
        <Text style={styles.statValue}>{this.state.text}</Text>
      </View>,
      <View key="3" style={styles.statContainer}>
        <Text style={styles.statTitle}>Card Type</Text>
        <Text style={styles.statValue}>{this.state.card_type}</Text>
      </View>,
      <View key="4" style={styles.statContainer}>
        <Text style={styles.statTitle}>Family</Text>
        <Text style={styles.statValue}>{this.state.family}</Text>
      </View>,
      <View key="5" style={styles.statContainer}>
        <Text style={styles.statTitle}>Type</Text>
        <Text style={styles.statValue}>{this.state.type}</Text>
      </View>,
      <View key="6" style={styles.statContainer}>
        <Text style={styles.statTitle}>Attack</Text>
        <Text style={styles.statValue}>{this.state.atk}</Text>
      </View>,
      <View key="7" style={styles.statContainer}>
        <Text style={styles.statTitle}>Defense</Text>
        <Text style={styles.statValue}>{this.state.def}</Text>
      </View>,
      <View key="8" style={styles.statContainer}>
        <Text style={styles.statTitle}>Level</Text>
        <Text style={styles.statValue}>{this.state.level}</Text>
      </View>
    ];
  }

  render() {
    var _scrollView = ScrollView;
    var dataView = this.state.active === 'stats' ? this.statsData() : this.priceData();
      return (
      <Image source={{uri: this.state.img_url}} style={styles.cardViewContainer}>
        <ScrollView
          ref={(scrollView) => { _scrollView = scrollView; }}
          automaticallyAdjustContentInsets={false}
          scrollEventThrottle={300}
          style={styles.scrollView}>

          <View style={styles.fullScreen}/>

          <CardViewHeader img_url={this.state.img_url} screenWidth={screenWidth}/>

          <View style={styles.floatView}>
            <View style={styles.subMenu}>
              <TouchableHighlight underlayColor='#ffffff' onPress={this.onStatsPressed.bind(this)}>
                <Text style={this.subMenuItemStyle('stats')}>STATS</Text>
              </TouchableHighlight>
              <TouchableHighlight underlayColor='#ffffff' onPress={this.onPricesPressed.bind(this)}>
                <Text style={this.subMenuItemStyle('prices')}>PRICES</Text>
              </TouchableHighlight>
            </View>
            {dataView}
          </View>

        </ScrollView>
      </Image>
    );
  }
}

module.exports = CardView;
