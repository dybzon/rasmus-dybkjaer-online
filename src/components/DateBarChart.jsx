import styled from 'styled-components';
import React from 'react';
import { colors } from '../utilities';
import gift from '../images/gift.svg';

export class DateBarChart extends React.PureComponent {
  render() {
    const targetDate = new Date(this.props.targetDate);
    const now = new Date();
    const timeToTarget = targetDate.getTime() - now.getTime();
    const daysToTarget = Math.ceil(timeToTarget / (1000 * 60 * 60 * 24));
    const width = Math.ceil(daysToTarget / 365 * 100);
    const flexGrow = width / (100 - width);
    const textPart1 = daysToTarget;
    const textPart2 = `dag${daysToTarget > 1 && 'e'} til ${this.props.event}`;
    const textLeft = daysToTarget > 240 ? `${textPart1} ${textPart2}` : (daysToTarget < 10 ? '' : textPart1);
    const textRight = daysToTarget > 240 ? '' : (daysToTarget < 10 ? `${textPart1} ${textPart2}` : textPart2);
    return (
      <BarChartContainer>
        <BarChartFiller flexGrow={flexGrow} color={colors.lightGreen} isLeft>
          <TextContainerRight>{textLeft}</TextContainerRight>
          <GiftContainer />
        </BarChartFiller>
        <BarChartFiller flexGrow={1} color={colors.lightRose}>
          <TextContainerLeft>{textRight}</TextContainerLeft>
          <TextContainerLeftReverse>Så' der gaver til Rasmus!</TextContainerLeftReverse>
        </BarChartFiller>
      </BarChartContainer>
    );
  }
}

const BarChartContainer = styled.div`
  width: 100%;
  height: 30px;
  padding: 10px 0px;
  display: flex;
`;

const TextContainerRight = styled.div`
  position: absolute;
  right: 4px;
  top: 50%;
  transform: translate(0%, -50%);
  transition: opacity .5s linear;

  ${BarChartContainer}:hover & {
    opacity: 0;
  }    
`;

const TextContainerLeft = styled.div`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translate(0%, -50%);
  transition: opacity .5s linear;

  ${BarChartContainer}:hover & {
    opacity: 0;
  }
`;

const TextContainerLeftReverse = styled.div`
  position: absolute;
  left: 4px;
  top: 50%;
  transform: translate(0%, -50%);
  transition: opacity .5s linear;
  opacity: 0;

  ${BarChartContainer}:hover & {
    opacity: 1;
  }
`;

const GiftContainer = styled.div`
  background: url(${gift}) center no-repeat;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 0%;
  width: 40px;
  transition: all .5s linear;

  ${BarChartContainer}:hover & {
    top: 50%;
    left: 0;
    transform: translate(-150%, -50%);
    height: 100%;
  }  
`;

const BarChartFiller = styled.div`
  position: relative;
  flex-grow: ${props => props.flexGrow};
  height: 100%;
  background: ${props => props.color};
  background-size: contain;
  border-radius: 4px;
  transition: flex-grow .5s;

  ${BarChartContainer}:hover & {
    ${props => props.isLeft && 'flex-grow: 0;'}
  }
`;
