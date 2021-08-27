import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { DrawXaxis } from './DrawXaxis';
import { DrawYaxis } from './DrawYaxis';
import { DrawLine } from './DrawLine';
import { getXYscale } from './getXYscale';
import { generateLinePath } from './generateLinePath';
import { Cursor } from './Cursor';
import { CursorValue } from './CursorValue';

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
  const [currentCursorValue, setCurrentCursorValue] = useState({ x: 0, y: 0 });

  const [isCursorActive, setIsCursorActive] = useState(false);

  const { xScale, yScale, minXvalue, maxXvalue } = getXYscale({
    data,
    width,
    height,
  });

  const { linePath } = generateLinePath({
    xScale,
    yScale,
    data,
  });

  return (
    <View style={styles.mainContainer}>
      <View style={styles.cursorValuesContainer}>
        <CursorValue
          x={currentCursorValue.x}
          y={currentCursorValue.y}
          isCursorActive={isCursorActive}
        />
      </View>
      <View style={styles.chartContainer}>
        <Svg style={StyleSheet.absoluteFill}>
          <G fill="none">
            <DrawXaxis xScale={xScale} height={height} width={width} />
            <DrawYaxis yScale={yScale} height={height} />
          </G>
          <DrawLine
            linePath={linePath as string}
            height={height}
            width={width}
          />
        </Svg>
        <Cursor
          minXvalue={Number(minXvalue)}
          maxXvalue={Number(maxXvalue)}
          linePath={linePath as string}
          xScale={xScale}
          yScale={yScale}
          setCurrentCursorValue={setCurrentCursorValue}
          setIsCursorActive={setIsCursorActive}
        />
      </View>
    </View>
  );
};
