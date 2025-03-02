import { render, screen } from '@testing-library/react';
import { PostItem } from '../molecules/postItem/index.ts';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('components/PostItem', () => {
  it('renders post item with default appearance', () => {
    render(
      <ThemeProvider>
        <PostItem
          post={{ id: 1, title: 'Test Post', body: 'Test Body', userId: 1 }}
          appearance="static"
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
    expect(
      screen.queryByRole('button', { name: 'View comments' })
    ).not.toBeInTheDocument();
  });

  it('renders post item with selectable appearance', () => {
    render(
      <ThemeProvider>
        <PostItem
          post={{ id: 1, title: 'Test Post', body: 'Test Body', userId: 1 }}
          appearance="selectable"
          onSelectPost={() => {}}
        />
      </ThemeProvider>
    );

    expect(screen.getByText('Test Post')).toBeInTheDocument();
    expect(screen.getByText('Test Body')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'View comments' })
    ).toBeInTheDocument();
  });
});
