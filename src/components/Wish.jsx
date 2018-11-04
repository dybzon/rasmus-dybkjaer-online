import * as React from 'react';
import styled from 'styled-components';
import { FoldableContainer } from './FoldableContainer';
import { colors } from '../utilities';

export class Wish extends React.Component {
  render() {
    return (
      <FoldableContainer header={this.props.name} borderColor={colors.darkRose} headerColorOpen={colors.lightRose} headerColorClosed={'#fff'}>
        {this.renderPrice()}
        {this.renderSalesLink()}
      </FoldableContainer>
    );
  }

  renderPrice() {
    if(this.props.price) {
      return <WishDetailsContainer>Estimated price (DKK): {this.props.price}</WishDetailsContainer>;
    }
  }

  renderSalesLink() {
    return this.props.salesLink ? (<WishDetailsContainer><a href={this.props.salesLink} target='blank'>Find it here...</a></WishDetailsContainer>) : null;
  }
}

const WishDetailsContainer = styled.div`
  padding-left: 12px;
`;