import * as d3Scale from 'd3-scale';

export interface IValue {
  readonly x: number | null;
  readonly y: number | null;
}

interface IGetMaxMinValuesR {
  minXvalue: number;
  maxXvalue: number;
}

interface IGetMaxMinValues {
  readonly data: ReadonlyArray<IValue>;
}

const getMaxMinValues = ({ data }: IGetMaxMinValues): IGetMaxMinValuesR => {
  if (data?.length) {
    const allXvalues = data.map(item => Number(item.x));
    const maxXvalue = Math.max(...allXvalues);
    const minXvalue = Math.min(...allXvalues);
    return { minXvalue, maxXvalue };
  }
  return { minXvalue: 0, maxXvalue: 0 };
};

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
  readonly data: ReadonlyArray<IValue>;
  width: number;
  height: number;
}

interface IgetXYscaleR {
  xScale: d3Scale.ScaleLinear<number, number>;
  yScale: d3Scale.ScaleLinear<number, number>;
  minXvalue?: number;
  maxXvalue?: number;
}

export const getXYscale = ({
  data,
  width,
  height,
}: IgetXYscale): IgetXYscaleR => {
  const { minXvalue, maxXvalue } = getMaxMinValues({
    data,
  });

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
    minXvalue: xScale(minXvalue),
    maxXvalue: xScale(maxXvalue),
  };
};
