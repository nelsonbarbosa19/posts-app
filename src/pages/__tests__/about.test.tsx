import { render, screen } from '@testing-library/react';
import { About } from '../about';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../utils/theme/ThemeProvider';

describe('Pages/About', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <About />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(
      screen.getByText("Welcome to the Posts APP! Let's learn more about us.")
    );
    expect(screen.getByRole('link', { name: 'here' })).toHaveAttribute(
      'href',
      'https://www.linkedin.com/in/nelsonbarbosa19/'
    );
  });
});
