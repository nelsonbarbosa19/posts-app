import styled from '@emotion/styled';

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

export const AboutTitle = styled.h1`
  margin-bottom: 1.5rem;
  color: #333;
`;

export const AboutText = styled.p`
  margin-bottom: 1rem;
  max-width: 600px;
  line-height: 1.6;
  text-align: center;
`;

export const AboutLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    color: #0056b3;
  }
`;
