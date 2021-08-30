import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { DrawXaxis } from './DrawXaxis';
import { DrawYaxis } from './DrawYaxis';
import { getXYscale } from './getXYscale';

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
    width,
    height,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.chartContainer}>
        <Svg style={StyleSheet.absoluteFill}>
          <G>
            <DrawXaxis xScale={xScale} height={height} width={width} />
            <DrawYaxis yScale={yScale} height={height} />
          </G>
        </Svg>
      </View>
    </View>
  );
};
