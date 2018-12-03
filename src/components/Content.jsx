import * as React from 'react';
import styled from 'styled-components';

export const Content = props =>
(<StyledContent>
  {props.children}
</StyledContent>);

const StyledContent = styled.div`
  max-width: 800px;
  width: 100%;
  height: 100%;
  margin: auto;
  background-color: white;
  min-height: calc(100vh - 4rem - 8px);
`;