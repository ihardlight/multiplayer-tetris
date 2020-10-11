import { Color, Type } from '@/types';

export const mapFigureTypeToColor = (type: Type): Color => {
  switch (type) {
    case Type.I:
      return Color.CYAN;
    case Type.J:
      return Color.BLUE;
    case Type.L:
      return Color.ORANGE;
    case Type.O:
      return Color.YELLOW;
    case Type.S:
      return Color.GREEN;
    case Type.T:
      return Color.VIOLET;
    case Type.Z:
      return Color.RED;
    default:
      return Color.BLACK;
  }
};
