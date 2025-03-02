import { render } from '@testing-library/react';
import { PostsList } from '../molecules/postsList/postsList.tsx';
import { PostItemType } from '../molecules/postItem/index.ts';
import { screen } from '@testing-library/react';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('Components/PostsList', () => {
  const mockPosts: PostItemType[] = [
    {
      id: 1,
      title: 'Post 1',
      body: 'Post 1 body',
      userId: 1,
    },
    {
      id: 2,
      title: 'Post 2',
      body: 'Post 2 body',
      userId: 2,
    },
  ];

  it('should render posts list', async () => {
    render(
      <ThemeProvider>
        <PostsList postsList={mockPosts} onSelectPost={jest.fn()} />
      </ThemeProvider>
    );

    expect(screen.getByText('Post 1')).toBeInTheDocument();
    expect(screen.getByText('Post 2')).toBeInTheDocument();
  });

  it('renders empty state when no posts are available', async () => {
    const emptyMockPosts: PostItemType[] = [];

    render(
      <ThemeProvider>
        <PostsList postsList={emptyMockPosts} onSelectPost={jest.fn()} />
      </ThemeProvider>
    );

    expect(screen.queryByText('Post 1')).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });
});
