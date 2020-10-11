import { Color, Figure } from '@/types';
import { mapFigureTypeToColor } from '@/utils/mapFigureTypeToColor';

export const mapFigureToColor = (figure: Figure): Color =>
  mapFigureTypeToColor(figure.type);
