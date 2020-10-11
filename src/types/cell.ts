import { Color } from '@/types/color';

export type Coordinate = [number, number];

export type Cell = {
  coordinate: Coordinate;
  color: Color;
};
