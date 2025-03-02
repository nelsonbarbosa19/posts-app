import { BrowserRouter } from 'react-router-dom';
import { PostItemType } from '../../components';
import { PostDetail } from '../postDetail';
import { render, waitFor, screen } from '@testing-library/react';
import { useAppStore } from '../../store';
import { useRetrieveComments } from '../../services';
import { ThemeProvider } from '../../utils/theme/ThemeProvider';

// Mock of React Router that returns a post id
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: () => ({
    id: '1',
  }),
}));

// Mock of Zustand store
jest.mock('../../store/app/app.store');

// Mock of comments service
jest.mock('../../services/useRetrieveComments');

describe('Pages/PostDetail', () => {
  const mockPost: PostItemType = {
    id: 1,
    title: 'Test Post',
    body: 'Test Body',
    userId: 1,
    user: {
      id: 1,
      name: 'Test User',
      username: 'testuser',
      email: 'test@example.com',
      address: {
        street: 'Test Street',
        suite: 'Suite 123',
        city: 'Test City',
        zipcode: '12345',
        geo: {
          lat: '123',
          lng: '456',
        },
      },
      phone: '123-456-7890',
      website: 'test.com',
      company: {
        name: 'Test Company',
        catchPhrase: 'Test Catch Phrase',
        bs: 'Test BS',
      },
    },
  };

  beforeEach(() => {
    // Mock of Zustand store
    (useAppStore as unknown as jest.Mock).mockReturnValue({
      posts: [mockPost],
      users: [mockPost.user],
    });

    // Mock of comments service
    (useRetrieveComments as jest.Mock).mockReturnValue({
      retrieve: jest.fn().mockResolvedValue({
        data: [],
        success: true,
      }),
    });
  });

  it('renders post detail correctly', async () => {
    render(
      <ThemeProvider>
        <BrowserRouter>
          <PostDetail />
        </BrowserRouter>
      </ThemeProvider>
    );

    await waitFor(() => {
      expect(screen.getByText('Test Post')).toBeInTheDocument();
      expect(screen.getByText('Test Body')).toBeInTheDocument();
      expect(screen.getByText('Test User')).toBeInTheDocument();
    });
  });
});
