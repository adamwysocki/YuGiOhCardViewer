'use strict';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

var styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 10,
    flex: 1
  },
  footerText: {
    fontSize: 8,
    textAlign: 'center'
  }
});

class Footer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.footerText}>
          Copyright (c) 2016 Data provided by www.yugiohprices.com.
        </Text>
        <Text style={styles.footerText}>
          Technical Consultation by Luke Furgason & Jason Wysocki.
        </Text>
      </View>
    );
  }
}

module.exports = Footer;
