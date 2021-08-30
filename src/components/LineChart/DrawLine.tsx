import React from 'react';
import { G, Path, Text } from 'react-native-svg';

interface IDrawLine {
  linePath: string;
}

export const DrawLine = ({ linePath }: IDrawLine): JSX.Element => {
  return (
    <G>
      <Text fill="#000" fontSize="20" x="150" y="100">
        Solve task 2
      </Text>
    </G>
  );
};
