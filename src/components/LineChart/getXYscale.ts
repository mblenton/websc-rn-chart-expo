import * as d3Scale from 'd3-scale';
export interface IValue {
  readonly x: number | null;
  readonly y: number | null;
}
interface IGetScaleFunction {
  domain: Array<number>;
  range: Array<number>;
}
const getD3ScaleFunction = ({
  domain,
  range,
}: IGetScaleFunction): d3Scale.ScaleLinear<number, number> => {
  return d3Scale
    .scaleLinear()
    .domain(domain) // input
    .range(range) // output
    .nice(); // will round the domain to ‘nice’ round values
};

interface IgetXYscale {
  width: number;
  height: number;
}

interface IgetXYscaleR {
  xScale: d3Scale.ScaleLinear<number, number>;
  yScale: d3Scale.ScaleLinear<number, number>;
}

export const getXYscale = ({ width, height }: IgetXYscale): IgetXYscaleR => {
  const xScale = getD3ScaleFunction({
    domain: [0, 30], // 30 -> fixed max X to avoid x scale dynamic ticks change
    range: [0, width - 80],
  });

  const yScale = getD3ScaleFunction({
    domain: [0, 18], // 18 -> fixed max Y to avoid x scale dynamic ticks change
    range: [height - 50, 0],
  });

  return {
    xScale,
    yScale,
  };
};
