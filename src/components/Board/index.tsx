// eslint-disable-next-line no-use-before-define
import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { BoardContext, BoardContextValue } from '../../hooks';
import { Cell, Direction, Figure, Orientation, Type } from '../../types';
import {
  initFigure,
  mapCellArrayToRecord,
  shiftFigure,
  canMoveDownFigure,
  getRandomFigure,
  canCleanRowList,
} from '../../utils';

const MULTIPLAYER = 10;
const START_SPEED = 1;
const SECOND = 1000;
const DIMENSIONS: [number, number] = [8, 12];
const OFFSET: [number, number] = [Math.floor(DIMENSIONS[0] / 2), DIMENSIONS[1]];

const Board: FC = () => {
  const [gameOver, setGameOver] = useState<boolean>(false);
  const makeGameOver = useCallback(() => setGameOver(true), []);

  const [score, setScore] = useState<number>(0);
  const increaseScore = useCallback(
    (value = 1) => setScore(score => score + value),
    [],
  );

  const [speed, setSpeed] = useState<number>(START_SPEED);
  const increaseSpeed = useCallback(
    () => setSpeed(speed => speed + 1 / speed),
    [],
  );

  const [cells, setCells] = useState<Cell[]>([]);

  const [currentFigure, setCurrentFigure] = useState<Figure>(() =>
    initFigure(Type.L, OFFSET),
  );

  const [nextFigure, setNextFigure] = useState<Figure>(() =>
    initFigure(Type.O, OFFSET),
  );

  const rotateFigure = useCallback(() => {}, []);
  const pushDownFigure = useCallback(() => {}, []);
  const moveFigure = useCallback(
    (direction: Direction.RIGHT | Direction.LEFT) => {},
    [],
  );

  const cellMap = useMemo(() => mapCellArrayToRecord(cells), [cells]);

  const tick = useCallback(() => {
    if (!canMoveDownFigure(cellMap, currentFigure)) {
      makeGameOver();
      return;
    }

    const movedFigure = shiftFigure(currentFigure, 1, Orientation.VERTICAL);
    setCurrentFigure(movedFigure);

    if (!canMoveDownFigure(cellMap, movedFigure)) {
      setCells(cells => [...cells, ...currentFigure.cells]);
      setCurrentFigure(nextFigure);
      setNextFigure(() => getRandomFigure(OFFSET));
      increaseScore();

      const rowIndices = canCleanRowList(cellMap, currentFigure, DIMENSIONS);
      if (rowIndices.length > 0) {
        increaseScore(rowIndices.length * MULTIPLAYER);
        increaseSpeed();
        setCells(cells =>
          [...cells, ...currentFigure.cells].filter(({ coordinate }) =>
            rowIndices.includes(coordinate[1]),
          ),
        );
      }
    }

    // TODO: move cells down if possible
  }, [
    cellMap,
    currentFigure,
    increaseScore,
    increaseSpeed,
    makeGameOver,
    nextFigure,
  ]);

  useEffect(() => {
    if (gameOver) return;

    const intervalId = setInterval(tick, SECOND / speed);

    return () => clearInterval(intervalId);
  }, [gameOver, tick, speed]);

  const boardContextValue: BoardContextValue = useMemo(
    () => ({
      cells,
      current: currentFigure,
      next: nextFigure,
      width: DIMENSIONS[0],
      height: DIMENSIONS[1],
      speed,
      score,
      rotateFigure,
      pushDownFigure,
      moveFigure,
    }),
    [
      cells,
      currentFigure,
      moveFigure,
      nextFigure,
      pushDownFigure,
      rotateFigure,
      score,
      speed,
    ],
  );

  return (
    <BoardContext.Provider value={boardContextValue}>
      <div />
    </BoardContext.Provider>
  );
};

export default Board;
