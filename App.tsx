import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { StyleSheet, View } from 'react-native';
import { LineChart } from './src/components/LineChart';

const backgroundColor = 'white';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const App = (): JSX.Element => {
  return (
    <Suspense fallback={false}>
      <View style={styles.container}>
        <LineChart />
        <StatusBar style="auto" />
      </View>
    </Suspense>
  );
};

export default App;
