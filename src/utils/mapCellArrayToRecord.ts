import { Cell, CellRecord, Coordinate } from '../types';

export const getCellHash = (coordinate: Coordinate): string =>
  `${coordinate[0]}-${coordinate[1]}`;

export const mapCellArrayToRecord = (cells: Cell[]): CellRecord =>
  cells.reduce(
    (accum, { coordinate, color }) =>
      Object.assign(accum, { [getCellHash(coordinate)]: color }),
    {},
  );
