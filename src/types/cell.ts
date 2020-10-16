import { Color } from './color';

export type Coordinate = [number, number];

export type Cell = {
  coordinate: Coordinate;
  color: Color;
};

export type CellRecord = Record<string, Color>;
