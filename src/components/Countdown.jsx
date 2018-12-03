import React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities';
import { CountdownItem } from './CountdownItem';
import { Header1 } from './Header1';
import { InnerContent } from './InnerContent';

export class Countdown extends React.Component {
  state = { now: new Date() };

  componentDidMount() {
    this.interval = setInterval(this.updateTime, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { event } = this.props;
    const targetDate = new Date(this.props.targetDate);
    const { now } = this.state;
    const timeToTarget = targetDate.getTime() - now.getTime();
    const msPerSecond = 1000;
    const msPerMinute = msPerSecond * 60;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const daysToTarget = Math.floor(timeToTarget / msPerDay);
    let msLeft = timeToTarget - daysToTarget * msPerDay;
    const hoursToTarget = Math.floor(msLeft / msPerHour);
    msLeft = msLeft - hoursToTarget * msPerHour;
    const minutesToTarget = Math.floor(msLeft / msPerMinute);
    msLeft = msLeft - minutesToTarget * msPerMinute;
    const secondsToTarget = Math.floor(msLeft / msPerSecond);
    return (
    <Background>
      <InnerContent>
        <Header1>Nedtælling til {event}</Header1>
        <Container>
          <InnerContainer height={'75%'}>
            <CountdownItem color={colors.mediumGreen} fontSize={'3rem'} content={daysToTarget} />
            <CountdownItem color={colors.mediumGreen} fontSize={'3rem'} content={hoursToTarget} />
            <CountdownItem color={colors.mediumGreen} fontSize={'3rem'} content={minutesToTarget} />
            <CountdownItem color={colors.mediumGreen} fontSize={'3rem'} content={secondsToTarget} />
          </InnerContainer>
          <InnerContainer height={'25%'}>
            <CountdownItem content="dage" />
            <CountdownItem content="timer" />
            <CountdownItem content="minutter" />
            <CountdownItem content="sekunder" />
          </InnerContainer>
        </Container>
      </InnerContent>
    </Background>);
  }

  updateTime = () => {
    this.setState({ now: new Date() });
  }
}

const Background = styled.div`
  background: ${colors.darkRose};
  color: ${colors.mediumGreen};
`;

const Container = styled.div`
  height: 120px;
  width: 100%;
  display: flex;
  margin: 0;
  padding: 3rem 0;
  justify-content: space-between;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  width: 100%;
  height: ${props => props.height};
  display: flex;
  justify-content: center;
`;
