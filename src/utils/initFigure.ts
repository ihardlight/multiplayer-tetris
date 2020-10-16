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

export const getRandomFigure = (): Figure => {
  const randomInd = Math.floor(Math.random() * Object.values(Type).length);
  const type = Object.values(Type)[randomInd] as Type;
  return initFigure(type);
};
