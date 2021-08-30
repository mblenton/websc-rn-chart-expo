import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { Suspense } from 'react';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { StyleSheet, View, Text, LogBox } from 'react-native';
import { ErrorBoundary } from './ErrorBoundary';
import { LineChart } from './src/components/LineChart';
import { environment } from './src/relay-utils/environment';

// ignore warnings for relay-hooks lib for Android
LogBox.ignoreLogs(['Warning: ...']);

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
      <View style={styles.container}>
        <ErrorBoundary>
          <Suspense fallback={<Text>loading data...</Text>}>
            <LineChart />
            <StatusBar style="auto" />
          </Suspense>
        </ErrorBoundary>
      </View>
    </RelayEnvironmentProvider>
  );
};

export default App;
