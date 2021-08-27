import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface ICursorValue {
  x: number;
  y: number;
  isCursorActive: boolean;
}

const styles = StyleSheet.create({
  valuesContainer: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  valueContainer: {
    width: 70,
    // borderWidth: 1,
  },
  value: {
    fontSize: 18,
  },
});

export const CursorValue = ({
  x,
  y,
  isCursorActive,
}: ICursorValue): JSX.Element | null => {
  return isCursorActive ? (
    <View style={styles.valuesContainer}>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>x: {x}</Text>
      </View>
      <View style={styles.valueContainer}>
        <Text style={styles.value}>y: {y}</Text>
      </View>
    </View>
  ) : null;
};
