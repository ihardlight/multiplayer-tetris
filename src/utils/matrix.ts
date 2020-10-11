export type Callable<T> = (item: T) => T;
export type Mappable<T, K> = (item: T) => K;

export const compose = <T>(a: Callable<T>, b: Callable<T>) => (item: T): T =>
  a(b(item));

export const reverse = <T>(array: T[]): T[] => [...array].reverse();

export const transpose = <T>(array: T[][]): T[][] =>
  array[0].map((_, colIndex) => array.map(row => row[colIndex]));

export const get = <T>(id: number) => (array: T[]): T => array[id];

export const map = <T, K>(fn: Mappable<T, K>, array: T[]): K[] =>
  array.map(item => fn(item));

export const pluck = <T>(index: number, data: T[][]): T[] =>
  map<T[], T>(get<T>(index), data);

export const rangeFrom = <T>(array: T[]): number[] =>
  array.map((_, ind) => ind);

export const flipMatrix = <T>(matrix: T[][]): T[][] =>
  map(index => pluck<T>(index, matrix), rangeFrom(transpose(matrix)));

export const rotateMatrix = compose(flipMatrix, reverse);
