import { Cell, Color } from '@/types';

export enum Type {
  J,
  I,
  O,
  L,
  Z,
  T,
  S,
}

export type Figure = {
  type: Type;
  color: Color;
  cells: Cell[];
};
