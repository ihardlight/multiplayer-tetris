import { Coordinate, Type } from '@/types';

export const mapFigureTypeToCoordinates = (type: Type): Coordinate[] => {
  switch (type) {
    case Type.J:
      return [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ];
    case Type.I:
      return [
        [0, 0],
        [1, 0],
        [2, 0],
        [3, 0],
      ];
    case Type.L:
      return [
        [0, 0],
        [0, 1],
        [0, 2],
        [1, 2],
      ];
    case Type.O:
      return [
        [0, 0],
        [1, 0],
        [1, 1],
        [0, 1],
      ];
    case Type.S:
      return [
        [0, 1],
        [1, 1],
        [1, 0],
        [2, 0],
      ];
    case Type.T:
      return [
        [0, 0],
        [1, 0],
        [2, 0],
        [1, 1],
      ];
    case Type.Z:
      return [
        [0, 0],
        [1, 0],
        [1, 1],
        [2, 1],
      ];
  }
};
