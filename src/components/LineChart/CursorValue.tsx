import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ReText } from 'react-native-redash';
import Animated from 'react-native-reanimated';

interface ICursorValue {
  x: Readonly<Animated.SharedValue<string>>;
  y: Readonly<Animated.SharedValue<string>>;
  isCursorActive?: boolean;
}

const styles = StyleSheet.create({
  valuesContainer: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 1,
  },
  variableContainer: {
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  valueContainer: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
  },
  value: {
    fontSize: 18,
  },
});

export const CursorValue = ({
  x,
  y,
  isCursorActive = true,
}: ICursorValue): JSX.Element | null => {
  return isCursorActive ? (
    <View style={styles.valuesContainer}>
      <View style={styles.variableContainer}>
        <Text style={styles.value}>X:</Text>
      </View>
      <View style={styles.valueContainer}>
        <ReText text={x} />
      </View>
      <View style={styles.variableContainer} />
      <View style={styles.variableContainer}>
        <Text style={styles.value}>Y:</Text>
      </View>
      <View style={styles.valueContainer}>
        <ReText text={y} />
      </View>
    </View>
  ) : null;
};
