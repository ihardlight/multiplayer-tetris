import { Cell, Figure, Type } from '../types';
import { mapFigureTypeToColor, mapFigureTypeToCoordinates } from '../utils';

export const initFigure = (type: Type): Figure => {
  const color = mapFigureTypeToColor(type);
  const cells: Cell[] = mapFigureTypeToCoordinates(type).map(coordinate => ({
    coordinate,
    color,
  }));

  return { type, color, cells };
};
