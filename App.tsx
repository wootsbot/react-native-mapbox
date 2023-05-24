/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, View} from 'react-native';

import Mapbox from '@rnmapbox/maps';

const MAPBOX_ACCESS_TOKEN = '';

Mapbox.setAccessToken(MAPBOX_ACCESS_TOKEN);

const centerCoord = [-99.4006254, 17.5749345];

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar />
      <View style={styles.page}>
        <View style={styles.container}>
          <Mapbox.MapView style={styles.map}>
            <Mapbox.Camera
              defaultSettings={{centerCoordinate: centerCoord, zoomLevel: 14}}
              centerCoordinate={centerCoord}
              zoomLevel={14}
            />
          </Mapbox.MapView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: '100%',
    width: '100%',
  },
  map: {
    flex: 1,
  },
});

export default App;
