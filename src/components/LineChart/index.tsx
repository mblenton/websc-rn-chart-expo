import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { DrawXaxis } from './DrawXaxis';
import { DrawYaxis } from './DrawYaxis';
import { DrawLine } from './DrawLine';
import { getXYscale } from './getXYscale';
import { generateLinePath } from './generateLinePath';

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
  cursorValuesContainer: {
    height: 30,
    width: 140,
    alignItems: 'center',
    // borderWidth: 1,
  },
});

export const LineChart = (): JSX.Element => {
  const { xScale, yScale } = getXYscale({
    width,
    height,
  });

  const { linePath } = generateLinePath({
    xScale,
    yScale,
    data,
  });

  // linePath = M9.94,115.5686274509804C16.566666666666666,123.8235294117647,23.19333333333333,132.078431372549,29.82,132.078431372549C36.446666666666665,132.078431372549,43.07333333333333,115.5686274509804,49.699999999999996,115.5686274509804C56.32666666666666,115.5686274509804,62.95333333333333,132.078431372549,69.58,132.078431372549C79.52,132.078431372549,89.46,107.31372549019608,99.39999999999999,107.31372549019608C109.33999999999999,107.31372549019608,119.28,123.82352941176471,129.22,123.82352941176471C142.47333333333333,123.82352941176471,155.72666666666666,94.1058823529412,168.98,82.54901960784315C185.54666666666665,68.10294117647061,202.11333333333332,59.389433551198266,218.67999999999998,49.52941176470589C228.61999999999998,43.61339869281046,238.56,33.01960784313725,248.5,33.01960784313725C255.12666666666667,33.01960784313725,261.75333333333333,66.0392156862745,268.38,66.0392156862745C271.6933333333333,66.0392156862745,275.00666666666666,0,278.32,0C281.6333333333333,0,284.94666666666666,8.254901960784313,288.26,24.764705882352935C291.5733333333333,41.27450980392156,294.88666666666666,78.42156862745098,298.2,115.5686274509804

  return (
    <View style={styles.mainContainer}>
      <View style={styles.chartContainer}>
        <Svg style={StyleSheet.absoluteFill}>
          <G>
            <DrawXaxis xScale={xScale} height={height} width={width} />
            <DrawYaxis yScale={yScale} height={height} />
          </G>
          <DrawLine linePath={linePath as string} />
        </Svg>
      </View>
    </View>
  );
};
