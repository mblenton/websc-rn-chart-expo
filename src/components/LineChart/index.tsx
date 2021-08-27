import React, { useMemo } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { G } from 'react-native-svg';
import { graphql, useLazyLoadQuery, useSubscription } from 'react-relay';
import { DrawXaxis } from './DrawXaxis';
import { DrawYaxis } from './DrawYaxis';
import { DrawLine } from './DrawLine';
import { getXYscale } from './getXYscale';
import { generateLinePath } from './generateLinePath';
import { Cursor } from './Cursor';
import { LineChartQuery } from './__generated__/LineChartQuery.graphql';

// import data from './data.json';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
const width = screenWidth * 0.98 - 4;
const height = screenHeight * (4 / 17);

export const LineChart = (): JSX.Element => {
  const graphqlQuery = graphql`
    query LineChartQuery {
      chartData {
        x
        y
      }
    }
  `;

  const graphqlSubscription = graphql`
    subscription LineChartSubscription {
      chartData {
        x
        y
      }
    }
  `;

  const { chartData: data } = useLazyLoadQuery<LineChartQuery>(
    graphqlQuery,
    {}, // for variables - there are no variables in our example
  );

  // IMPORTANT: your config should be memoized.
  // Otherwise, useSubscription will re-render too frequently.
  const config = useMemo(
    () => ({
      variables: {},
      subscription: graphqlSubscription,
    }),
    [graphqlSubscription],
  );

  useSubscription(config);

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
    <View style={styles.container}>
      <Svg style={StyleSheet.absoluteFill}>
        <G fill="none">
          <DrawXaxis xScale={xScale} height={height} width={width} />
          <DrawYaxis yScale={yScale} height={height} />
        </G>
        <DrawLine linePath={linePath as string} height={height} width={width} />
      </Svg>
      <Cursor
        minXvalue={Number(minXvalue)}
        maxXvalue={Number(maxXvalue)}
        linePath={linePath as string}
        xScale={xScale}
        yScale={yScale}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width,
    height,
  },
});
