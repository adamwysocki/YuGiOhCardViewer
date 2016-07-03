'use strict';

import React, { Component } from 'react';

import {
  Image,
  View
} from 'react-native';

var styles          = require('./Styles');

class CardViewHeader extends Component {
  render() {
    return (
      <View>
        <Image source={require('./Resources/triangle.png')} style={styles.triangleImage}/>
        <Image source={{uri: this.props.img_url}} style={styles.miniCard}/>
      </View>
    );
  }
}

module.exports = CardViewHeader;
