import React from 'react';
import styled from 'styled-components';
import { GridContainer } from '../GridContainer';
import { FullMenuItem } from './FullMenuItem';
import { isMobileBrowser } from '../../utilities';
import gift from '../../images/gift.svg';
import snake from '../../images/snake-tooltip.svg';

// Define the number of grid columns for specific view port sizes
const gridColumnIntervals = [
  { width: 800, columns: 1 },
  { width: 1200, columns: 2 },
  { width: 99999, columns: 4 },
];

export class FullMenu extends React.Component {
  render() {
    return (
      <Container>
        <GridContainer gridColumnIntervals={gridColumnIntervals} gridGap={'0px'}>
          <FullMenuItem link="/wishlist" text="Wishlist" icon={gift} />
          <FullMenuItem link="/socialmedia" text="Find me" />
          <FullMenuItem link="/coolstuff" text="Cool stuff'n'tricks" />
          {isMobileBrowser() || <FullMenuItem 
            link="/snake"
            text="Play snake"
            icon={snake} />}
        </GridContainer>
      </Container>
    )
  }
}

const Container = styled.div`
  width: 100%;
  margin: 0;
`;
