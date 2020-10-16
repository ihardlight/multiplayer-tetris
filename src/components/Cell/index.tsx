import React, { FC } from 'react';
import { Color } from '../../types';

type Props = {
  color: Color;
};

const Cell: FC<Props> = ({ color }) => {
  return <div className="cell" style={{ background: color }} />;
};

export default Cell;
