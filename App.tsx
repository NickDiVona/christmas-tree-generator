import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/configureStore';
import Tree from './src/components/treeComponent';
import TreeConfiguration from './src/components/treeConfigurationComponent';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <TreeConfiguration />
        <Tree />
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  }
});
