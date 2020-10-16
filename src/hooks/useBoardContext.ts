import { createContext, useContext } from 'react';
import { Board, Direction, Type } from '../types';
import { initFigure } from '../utils';

export type BoardContextValue = Board & {
  rotateFigure: () => void;
  pushDownFigure: () => void;
  moveFigure: (direction: Direction.LEFT | Direction.RIGHT) => void;
};

export const BoardContext = createContext<BoardContextValue>({
  cells: [],
  current: initFigure(Type.O),
  height: 0,
  next: initFigure(Type.S),
  rotateFigure: () => {},
  pushDownFigure: () => {},
  moveFigure: () => {},
  score: 0,
  speed: 0,
  width: 0,
});

export const useBoardContext = (): BoardContextValue =>
  useContext(BoardContext);
