import { Coordinate, Figure, Orientation } from '../types';
import { rotateMatrix } from './matrix';

const shiftCoordinate = (
  coordinate: Coordinate,
  shift = 0,
  orientation = Orientation.HORIZONTAL,
): Coordinate => {
  const [x, y] = coordinate;
  if (orientation === Orientation.HORIZONTAL) {
    return [x + shift, y];
  }

  return [x, y + shift];
};

export const shiftFigure = (
  figure: Figure,
  shift = 0,
  orientation = Orientation.HORIZONTAL,
): Figure => {
  const shiftedCells = figure.cells.map(cell => ({
    ...cell,
    coordinate: shiftCoordinate(cell.coordinate, shift, orientation),
  }));

  return {
    ...figure,
    cells: shiftedCells,
  };
};

export const rotateFigure = (figure: Figure): Figure => {
  const coordinateMatrix = figure.cells.map(({ coordinate }) => coordinate);
  const rotatedCoordinates = rotateMatrix(coordinateMatrix) as Coordinate[];

  const rotatedCells = rotatedCoordinates.map(coordinate => ({
    coordinate,
    color: figure.color,
  }));

  return {
    ...figure,
    cells: rotatedCells,
  };
};
