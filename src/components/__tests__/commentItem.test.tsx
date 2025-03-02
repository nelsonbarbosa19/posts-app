import { render, screen } from '@testing-library/react';
import { CommentItem } from '../molecules/commentItem/commentItem.tsx';
import { CommentItemType } from '../molecules/commentItem/index.ts';
import { ThemeProvider } from '../../utils/theme/index.ts';

describe('components/CommentItem', () => {
  it('renders comment item', () => {
    const comment: CommentItemType = {
      id: 1,
      name: 'Comment 1 name',
      email: 'test@test.com',
      body: 'Comment 1 body',
      postId: 1,
    };

    render(
      <ThemeProvider>
        <CommentItem comment={comment} />
      </ThemeProvider>
    );

    expect(screen.getByText('Comment 1 name')).toBeInTheDocument();
    expect(screen.getByText('Comment 1 body')).toBeInTheDocument();
  });
});
