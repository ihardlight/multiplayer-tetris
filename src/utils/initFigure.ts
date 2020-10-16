import { Cell, Figure, Orientation, Type } from '../types';
import {
  mapFigureTypeToColor,
  mapFigureTypeToCoordinates,
  shiftCoordinate,
} from '../utils';

export const initFigure = (
  type: Type,
  offset: [number, number] = [0, 0],
): Figure => {
  const color = mapFigureTypeToColor(type);
  const cells: Cell[] = mapFigureTypeToCoordinates(type).map(coordinate => {
    const shiftedHorizontal = shiftCoordinate(
      coordinate,
      offset[0],
      Orientation.HORIZONTAL,
    );
    const shiftedVertical = shiftCoordinate(
      shiftedHorizontal,
      offset[1],
      Orientation.VERTICAL,
    );

    return {
      coordinate: shiftedVertical,
      color,
    };
  });

  return { type, color, cells };
};

export const getRandomFigure = (offset: [number, number] = [0, 0]): Figure => {
  const randomInd = Math.floor(Math.random() * Object.values(Type).length);
  const type = Object.values(Type)[randomInd] as Type;
  return initFigure(type, offset);
};
