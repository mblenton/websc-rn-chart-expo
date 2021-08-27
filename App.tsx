import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { StyleSheet, View } from 'react-native';
import { LineChart } from './src/components/LineChart';
import { environment } from './src/relay-utils/environment';

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
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={false}>
        <View style={styles.container}>
          <LineChart />
          <StatusBar style="auto" />
        </View>
      </Suspense>
    </RelayEnvironmentProvider>
  );
};

export default App;
