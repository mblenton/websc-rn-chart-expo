import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';
import { getYForX, parse } from 'react-native-redash';
import * as d3Scale from 'd3-scale';

const CURSOR = 50;
const cursorOutherColor = 'rgba(0, 0, 0, 0.1)';
const cursorInnerColor = 'black';
const styles = StyleSheet.create({
  cursor: {
    width: CURSOR,
    height: CURSOR,
    borderRadius: CURSOR / 2,
    backgroundColor: cursorOutherColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cursorBody: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: cursorInnerColor,
  },
  panArea: {
    width: '100%',
    height: '100%',
    // borderWidth: 1,
  },
});

interface IInvertCurrentCursorValue {
  xValue: number;
  yValue: number;
}
interface CursorProps {
  linePath: string;
  minXvalue: number;
  maxXvalue: number;
  xScale: d3Scale.ScaleLinear<number, number>;
  yScale: d3Scale.ScaleLinear<number, number>;
  setCurrentCursorValue: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >;
  setIsCursorActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Cursor = ({
  linePath,
  minXvalue,
  maxXvalue,
  xScale,
  yScale,
  setCurrentCursorValue,
  setIsCursorActive,
}: CursorProps): JSX.Element => {
  const parsedPath = parse(linePath);

  // define variables for animation
  const isActive = useSharedValue(false);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  // invert scaled numbers -> get actual values
  const invertCurrentCursorValue = ({
    xValue,
    yValue,
  }: IInvertCurrentCursorValue) => {
    const x = Number(xScale.invert(Number(xValue)).toFixed(2));
    const y = Number(yScale.invert(Number(yValue)).toFixed(2));
    // set our states variables -> show current drag values in UI
    setCurrentCursorValue({ x, y });
  };

  // get x and y values when dragging cursor along the curve (path)
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isActive.value = true;
      runOnJS(setIsCursorActive)(true);
    },
    onActive: event => {
      // limit cursor for min and max X value
      translationX.value =
        event.x > minXvalue
          ? event.x > maxXvalue
            ? maxXvalue
            : event.x
          : minXvalue;

      translationY.value = Number(getYForX(parsedPath, translationX.value));

      runOnJS(invertCurrentCursorValue)({
        xValue: Number(translationX.value),
        yValue: Number(translationY.value),
      });
    },
    onEnd: () => {
      isActive.value = false;
      runOnJS(setIsCursorActive)(false);
    },
  });

  // cursor pointer animation -> movement and scale
  const styleAnimatedCursor = useAnimatedStyle(() => {
    const translateX = Number(translationX.value) - CURSOR / 2 + 35;
    const translateY = Number(translationY.value) - CURSOR / 2 + 10;
    return {
      transform: [
        { translateX },
        { translateY },
        { scale: withSpring(isActive.value ? 1 : 0) },
      ],
    };
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={styles.panArea}>
          <Animated.View style={[styles.cursor, styleAnimatedCursor]}>
            <View style={styles.cursorBody} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};
