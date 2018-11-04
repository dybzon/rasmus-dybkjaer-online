import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../../utilities';
import { GridContainer } from '../GridContainer';
import { SquareMenuItem } from './SquareMenuItem';
import { ImageLink } from '../ImageLink';
import danishFlag from '../../images/danish-flag.svg';
import socialMediaMashup from '../../images/social-media-mashup.svg';
import coolStuff from '../../images/drawing.svg';
import snake from '../../images/snake.svg';

// Define the number of grid columns for specific view port sizes
const gridColumnIntervals = [
  { width: 800, columns: 1 },
  { width: 1200, columns: 2 },
  { width: 99999, columns: 4 },
];

export class SquareMenu extends React.Component {
  state = { menuPosition: 'top' };

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeydown);
  }

  render() {
    return (
      <SquareMenuContainer>
        <GridContainer gridColumnIntervals={gridColumnIntervals}>
          <SquareMenuItem menuPosition={this.state.menuPosition} link="/wishlist">
            <ImageLink 
            altText="Wishlist"
            src={danishFlag}
            height={'100%'}
            width={'100%'} />
          </SquareMenuItem>
          <SquareMenuItem menuPosition={this.state.menuPosition} link="/socialmedia">
            <ImageLink 
              altText="Find me"
              src={socialMediaMashup}
              height={'100%'}
              width={'100%'} />
          </SquareMenuItem>
          <SquareMenuItem menuPosition={this.state.menuPosition} link="/coolstuff" borderColor={colors.mediumGreen}>
            <ImageLink 
              altText="Cool stuff'n'tricks"
              src={coolStuff}
              height={'100%'}
              width={'100%'} />
          </SquareMenuItem>
          <SquareMenuItem menuPosition={this.state.menuPosition} link="/snake" borderColor={colors.mediumGreen}>
            <ImageLink 
              altText="Play snake"
              src={snake}
              height={'100%'}
              width={'100%'} />
          </SquareMenuItem>
        </GridContainer>
      </SquareMenuContainer>
    );
  }
}

const SquareMenuContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-top: 20px;
`;