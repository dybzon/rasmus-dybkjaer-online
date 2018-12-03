import styled from 'styled-components';
export const Background = styled.div`
  width: 100%;
  height: ${props => props.height ? props.height : '100%'};
  margin: 0;
  background-color: #dee5db;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%23185c17' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E") ${props => props.background && `, ${props.background}`};
`;