'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
  Image
} from 'react-native';

import {
  formatCardNameForAPI,
  priceUrlForQueryAndPage
} from './Util';

var CardView    = require('./CardView');
var Footer      = require('./Footer');
var styles      = require('./Styles');

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: '',
      isLoading: false,
      message: ''
    };
  }

  onSearchTextChanged(event) {
    this.setState({
      searchString: event.nativeEvent.text,
      message: ''
    });
  }

  _handleResponse(response) {
    this.setState({ isLoading: false , message: '' });
    if (response.status === 'success') {
      var card = {};
      if(!response.data.name) {
        card.name = this.state.searchString;
        card.price = response.data[0].price_data.data.prices.average;
        card.high = response.data[0].price_data.data.prices.high;
        card.low = response.data[0].price_data.data.prices.low;
        card.summary = "";
      } else {
        card.name = response.data.name;
        card.price = response.data.price_data.price_data.data.prices.average;
        card.high = response.data.price_data.price_data.data.prices.high;
        card.low = response.data.price_data.price_data.data.prices.low;
        card.summary = "";
      }

      this.props.navigator.push({
        id: 'view',
        component: CardView,
        passProps: {card: card}
      });

    } else {
      this.setState({ message: 'Card not recognized; please try again.'});
    }

    this.setState({ searchString: ''});
  }

  _executeQuery(query) {
    this.setState({ isLoading: true });
    fetch(query)
    .then((response) => {
      return response.json();
    })
    .then((responseData) => {
      this._handleResponse(responseData);
    })
    .catch(error =>
        this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));
  }

  onSearchPressed() {
    var query = priceUrlForQueryAndPage(this.state.searchString);
    console.log('query: ', query);
    this._executeQuery(query);
  }

  onCancelPressed() {
    this.setState({ searchString: ''});
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicator size='large'/>) : (<View/>);

    return (
      <View style={styles.searchPageContainer}>
          <Text style={styles.description}>
            Lookup your Yu-Gi-Oh cards!
          </Text>
          <View style={styles.flowRight}>
            <TextInput style={styles.searchInput}
              placeholder='Name or print tag'
              onChange={this.onSearchTextChanged.bind(this)}
              value={this.state.searchString}/>
          </View>
          <View style={[styles.flowRight, styles.buttonWrapper]}>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4' onPress={this.onSearchPressed.bind(this)}>
              <Text style={styles.buttonText}>Search</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button}
                underlayColor='#99d9f4' onPress={this.onCancelPressed.bind(this)}>
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.minorDescription}>
            Search by name or print tag.
          </Text>
          {spinner}
          <Text style={styles.description}>{this.state.message}</Text>
        <Footer />
      </View>
    );
  }
}

module.exports = SearchPage;
