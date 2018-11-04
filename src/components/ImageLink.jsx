import * as React from 'react';
import styled from 'styled-components';
import { colors } from '../utilities';

export class ImageLink extends React.Component {
  render() {
    return (
    <StyledImageContainer onClick={this.handleImageClick} {...this.props}>
      <StyledImageOverlay>
        <StyledText>{this.props.altText}</StyledText>
      </StyledImageOverlay>
      <StyledImageHelper></StyledImageHelper>
      <StyledImage src={this.props.src} />
    </StyledImageContainer>);
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

  :hover > div {
    opacity: 1;
  }
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