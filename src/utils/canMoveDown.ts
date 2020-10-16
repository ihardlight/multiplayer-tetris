import { CellRecord, Figure, Orientation } from '../types';
import { shiftFigure } from './affine';
import { getCellHash } from './mapCellArrayToRecord';

export const canMoveDownFigure = (
  cellsMap: CellRecord,
  figure: Figure,
): boolean =>
  shiftFigure(figure, 1, Orientation.VERTICAL).cells.every(
    cell => !cellsMap[getCellHash(cell)] && cell.coordinate[1] >= 1,
  );
