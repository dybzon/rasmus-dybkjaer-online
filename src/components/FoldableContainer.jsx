import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../utilities';

export class FoldableContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: !!props.initialOpen }
  }

  render() {
    return (
      <Container {...this.state} {...this.props}>
        <ContainerHeader {...this.state} {...this.props} onClick={this.handleClick}>
          {this.props.header}
        </ContainerHeader>
        <ContainerContent {...this.state} maxHeight={this.props.maxContentHeight || 200}>
          {this.props.children}
        </ContainerContent>
      </Container>
    );
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  }
}

const Container = styled.div`
  width: 100%;
  margin-bottom: 4px;
  color: ${colors.darkGrey};
  border-left: 1px solid transparent;
  border-top: 1px solid transparent;
  transition: border .2s ease-out;

  ${props => props.open && css`border-left: 1px solid ${(props.borderColor || colors.lightGreen)};`}
  :hover {
    ${props => !props.open && css`border-left: 1px solid ${props.borderColor || colors.lightGreen};`}
  }
`;

const ContainerHeader = styled.div`
  width: 100%;
  cursor: pointer;
  padding: 2px 6px;
  z-index: 10;
`;

const ContainerContent = styled.div`
  width: 100%;
  transition: all .2s ease-out;
  ${props => props.open 
    ? css`max-height: ${props.maxHeight}px;` 
    : css`max-height: 0px; overflow-y: hidden;`}
`;