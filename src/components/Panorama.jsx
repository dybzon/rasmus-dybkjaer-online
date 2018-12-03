import React from 'react';
import styled from 'styled-components';

export const Panorama = props => {
  const { alpha, onClick, imageSrc, children } = props;
  return (
    <ImageContainer onClick={onClick}>
      <Image alpha={alpha} src={imageSrc} height={window.innerWidth / 3}>{children}</Image>
    </ImageContainer>
  )  
}

const Image = styled.div.attrs({ 
  style: ({ alpha, height }) => ({transform: `translateX(${100 / 360 * alpha}%)`, height })})`
  overflow: hidden;
  background-image: url("${props => props.src}");
  background-size: cover;
  background-repeat: no-repeat;
  flex-grow: 1;
  height: ${props => props.height}px;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 600%;
  overflow: hidden;
  transform: translateX(-83.33333%);
`;