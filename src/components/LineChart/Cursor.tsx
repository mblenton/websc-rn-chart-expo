import React from 'react';
import { View, StyleSheet } from 'react-native';
import { PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useDerivedValue,
  useAnimatedStyle,
  withSpring,
  interpolate,
} from 'react-native-reanimated';
import { getYForX, parse } from 'react-native-redash';
import { CursorValue } from './CursorValue';
import { getMaxMinValues } from './getMaxMinValues';
import { IValue } from './getXYscale';
import * as d3Scale from 'd3-scale';

const CURSOR = 50;
const cursorOutherColor = 'rgba(0, 0, 0, 0.1)';
const cursorInnerColor = 'black';
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
  },
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
  cursorValuesContainer: {
    height: 30,
    width: 140,
    alignItems: 'center',
    position: 'absolute',
    top: -30,
    // borderWidth: 1,
  },
});

interface CursorProps {
  linePath: string;
  xScale: d3Scale.ScaleLinear<number, number>;
  yScale: d3Scale.ScaleLinear<number, number>;
  readonly data: ReadonlyArray<IValue>;
}

export const Cursor = ({
  linePath,
  xScale,
  yScale,
  data,
}: CursorProps): JSX.Element => {
  const { minXvalue, maxXvalue, minYvalue, maxYvalue } = getMaxMinValues({
    data,
  });
  const maxXvalueScaled = xScale(maxXvalue);
  const maxYvalueScaled = yScale(maxXvalue);
  const minYvalueScaled = yScale(minYvalue);

  const parsedPath = parse(linePath);

  // define variables for animation
  const isActive = useSharedValue(false);
  const translationX = useSharedValue(0);
  const translationY = useSharedValue(0);

  // get x and y values when dragging cursor along the curve (path)
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isActive.value = true;
    },
    onActive: event => {
      // limit cursor for min and max X value
      translationX.value =
        event.x > minXvalue
          ? event.x > maxXvalueScaled
            ? maxXvalueScaled
            : event.x
          : minXvalue;

      translationY.value = Number(getYForX(parsedPath, translationX.value));
    },
    onEnd: () => {
      isActive.value = false;
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

  // values animation
  const styleAnimatedValues = useAnimatedStyle(() => {
    return {
      opacity: withSpring(isActive.value ? 1 : 0),
    };
  });

  const x = useDerivedValue(() => {
    return interpolate(
      translationX.value,
      [0, maxXvalueScaled],
      [0, maxXvalue],
    ).toFixed(2);
  }, [translationX]);

  const y = useDerivedValue(() => {
    return interpolate(
      translationY.value,
      [minYvalueScaled, maxYvalueScaled],
      [minYvalue, maxYvalue],
    ).toFixed(2);
  }, [translationY]);

  return (
    <View style={styles.mainContainer}>
      <Animated.View
        style={[styles.cursorValuesContainer, styleAnimatedValues]}>
        <CursorValue x={x} y={y} />
      </Animated.View>
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
