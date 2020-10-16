import { Cell, CellRecord, Figure, Orientation } from '../types';
import { shiftCoordinate, shiftFigure } from './affine';
import { getCellHash, mapCellArrayToRecord } from './mapCellArrayToRecord';

export const canMoveDownCell = (cellsMap: CellRecord, cell: Cell): boolean => {
  const shiftedCoordinate = shiftCoordinate(
    cell.coordinate,
    1,
    Orientation.VERTICAL,
  );
  return !cellsMap[getCellHash(shiftedCoordinate)] && shiftedCoordinate[1] >= 1;
};

export const canMoveDownFigure = (
  cellsMap: CellRecord,
  figure: Figure,
): boolean =>
  shiftFigure(figure, 1, Orientation.VERTICAL).cells.every(
    ({ coordinate }) =>
      !cellsMap[getCellHash(coordinate)] && coordinate[1] >= 1,
  );

export const canCleanRowList = (
  cellMap: CellRecord,
  figure: Figure,
  dimensions: [number, number],
): number[] => {
  const mergedMap = { ...cellMap, ...mapCellArrayToRecord(figure.cells) };

  const arrayByDimension = (index: number) =>
    Array(dimensions[index]).map((_, ind) => ind);
  const rows = arrayByDimension(1);
  const columns = arrayByDimension(0);

  return rows.reduce((accum: number[], rowInd) => {
    const fulfilled = columns.every(
      columnInd => mergedMap[getCellHash([rowInd, columnInd])],
    );

    if (fulfilled) {
      accum.push(rowInd);
    }

    return accum;
  }, []);
};
