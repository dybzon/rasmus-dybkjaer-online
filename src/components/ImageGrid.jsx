import * as React from 'react';
import { GridContainer } from './GridContainer';

// Define the number of grid columns for specific view port sizes
const gridColumnIntervals = [
  { width: 500, columns: 1 },
  { width: 680, columns: 2 },
  { width: 780, columns: 3 },
  { width: 1200, columns: 4 },
  { width: 99999, columns: 5 },
];

export const ImageGrid = props => {
  return (
    <GridContainer gridColumnIntervals={gridColumnIntervals} width={800}>
      {props.children}
    </GridContainer>
  );
}
