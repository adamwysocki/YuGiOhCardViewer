'use strict';

import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native';

var screenWidth = Dimensions.get('window').width; //full width
var screenHeight = Dimensions.get('window').height; //full height

var globalStyles = StyleSheet.create({
  /* navigator styles */
  container: {
    flex: 1
  },
  navBar: {
    backgroundColor: '#333',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center'
  },
  navBarText: {
    marginVertical: 10,
    color: 'white',
    textAlign: 'center'
  },
  navBarTitleText: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 9,
    textAlign: 'center',
    justifyContent: 'center'
  },
  navBarButtonText: {
    fontSize: 24,
    fontWeight: '500',
    marginVertical: 9,
    textAlign: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },
  navBarLeftButton: {
    paddingLeft: 10,
    width: 50
  },
  navBarRightButton: {
    paddingRight: 10,
    width: 50
  },
  /* search page styles */
  description: {
    marginBottom: 20,
    fontSize: 16,
    textAlign: 'center',
    color: '#656565'
  },
  minorDescription: {
    marginBottom: 20,
    fontSize: 12,
    textAlign: 'center',
    color: '#656565'
  },
  searchPageContainer: {
    padding: 25,
    marginTop: 75,
    flex: 1
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    alignSelf: 'center'
  },
  buttonWrapper: {
    marginTop: 5
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#999999',
    borderColor: '#999999',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginLeft: 3,
    marginRight: 3
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#999999',
    borderRadius: 8,
    color: '#000000'
  },
  /* card view styles */
  cardViewContainer: {
    flex: 1,
    // remove width and height to override fixed static size
    width: null,
    height: null,
    marginTop: 55
  },
  fullScreen: {
    flex:1,
    backgroundColor: 'rgba(10,10,10,0.7)'
  },
  floatView: {
    position: 'relative',
    top: 250,
    left: 0,
    width: screenWidth,
    height: screenHeight + 200,
    backgroundColor: 'white',
    alignItems: 'center'
  },
  parent: {
    flex: 1,
  },
  subMenu: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 100,
    marginRight: 100,
    marginTop: 20
  },
  statContainer: {
    marginTop: 15,
    borderTopWidth: 2,
    borderTopColor: 'rgba(0,0,0,0.1)',
    width: screenWidth
  },
  statTitle: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center'
  },
  statValue: {
    paddingTop: 3,
    fontSize: 14,
    color: '#000000',
    textAlign: 'center'
  },
  scrollView: {
    height: Dimensions.get('window').height / 20,
    backgroundColor: 'rgba(10,10,10,0.7)'
  },
  /* card view header */
  triangleImage: {
    position: 'absolute',
    top: 100,
    left: 0,
    height: 150,
    resizeMode: 'stretch',
    backgroundColor: 'rgba(0,0,0,0)'
  },
  miniCard: {
    position: 'absolute',
    top: 105,
    left: 205,
    width: 125,
    height: 140,
    resizeMode: 'contain',
    backgroundColor: 'rgba(0,0,0,0)',
    borderRadius: 15,
    borderWidth: 0,
    borderColor: '#000000'
  }  
});

module.exports = globalStyles;
