import { Cell } from '@/types/cell';
import { Figure } from '@/types/figure';

export type Board = {
  height: number;
  width: number;
  score: number;
  speed: number;
  cells: Cell[];
  current: Figure;
  next: Figure;
};
