import React from 'react';
import { G, Line, Text } from 'react-native-svg';
import * as d3Scale from 'd3-scale';

interface IDrawXaxis {
  width: number;
  height: number;
  xScale: d3Scale.ScaleLinear<number, number>;
}

export const DrawXaxis = ({
  xScale,
  width,
  height,
}: IDrawXaxis): JSX.Element => {
  const numberOfTicks = xScale.ticks().length;
  // numberOfTicks = 16
  const ticks = xScale.ticks(numberOfTicks);
  // ticks = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30];

  return (
    <G key="xAxis" fill="none" transform={`translate(35, ${height - 30})`}>
      <Line stroke="rgba(0,0,0,1)" x1="0" y1="0" x2={width - 80} y2="0" />
      {ticks.map(tick => {
        const xTick = xScale(tick);
        // for tick = 0 xTick = 0
        // for tick = 2 xTick = 19.88
        // for tick = 4 xTick = 39.76
        // for tick = 30 xTick = 298.20
        return (
          <G
            key={`xa_${tick}_0`}
            opacity="1"
            transform={`translate(${xTick}, 0)`}>
            <Line
              key={`xa_${tick}_1`}
              y2={8}
              strokeWidth={1}
              stroke="rgba(0,0,0,1)"
            />
            <Text fontSize="14" fill="rgba(0,0,0,1)" y="20" x="-8">
              {tick}
            </Text>
          </G>
        );
      })}
    </G>
  );
};
