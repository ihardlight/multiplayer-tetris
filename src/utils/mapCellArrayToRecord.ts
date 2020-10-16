import { Cell, CellRecord } from '../types';

export const getCellHash = ({ coordinate }: Cell): string =>
  `${coordinate[0]}-${coordinate[1]}`;

export const mapCellArrayToRecord = (cells: Cell[]): CellRecord =>
  cells.reduce(
    (accum, cell) => Object.assign(accum, { [getCellHash(cell)]: cell.color }),
    {},
  );
