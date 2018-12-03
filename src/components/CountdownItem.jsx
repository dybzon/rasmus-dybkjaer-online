import React from 'react';
import styled from 'styled-components';

export class CountdownItem extends React.PureComponent {
  render() {
    const { color, content, fontSize } = this.props;
    return (
      <Container color={color}>
        <Content fontSize={fontSize}>{content}</Content>
      </Container>
    );
  }
}

const Container = styled.div`
  height: 100%;
  flex-grow: 1;
  position: relative;
  background: ${props => props.color};
  margin: 0;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: ${props => props.fontSize || '1rem'};
  color: white;
`;
