import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ErrorContainer,
  ErrorTitle,
  ErrorMessage,
  ErrorLink,
} from './error.styles';

interface ErrorProps {
  errorText?: string;
}

export const Error: React.FC<ErrorProps> = ({ errorText }) => {
  const location = useLocation();

  // If the error text is not provided, use the error text from the location state.
  const errorMessage =
    location.state?.errorText ||
    errorText ||
    "We're sorry, but an unexpected error occurred.";

  return (
    <ErrorContainer>
      <ErrorTitle>Oops! Something went wrong.</ErrorTitle>
      <ErrorMessage>{errorMessage}</ErrorMessage>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <ErrorLink as="span">Go to the homepage</ErrorLink>
      </Link>
    </ErrorContainer>
  );
};
