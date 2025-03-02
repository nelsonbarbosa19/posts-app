import styled from '@emotion/styled';

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  text-align: center;
`;

export const ErrorTitle = styled.h1`
  color: #e53e3e;
  margin-bottom: 1rem;
`;

export const ErrorMessage = styled.p`
  margin-bottom: 1.5rem;
  max-width: 600px;
  line-height: 1.6;
`;

export const ErrorLink = styled.a`
  color: #3182ce;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
