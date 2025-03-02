import { render, screen } from '@testing-library/react';
import { Footer } from '../organisms/footer/footer.tsx';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('components/Footer', () => {
  it('renders footer', () => {
    const year = new Date().getFullYear();
    const appName = 'Test App';

    render(
      <ThemeProvider>
        <Footer appName={appName} />
      </ThemeProvider>
    );

    expect(screen.getByText(`©${year} ${appName}`)).toBeInTheDocument();
  });
});
