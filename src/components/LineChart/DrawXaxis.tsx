import React from 'react';
import { G, Line, Text } from 'react-native-svg';
import * as d3 from 'd3-scale';

interface IDrawXaxis {
  width: number;
  height: number;
  xScale: d3.ScaleLinear<number, number>;
}

export const DrawXaxis = ({
  xScale,
  width,
  height,
}: IDrawXaxis): JSX.Element => {
  const numberOfTicks = xScale.ticks().length;
  const ticks = xScale.ticks(numberOfTicks);

  return (
    <G key="xAxis" fill="none" transform={`translate(35, ${height - 30})`}>
      <Line stroke="rgba(0,0,0,1)" x1="0" y1="0" x2={width - 80} y2="0" />
      {ticks.map(tick => {
        const xTick = xScale(tick);
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
