import React from 'react';
import { G, Path, LinearGradient, Stop, Defs } from 'react-native-svg';

interface IDrawLine {
  linePath: string;
  width: number;
  height: number;
}

export const DrawLine = ({
  linePath,
  width,
  height,
}: IDrawLine): JSX.Element => {
  return (
    <G>
      <Defs>
        <LinearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="gradient">
          <Stop stopColor="#CDE3F8" offset="0%" />
          <Stop stopColor="#eef6fd" offset="80%" />
          <Stop stopColor="#FEFFFF" offset="100%" />
        </LinearGradient>
      </Defs>
      <Path
        key="line"
        transform="translate(35,10)"
        d={linePath}
        fill="transparent"
        strokeWidth={2}
        stroke="#46a2f8"
      />
      <Path
        key="gradient"
        transform="translate(35,10)"
        d={`${linePath} L ${width - 80} ${height - 41} L 25 ${height - 41}`}
        fill="url(#gradient)"
      />
    </G>
  );
};
