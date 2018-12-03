import * as React from 'react';
import { ImageGrid, ImageLink, Content, Background } from '../components';
import linkedInLogo from '../images/linkedin-logo.svg';
import mediumLogo from '../images/medium-logo.svg';
import githubLogo from '../images/github-logo.svg';
import stackoverflowLogo from '../images/stackoverflow-logo.svg';
import facebookLogo from '../images/facebook-logo.svg';
import instagramLogo from '../images/instagram-logo.svg';

export class SocialMedia extends React.Component {
  render() {
    return (
      <Background>
      <Content>
        <ImageGrid>
          <ImageLink 
            altText="Dybzon on Stackoverflow"
            url="https://stackoverflow.com/users/2435992/dybzon"
            src={stackoverflowLogo}
            height={'100%'}
            width={'100%'} />
          <ImageLink
            altText="Dybzon on Github"
            url="https://github.com/dybzon"
            src={githubLogo}
            height={'100%'}
            width={'100%'} />
          <ImageLink
            altText="@rasmusdybkjaer on Medium"
            url="https://medium.com/@rasmusdybkjaer"
            src={mediumLogo}
            height={'100%'}
            width={'100%'} />
          <ImageLink
            altText="Rasmus Dybkjær on LinkedIn"
            url="https://www.linkedin.com/in/rasmus-dybkj%C3%A6r-4115192b/"
            src={linkedInLogo}
            height={'100%'}
            width={'100%'} />
          <ImageLink
            altText="Rasmus Dybkjær on Facebook"
            url="https://www.facebook.com/dybbe"
            src={facebookLogo}
            height={'100%'}
            width={'100%'} />
          <ImageLink
            altText="rasmusdybkjaer on Instagram"
            url="https://www.instagram.com/rasmusdybkjaer/"
            src={instagramLogo}
            height={'100%'}
            width={'100%'} />
        </ImageGrid>
      </Content>
      </Background>);
  }
}
