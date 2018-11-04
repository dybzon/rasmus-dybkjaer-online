import * as React from 'react';
import styled, { css } from 'styled-components';
import { GridItem } from './GridItem';

// Define the number of grid columns for specific view port sizes
const defaultGridColumnIntervals = [
  { width: 500, columns: 1 },
  { width: 680, columns: 2 },
  { width: 780, columns: 3 },
  { width: 1200, columns: 4 },
  { width: 99999, columns: 5 },
];

/**
 * A container that takes any number of children and positions them in a grid
 * structure based on the width of the screen.
 * 
 * The width and gridColumnIntervals can be overwritten through props.
 */
export class GridContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = { 
      gridColumnCount: 1, 
      width: this.props.width || window.innerWidth, 
      gridColumnIntervals: this.props.gridColumnIntervals || defaultGridColumnIntervals };
  }

  componentWillMount() {
    this.setState({ gridColumnCount: this.GridColumnCount });
  }

  componentDidMount() {
    // We may want to change the number of columns in the grid when the window is resized
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  render() {
    return (
      <Container {...this.state}>
        {this.GridItems}
      </Container>);
  }

  handleResize = () => {
    this.setState({ gridColumnCount: this.GridColumnCount });
  }

  get GridItems() {
    let counter = 1;
    const gridItems = [];
    const colCount = this.state.gridColumnCount;

    // Wrap each child in the GridContainer in a GridItem
    this.props.children.forEach((c, i) => {
      const rowStart = Math.ceil(counter / this.state.gridColumnCount);
      const colStart = (counter % colCount) === 0 ? colCount : (counter % colCount);
      counter++;
      gridItems.push(
        <GridItem 
          gridColumnStart={colStart} 
          gridColumnEnd={colStart+1} 
          gridRowStart={rowStart} 
          gridRowEnd={rowStart+1}
          key={i}>
            {c} 
          </GridItem>);
    });

    return gridItems;
  }

  get GridColumnCount() {
    // Get the number of columns matching the width.
    const width = this.state.width < window.innerWidth ? this.state.width : window.innerWidth;
    return this.state.gridColumnIntervals.find(g => g.width > width).columns;
  }
}

const Container = styled.div`
  display: grid;
  ${props => css`grid-template-columns: repeat(${props.gridColumnCount}, ${getGridItemWidth(props.gridColumnCount)});`} /* Consider changing column count through media query */
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-content: center;`;

function getGridItemWidth(gridColumnCount) {
  return `${(100.0 / gridColumnCount)}%`;
}