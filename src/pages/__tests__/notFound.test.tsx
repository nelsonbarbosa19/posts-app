import { render, screen } from '@testing-library/react';
import { NotFound } from '../notFound';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('Pages/NotFound', () => {
  it('renders correctly', () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <NotFound />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText('404 - Not Found')).toBeInTheDocument();

    expect(
      screen.getByRole('link', { name: 'Go back to the homepage' })
    ).toHaveAttribute('href', '/');
  });
});
