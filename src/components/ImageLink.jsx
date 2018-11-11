import * as React from 'react';
import styled, { css } from 'styled-components';
import { colors } from '../utilities';
import { DeviceContext } from '../providers';

export class ImageLink extends React.Component {
  render() {
    return (
      <DeviceContext.Consumer>
      {deviceInfo => (
        <StyledImageContainer onClick={this.handleImageClick} {...this.props} isTouch={deviceInfo.isTouch}>
          <StyledImageOverlay>
            <StyledText>{this.props.altText}</StyledText>
          </StyledImageOverlay>
          <StyledImageHelper></StyledImageHelper>
          <StyledImage src={this.props.src} />
        </StyledImageContainer>)}
      </DeviceContext.Consumer>);
  }

  handleImageClick = () => {
    if(this.props.url) {
      const tab = window.open(this.props.url, '_blank');
      tab.focus();
    }
  }
}

const StyledImageContainer = styled.div`
  position: relative;
  cursor: pointer;
  ${props => props.width && `width: ${props.width}`}
  ${props => props.height && `height: ${props.height}`}

  /* We'll remove :hover effexts on touch devices */
  ${props => !props.isTouch && css`
    :hover > div {
      opacity: 1;
    }`}
`;

// A helper div to help the image stay centered inside its parent element
const StyledImageHelper = styled.div`
  display: inline-block;
  height: 100%;
  vertical-align: middle;
`;

const StyledImage = styled.img`
  vertical-align: middle;
  max-height: 100%;
  max-width: 100%;
`;

const StyledImageOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .3s ease;
  background-color: ${colors.mediumGreen};
`;

const StyledText = styled.div`
  color: white;
  font-size: 1.25rem;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
`;