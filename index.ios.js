'use strict';

import React, { Component } from 'react';

import {
  AppRegistry,
  Navigator,
  Text,
  TouchableHighlight
} from 'react-native';

var styles      = require('./Styles');
var SearchPage  = require('./SearchPage');
var CardView    = require('./CardView');

var NavigationBarRouteMapper = {
  LeftButton(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableHighlight
          underlayColor="transparent"
          onPress={() => { if (index > 0) { navigator.pop(); } }}>
          <Text style={[styles.navBarText, styles.navBarButtonText]}>&lt;</Text>
        </TouchableHighlight>);
    }
    else { return null; }
  },
  RightButton(route, navigator, index, navState) {
    if (route.onPress) return (
      <TouchableHighlight
         onPress={ () => route.onPress() }>
         <Text style={[styles.navBarText, styles.navBarButtonText]}>
              { route.rightText || 'Right Button' }
         </Text>
       </TouchableHighlight>);
  },
  Title(route, navigator, index, navState) {
    return <Text style={[styles.navBarText, styles.navBarTitleText]}>Yu-Gi-Oh Card Viewer</Text>;
  }
};

class YuGiOhCardViewer extends Component {
  render() {
    return (
        <Navigator
          configureScene={ this.configureScene }
          style={styles.container}
          initialRoute={{id: 'search'}}
          renderScene={this.navigatorRenderScene}
          navigationBar={
            <Navigator.NavigationBar
              style={styles.navBar}
              routeMapper={ NavigationBarRouteMapper } />
          }
        />
    );
  }

  configureScene(route, routeStack){
    return Navigator.SceneConfigs.PushFromRight;
  }

  navigatorRenderScene(route, navigator) {
    var _navigator = navigator;
    switch (route.id) {
      case 'search':
        return (<SearchPage navigator={navigator} title="search"/>);
      case 'view':
        return (<CardView navigator={navigator} {...route.passProps}/>);
    }
  }
}

AppRegistry.registerComponent('YuGiOhCardViewer', () => YuGiOhCardViewer);
