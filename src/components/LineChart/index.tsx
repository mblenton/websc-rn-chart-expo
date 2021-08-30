import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G, Text } from 'react-native-svg';
import { DrawXaxis } from './DrawXaxis';
import { DrawYaxis } from './DrawYaxis';
import { getXYscale } from './getXYscale';

import data from './data.json';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const width = screenWidth * 0.98 - 4;
const height = screenHeight * (4 / 17);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  chartContainer: {
    width,
    height,
    // borderWidth: 1,
  },
});

export const LineChart = (): JSX.Element => {
  const { xScale, yScale } = getXYscale({
    data,
    width,
    height,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.chartContainer}>
        <Svg style={StyleSheet.absoluteFill}>
          <G>
            <Text fill="#000" fontSize="20" x="150" y="100">
              Solve task 1
            </Text>
          </G>
        </Svg>
      </View>
    </View>
  );
};
