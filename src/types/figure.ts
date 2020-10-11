import { Cell } from '@/types/cell';

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
  cells: Cell[];
};
