import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Home } from '../home/home';
import { BrowserRouter } from 'react-router-dom';
import { useHome } from '../home/home.hook';
import * as router from 'react-router-dom';
import { PostItemType } from '../../components/molecules/postItem/index.ts';
import { ThemeProvider } from '../../utils/theme/index.ts';

// Mock do hook useHome
jest.mock('../home/home.hook', () => ({
  useHome: jest.fn(),
}));

// Mock useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

const mockUseHome = useHome as jest.MockedFunction<typeof useHome>;

describe('Pages/Home', () => {
  // Mock posts data
  const mockPosts: PostItemType[] = [
    {
      userId: 1,
      id: 1,
      title: 'Post 1 Title',
      body: 'Post 1 Body',
    },
    {
      userId: 2,
      id: 2,
      title: 'Post 2 Title',
      body: 'Post 2 Body',
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Home page renders posts list correctly', async () => {
    // Mock the useHome hook to return the mock posts
    mockUseHome.mockReturnValue({
      postsList: mockPosts,
      onSelectPost: jest.fn(),
    });

    // Render the component
    render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Verify that posts are rendered
    await waitFor(() => {
      expect(screen.getByText('Post 1 Title')).toBeInTheDocument();
      expect(screen.getByText('Post 2 Title')).toBeInTheDocument();
    });
  });

  it('navigates to correct post detail when clicking view comments button', async () => {
    const mockPost = mockPosts[0];

    // Setup mock for useNavigate
    const mockNavigate = jest.fn();
    jest.spyOn(router, 'useNavigate').mockImplementation(() => mockNavigate);

    // Create a mock onSelectPost that calls navigate
    const mockOnSelectPost = jest.fn((post: PostItemType) => {
      mockNavigate(`/post/${post.id}`);
    });

    // Setup mock for useHome
    mockUseHome.mockReturnValue({
      postsList: [mockPost],
      onSelectPost: mockOnSelectPost,
    });

    render(
      <ThemeProvider>
        <BrowserRouter>
          <Home />
        </BrowserRouter>
      </ThemeProvider>
    );

    // Find and click the "View comments" button
    const viewCommentsButton = screen.getByRole('button', {
      name: 'View comments',
    });

    await userEvent.click(viewCommentsButton);

    // Verify that onSelectPost was called with the correct post
    expect(mockOnSelectPost).toHaveBeenCalledWith(mockPost);

    // Verify that navigate was called with the correct path
    expect(mockNavigate).toHaveBeenCalledWith(`/post/${mockPost.id}`);
  });
});
