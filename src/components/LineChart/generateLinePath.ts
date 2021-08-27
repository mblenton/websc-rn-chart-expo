import * as d3Shape from 'd3-shape';
import * as d3Scale from 'd3-scale';
import { IValue } from './getXYscale';

interface IGenerateLinePath {
  readonly data: ReadonlyArray<IValue>;
  xScale: d3Scale.ScaleLinear<number, number>;
  yScale: d3Scale.ScaleLinear<number, number>;
}
interface IGenerateLinePathR {
  linePath: string | null;
}

export const generateLinePath = ({
  xScale,
  yScale,
  data,
}: IGenerateLinePath): IGenerateLinePathR => {
  const line = d3Shape
    .line<IValue>()
    .x(d => xScale(Number(d.x))) // set the x values for the line generator
    .y(d => yScale(Number(d.y))) // set the y values for the line generator
    .curve(d3Shape.curveMonotoneX); // apply smoothing to the line

  return { linePath: line(data) };
};
