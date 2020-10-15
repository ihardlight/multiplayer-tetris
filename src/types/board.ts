import { Cell, Figure } from '../types';

export type Board = {
  height: number;
  width: number;
  score: number;
  speed: number;
  cells: Cell[];
  current: Figure;
  next: Figure;
};
