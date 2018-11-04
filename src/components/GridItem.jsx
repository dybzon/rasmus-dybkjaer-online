import * as React from 'react';
import styled, { css } from 'styled-components';

export const GridItem = props => 
(<StyledGridItem {...props}>
  {props.children}
</StyledGridItem>);

const StyledGridItem = styled.div`
  ${props => css`
    grid-column-start: ${props.gridColumnStart};
    grid-column-end: ${props.gridColumnEnd};
    grid-row-start: ${props.gridRowStart};
    grid-row-end: ${props.gridRowEnd};`}
`;
