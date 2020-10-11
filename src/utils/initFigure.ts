import { Cell, Figure, Type } from '@/types';
import { mapFigureTypeToColor } from '@/utils/mapFigureTypeToColor';
import { mapFigureTypeToCoordinates } from '@/utils/mapFigureTypeToCoordinates';

export const initFigure = (type: Type): Figure => {
  const color = mapFigureTypeToColor(type);
  const cells: Cell[] = mapFigureTypeToCoordinates(type).map(coordinate => ({
    coordinate,
    color,
  }));

  return { type, cells };
};
