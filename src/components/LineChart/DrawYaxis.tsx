import React from 'react';
import { G, Line, Text } from 'react-native-svg';
import * as d3 from 'd3-scale';

interface IDrawYaxis {
  height: number;
  yScale: d3.ScaleLinear<number, number>;
}

export const DrawYaxis = ({ yScale, height }: IDrawYaxis): JSX.Element => {
  const numberOfTicks = yScale.ticks().length;
  const ticks = yScale.ticks(numberOfTicks);

  return (
    <G key="yAxis" fill="none" transform="translate(30, 10)">
      <Line stroke="rgba(0,0,0,1)" x1="0" y1="0" x2="0" y2={height - 50} />
      {ticks.map(tick => {
        const yTick = yScale(tick);
        return (
          <G
            key={`ya_${tick}_0`}
            opacity="1"
            transform={`translate(0, ${yTick})`}>
            <Line
              key={`ya_${tick}_1`}
              x2={-6}
              strokeWidth={1}
              stroke="rgba(0,0,0,1)"
            />
            <Text fontSize="10" fill="rgba(0,0,0,1)" x="-25" y="5">
              {tick}
            </Text>
          </G>
        );
      })}
    </G>
  );
};
