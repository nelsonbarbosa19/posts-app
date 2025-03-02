import React from 'react';
import {
  AboutContainer,
  AboutTitle,
  AboutText,
  AboutLink,
} from './about.styles';

export const About: React.FC = () => {
  return (
    <AboutContainer>
      <AboutTitle>About Us</AboutTitle>
      <AboutText>
        Welcome to the Posts APP! Let's learn more about us.
      </AboutText>
      <AboutText>
        Developed by: Nelson Barbosa! Linkedin{' '}
        <AboutLink
          href="https://www.linkedin.com/in/nelsonbarbosa19/"
          target="_blank"
        >
          here
        </AboutLink>
        .
      </AboutText>
    </AboutContainer>
  );
};
