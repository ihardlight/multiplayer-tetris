type Callable<T> = (item: T) => T;
type Mappable<T, K> = (item: T) => K;

const compose = <T>(a: Callable<T>, b: Callable<T>) => (item: T): T =>
  a(b(item));

const reverse = <T>(array: T[]): T[] => [...array].reverse();

const get = <T>(id: number) => (array: T[]): T => array[id];

const map = <T, K>(fn: Mappable<T, K>, array: T[]): K[] =>
  array.map(item => fn(item));

const pluck = <T>(index: number, data: T[][]): T[] =>
  map<T[], T>(get<T>(index), data);

const rangeFrom = <T>(array: T[]): number[] => array.map((_, ind) => ind);

const flipMatrix = <T>(matrix: T[][]): T[][] =>
  map(index => pluck<T>(index, matrix), rangeFrom(matrix));

export const rotateMatrix = compose(flipMatrix, reverse);
export const flipMatrixCounterClockwise = compose(rotateMatrix, reverse);
export const rotateMatrixCounterClockwise = compose(flipMatrix, reverse);
