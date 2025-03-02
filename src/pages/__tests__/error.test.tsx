import { render, screen } from '@testing-library/react';
import { Error } from '../error';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../utils/theme/ThemeProvider';

describe('Pages/Error', () => {
  it('renders correctly with default message', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Error />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Oops! Something went wrong.')).toBeInTheDocument();

    expect(
      screen.getByText("We're sorry, but an unexpected error occurred.")
    ).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Go to the homepage' })
    ).toHaveAttribute('href', '/');
  });

  it('renders correctly with custom message', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Error errorText="Custom error message" />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('Custom error message')).toBeInTheDocument();
  });
});
