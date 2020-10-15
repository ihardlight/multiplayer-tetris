import { Color, Figure } from '../types';
import { mapFigureTypeToColor } from './mapFigureTypeToColor';

export const mapFigureToColor = (figure: Figure): Color =>
  mapFigureTypeToColor(figure.type);
