import { IValue } from './getXYscale';

interface IGetMaxMinValuesR {
  minXvalue: number;
  maxXvalue: number;
  minYvalue: number;
  maxYvalue: number;
}

interface IGetMaxMinValues {
  readonly data: ReadonlyArray<IValue>;
}

export const getMaxMinValues = ({
  data,
}: IGetMaxMinValues): IGetMaxMinValuesR => {
  if (data?.length) {
    const allXvalues = data.map(item => Number(item.x));
    const allYvalues = data.map(item => Number(item.y));
    const minXvalue = Math.min(...allXvalues);
    const maxXvalue = Math.max(...allXvalues);
    const minYvalue = Math.min(...allYvalues);
    const maxYvalue = Math.max(...allYvalues);
    return { minXvalue, maxXvalue, minYvalue, maxYvalue };
  }
  return { minXvalue: 0, maxXvalue: 0, minYvalue: 0, maxYvalue: 0 };
};
