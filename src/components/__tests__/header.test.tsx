import { render, screen } from '@testing-library/react';
import { Header } from '../organisms/header/header.tsx';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('components/Header', () => {
  it('renders footer', () => {
    const appTitle = 'Test App';

    render(
      <ThemeProvider>
        <BrowserRouter>
          <Header appTitle={appTitle} />
        </BrowserRouter>
      </ThemeProvider>
    );

    expect(screen.getByText(appTitle)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();

    // expect(screen.getByText(appTitle)).toBeInTheDocument();
  });
});
