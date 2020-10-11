import { Coordinate, Figure, Orientation } from '@/types';

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
  // const dimension = figure.cells.reduce(
  //   (max, { coordinate }) => Math.max(max, ...coordinate),
  //   0,
  // );

  const rotatedCells = figure.cells;

  return {
    ...figure,
    cells: rotatedCells,
  };
};
